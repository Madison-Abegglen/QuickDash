const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Routes
// Get Default Page
router.get('', (req, res) => {
  const locals = {
    title: "QuickDash | Login",
    description: "A versatile dashboard application to provide users with essential information and task management in one place."
  }
  res.render('login', { locals });
})

// Get Login Page
router.get('/login', (req, res) => {
  const locals = {
    title: "QuickDash | Login",
    description: "A versatile dashboard application to provide users with essential information and task management in one place."
  }
  res.render('login', { locals });
})

// Get Home Page
router.get('/home', async (req, res) => {
  const locals = {
    title: "QuickDash | Home",
    description: "A versatile dashboard application to provide users with essential information and task management in one place."
  }
  
  try {
    const data = await Task.find();
    res.render('home', { locals, data });
  } catch (error) {
    console.log(error);
  }

  
})



module.exports = router;

// Inserts Hard-coded Test Data
// function insertTaskData () {
//   Task.insertMany([
//     {
//       title: "Test Task 1",
//       body: "This is the Test task - 1",
//       isCompleted: false
//     }
//   ])
// }
// insertTaskData();