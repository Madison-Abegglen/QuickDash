const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const loginLayout = "../views/layouts/login";
const jwtSecret = process.env.JWT_SECRET;

// Verify User is Logged In
const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;
  if(!token) {
    return res.status(401).json({ message: 'Unauthorized'});
  }
  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.userId = decoded.userId;
    next();
  } catch(error) {
    res.status(401).json({ message: 'Unauthorized'});
  }
}

// Get - Login Page
router.get("/login", async (req, res) => {
  try {
    const locals = {
      title: "QuickDash | Login",
      description:
        "A versatile dashboard application to provide users with essential information and task management in one place.",
    };
    res.render("login", { locals, layout: loginLayout });
  } catch (error) {
    console.log(error);
  }
});

// Post - Authorize Login
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    // Check Username is Valid
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid Credentials' });
    }
    // Check Password is Valid
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid Credentials' });
    }
    // Get token, assign Cookie, redirect to Home Page
    const token = jwt.sign({ userId: user._id }, jwtSecret );
    res.cookie('token', token, { httpOnly: true });
    res.redirect('/home');
  } catch (error) {
    console.log(error);
  }
});

// Post - Authorize Registration
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
      const user = await User.create({ username, password:hashedPassword });
      res.status(201).json({ message: 'User Created', user });
    } catch (error) {
      if(error.code === 11000) {
        res.status(409).json({ message: 'User already in use'});
      }
      res.status(500).json({ message: 'Internal server error'})
    }
  } catch (error) {
    console.log(error);
  }
});

// Get Home Dashboard
router.get("/home", authMiddleware, async (req, res) => {
  try {
    const locals = {
      title: "QuickDash | Home",
      description:
        "A versatile dashboard application to provide users with essential information and task management in one place.",
    };
    const data = await Task.find();
    res.render("home", { locals, data });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;