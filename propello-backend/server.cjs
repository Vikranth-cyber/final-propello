const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mysql = require('mysql2/promise');
const cors = require('cors');
const { OAuth2Client } = require('google-auth-library');
const messageRoutes = require('./message.cjs');

const app = express();

// Enhanced CORS configuration
app.use(cors({
  origin: '*', // Allow all origins temporarily for debugging
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

app.use(express.json());

const JWT_SECRET = 'your_super_secret_key';
const GOOGLE_CLIENT_ID = '355871214182-btv1jgg73muhg8inefr8e7lv6755p5dq.apps.googleusercontent.com';
const client = new OAuth2Client(GOOGLE_CLIENT_ID);

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'propello_ai',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Invalid token' });
    req.userId = decoded.id;
    next();
  });
};

// Signup route
app.post('/api/signup', async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Missing fields' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await pool.execute(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [username, email, hashedPassword]
    );

    res.status(201).json({ 
      user: { 
        id: result.insertId, 
        username, 
        email 
      } 
    });
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ message: 'Username or email already exists' });
    }
    next(err);
  }
});

// Signin route
app.post('/api/signin', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: 'Missing username or password' });
    }

    const [rows] = await pool.execute('SELECT * FROM users WHERE username = ?', [username]);
    if (rows.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const user = rows[0];
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1d' });
    res.json({
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
      token,
    });
  } catch (err) {
    next(err);
  }
});

// Google OAuth route with improved error handling
app.post('/api/auth/google', async (req, res) => {
  try {
    const { credential } = req.body;
    if (!credential) {
      return res.status(400).json({ message: 'Missing Google credential' });
    }

    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: GOOGLE_CLIENT_ID,
    });

    if (!ticket) {
      return res.status(400).json({ message: 'Invalid Google credential' });
    }

    const payload = ticket.getPayload();
    if (!payload) {
      return res.status(400).json({ message: 'Invalid Google payload' });
    }

    const { name, email, sub: googleId } = payload;

    let [rows] = await pool.execute(
      'SELECT * FROM users WHERE google_id = ?',
      [googleId]
    );

    let user = rows[0];

    if (!user) {
      [rows] = await pool.execute(
        'SELECT * FROM users WHERE email = ?',
        [email]
      );
      user = rows[0];

    if (user) {
  await pool.execute(
    'UPDATE users SET google_id = ? WHERE id = ?',
    [googleId, user.id]
  );
} else {
  const username = name || email.split('@')[0];

  [rows] = await pool.execute(
    'INSERT INTO users (username, email, google_id, password) VALUES (?, ?, ?, ?)',
    [username, email, googleId, null] // Explicitly set password to NULL
  );

  user = {
    id: rows.insertId,
    username,
    email,
    google_id: googleId
  };
}

    }

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1d' });

    return res.json({
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        name: user.username
      },
      token
    });

  } catch (error) {
    console.error('Google authentication error:', error);
    return res.status(500).json({ 
      message: 'Google authentication failed',
      error: error.message 
    });
  }
});

// Verify token route
app.get('/api/verify', verifyToken, async (req, res, next) => {
  try {
    const [rows] = await pool.execute(
      'SELECT id, username, email FROM users WHERE id = ?',
      [req.userId]
    );

    if (!rows.length) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json({ user: rows[0] });
  } catch (err) {
    next(err);
  }
});

// Contact form routes
app.use('/api', messageRoutes);

// Sanity check route
app.get('/', (req, res) => {
  res.send({ message: 'Propello AI backend is running' }); // Ensure JSON response
});

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err.stack);
  res.status(500).json({
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined,
  });
});

app.listen(4000, () => {
  console.log('✅ Server running on http://localhost:4000');
});
