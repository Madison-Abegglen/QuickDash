const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

// Register New User
router.post('/register', async (req, res) => {
    const { username, password, name } = req.body;
    try {
        // Check if Username Already Exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(409).json({ message: 'Username Already Exists' });
        }

        // Hash Password Prior to Saving in DB
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create New User Object
        const newUser = new User({
            username,
            password: hashedPassword,
            name
        });

        // Save the New User to DB
        const savedUser = await newUser.save();

        // Respond w/ Registered User's Data
        return res.status(201).json(savedUser);
    } catch (error) {
        // Error Handling
        console.error('Error Registering User: ', error);
        return res.status(500).json({ message: 'Error Registering User' });
    }
});

// Login User
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        // Check if User Exists 
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'User Not Found' });
        }

        // Validate Password 
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid Credentials' });
        }

        // Respond w/ User Data or JWT Token for Authentication
        return res.status(200).json(user);
    } catch (error) {
        // Error Handling
        console.error('Error Logging in User: ', error);
        return res.status(500).json({ message: 'Error Logging in User' });
    }
});

module.exports = router;