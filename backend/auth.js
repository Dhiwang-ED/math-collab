// Contoh route sederhana untuk autentikasi (bisa dikembangkan dengan JWT)
const express = require('express');
const router = express.Router();

// Dummy user data
const users = [
  { username: 'guru', password: 'password', role: 'teacher' },
  { username: 'siswa', password: 'password', role: 'student' }
];

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const found = users.find(u => u.username === username && u.password === password);
  if (found) {
    // TODO: Ganti dengan JWT
    res.json({ success: true, user: { username: found.username, role: found.role } });
  } else {
    res.status(401).json({ success: false });
  }
});

module.exports = router;