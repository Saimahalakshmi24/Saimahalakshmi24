const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
  // username: String,
  email: String,
  password: String,
});


module.exports = mongoose.model('User', userSchema);