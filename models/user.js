const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  region: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  token: {
    type: String,
  },
  tokenExpiry: {
    type: Date,
  },
  refreshToken: {
    type: String,
  },
  refreshTokenExpiry: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
