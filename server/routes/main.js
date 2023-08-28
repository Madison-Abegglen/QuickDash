const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
const loginLayout = "../views/layouts/login";

// Get Welcome Page
router.get("", async (req, res) => {
  try {
    const locals = {
      title: "QuickDash",
      description:
        "A versatile dashboard application to provide users with essential information and task management in one place.",
    };
    res.render("welcome", { locals, layout: loginLayout });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;