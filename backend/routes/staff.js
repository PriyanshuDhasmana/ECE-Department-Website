const express = require('express');
const router = express.Router();
const Staff = require('../models/Staff'); // Import Staff model
const auth = require('../middleware/auth'); // Auth middleware
const authorizeRoles = require('../middleware/role'); // Role-based authorization middleware

// GET all staff (Accessible to everyone)
router.get('/', async (req, res) => {
  try {
    const staff = await Staff.find();
    res.json(staff);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// POST a new staff member (Accessible only to admin)
router.post('/', auth, authorizeRoles('admin'), async (req, res) => {
  const { name, position, department, email, phone, image } = req.body;

  const newStaff = new Staff({
    name,
    position,
    department,
    email,
    phone,
    image,
  });

  try {
    await newStaff.save();
    res.status(201).json({ message: 'Staff added successfully', staff: newStaff });
  } catch (err) {
    res.status(400).json({ message: 'Error adding staff', error: err.message });
  }
});

module.exports = router;
