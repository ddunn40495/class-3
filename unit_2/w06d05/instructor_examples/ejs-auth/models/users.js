const mongoose = require('mongoose')

// Schema
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: String
})
// Convert Schema into a model

// first argument is the collection name, second is the shape of the data
const User = mongoose.model('User', userSchema)

module.exports = User
