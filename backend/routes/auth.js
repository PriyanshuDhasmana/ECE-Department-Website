const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

const JWT_SECRET = 'your_jwt_secret_key'; // 🔐 Replace with a strong secret, store in .env later

// Register
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully ✅' });
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong 🚨' });
  }
});

// Login
// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(404).json({ message: 'User not found ❌' });
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
  
      // ✅ Generate JWT token with role
      const token = jwt.sign(
        { id: user._id, role: user.role }, // include role
        JWT_SECRET,
        { expiresIn: '1h' }
      );
  
      // ✅ Send token and role in response
      res.status(200).json({
        message: 'Login successful 🎉',
        token,
        user: {
          id: user._id,
          email: user.email,
          role: user.role // <-- Added this line
        }
      });
  
    } catch (err) {
      res.status(500).json({ message: 'Something went wrong 🚨' });
    }
  });
  

module.exports = router;
