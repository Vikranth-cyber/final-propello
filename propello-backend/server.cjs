const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mysql = require('mysql2/promise');
const cors = require('cors');
const messageRoutes = require('./message.cjs'); // <-- ✅ Contact routes

const app = express();
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.use(express.json());

const JWT_SECRET = 'your_super_secret_key';

// ✅ MySQL Pool (used in auth routes)
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'propello_ai',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// ✅ SIGNUP Route
app.post('/api/signup', async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await pool.execute(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [username, email, hashedPassword]
    );
    res.json({ user: { id: result.insertId, username, email } });
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ message: 'Username or email already exists' });
    }
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// ✅ SIGNIN Route
app.post('/api/signin', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Missing username or password' });
  }

  try {
    const [rows] = await pool.execute('SELECT * FROM users WHERE username = ?', [username]);
    if (rows.length === 0) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const user = rows[0];
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1d' });
    res.json({ user: { id: user.id, username: user.username, email: user.email }, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// ✅ Use contact form routes
app.use('/api', messageRoutes);

// ✅ Sanity check
app.get('/', (req, res) => {
  res.send('Propello AI backend is running');
});

// ✅ Start server
app.listen(4000, () => {
  console.log('✅ Server running on http://localhost:4000');
});