const express = require("express");
const router = express.Router();
const loginLayout = "../views/layouts/login";

// Get Login Page
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

module.exports = router;
