const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'student'],
    default: 'student',
  },
  resetOTP: {
    type: String,
  },
  otpExpiry: {
    type: Date,
  }
});

module.exports = mongoose.model('User', userSchema);
