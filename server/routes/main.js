const express = require('express');
const router = express.Router();

// Routes
router.get('', (req, res) => {
  const locals = {
    title: "QuickDash | Login",
    description: "A versatile dashboard application to provide users with essential information and task management in one place."
  }
  res.render('login', { locals });
})

router.get('/login', (req, res) => {
  const locals = {
    title: "QuickDash | Login",
    description: "A versatile dashboard application to provide users with essential information and task management in one place."
  }
  res.render('login', { locals });
})

router.get('/home', (req, res) => {
  const locals = {
    title: "QuickDash | Home",
    description: "A versatile dashboard application to provide users with essential information and task management in one place."
  }
  res.render('home', { locals });
})

router.get('/profile', (req, res) => {
  const locals = {
    title: "QuickDash | Profile",
    description: "A versatile dashboard application to provide users with essential information and task management in one place."
  }
  res.render('profile', { locals });
})

module.exports = router;