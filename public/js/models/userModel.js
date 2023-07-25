const mongoose = require('mongoose');

// Define User Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

// Create & Export User Model
const User = mongoose.model('User', userSchema);
module.exports = User;