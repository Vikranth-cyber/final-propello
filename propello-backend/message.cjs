const express = require('express');
const mysql = require('mysql2/promise');

const router = express.Router();

// Create MySQL pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'propello_ai',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// POST /api/contact
router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  try {
    await pool.execute(
      'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)',
      [name, email, message]
    );
    res.status(200).json({ message: 'Message submitted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;