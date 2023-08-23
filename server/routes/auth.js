const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
const User = require("../models/User");
const loginLayout = "../views/layouts/login";

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
    console.log(req.body);
    res.redirect('/home');
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;