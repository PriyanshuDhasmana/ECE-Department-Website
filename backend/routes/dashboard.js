const express = require('express');
const auth = require('../middleware/auth'); // Import auth middleware

const router = express.Router();

// Protected dashboard route
router.get('/', auth, (req, res) => {
  res.json({ message: 'Welcome to your protected dashboard!', user: req.user });
});

module.exports = router;
