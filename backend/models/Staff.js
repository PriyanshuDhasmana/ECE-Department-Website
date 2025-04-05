// backend/models/Staff.js

const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    default: "ECE",
  },
  email: String,
  phone: String,
  image: String, // optional: for staff photos
}, {
  timestamps: true
});

module.exports = mongoose.model('Staff', staffSchema);
