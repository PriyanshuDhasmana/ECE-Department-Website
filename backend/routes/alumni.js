// backend/routes/alumni.js
const express = require('express');
const router = express.Router();

// Dummy alumni data for now
const alumniData = [
  { id: 1, name: 'Anjali Verma', batch: 2018, currentPosition: 'Engineer at Google' },
  { id: 2, name: 'Rahul Mehta', batch: 2019, currentPosition: 'Hardware Designer at Intel' },
];

// GET /api/alumni
router.get('/', (req, res) => {
  res.json(alumniData);
});

module.exports = router;
