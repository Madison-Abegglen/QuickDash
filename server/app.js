const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://madisonabegglen:W4tLreGOCeWzNWof@quickdashdb.zmfbrrp.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB: ', error);
    });

// Setup Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Parse Incoming Requests w/ JSON Payloads
app.use(express.json());

// Setup Routes
app.use('/', require('./controllers/authController'));

// Setup Basic Error Handling Middleware
app.use((err, req, res, next) => {
    console.error('Error: ', err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});