const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Task Schema
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// Create & Export Task Model
const User = mongoose.model('User', UserSchema);
module.exports = User;