const express = require('express');
const router = express.Router();
const Staff = require('../models/Staff'); // Import Staff model

// GET all staff
router.get('/', async (req, res) => {
  try {
    const staff = await Staff.find();
    res.json(staff);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// POST a new staff member
router.post('/', async (req, res) => {
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
