// backend/routes/elsoc.js
const express = require('express');
const router = express.Router();

// Dummy ELSOC data for now
const elsocInfo = {
  name: 'ELSOC (Electronics Society)',
  description: 'A student-run society promoting innovation, workshops, and tech talks in the ECE department.',
  upcomingEvents: [
    { title: 'Circuit Design Workshop', date: '2025-04-15' },
    { title: 'Guest Talk: Future of Electronics', date: '2025-04-25' },
  ],
};

// GET /api/elsoc
router.get('/', (req, res) => {
  res.json(elsocInfo);
});

module.exports = router;
