const express = require("express");
const router = express.Router();

// Require the User model in order to interact with the database
const User = require("../models/User.model");

// Require necessary (isLoggedOut and isLiggedIn) middleware in order to control access to specific routes
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");


router.get("/profile", isLoggedOut, (req, res) => {
    res.render("user/profile");
  });


router.get("/spa", isLoggedOut, (req, res) => {
  res.render("user/spa");
});

  module.exports = router;