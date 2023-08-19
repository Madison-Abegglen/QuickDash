const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// Get Home Page
router.get("/home", async (req, res) => {
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

// Inserts Hard-coded Test Data
// function insertTaskData () {
//   Task.insertMany([
//     {
//       title: "Test Task 2",
//       body: "This is the Test task - 2",
//       isCompleted: false
//     }
//   ])
// }
// insertTaskData();
