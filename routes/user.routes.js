const express = require("express");
const router = express.Router();
const axios = require('axios');


// API Google
const { google } = require("googleapis")

const { OAuth2 } = google.auth

const googleApi = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URL,
    process.env.API_KEY,
);


const scope = ['https://www.googleapis.com/auth/calendar']

// Require the User model in order to interact with the database
const User = require("../models/User.model");

// Require necessary (isLoggedOut and isLiggedIn) middleware in order to control access to specific routes
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");
const { compare } = require("bcrypt");


router.get("/profile", isLoggedOut, (req, res) => {
    res.render("user/profile");
  });

router.get("/spa", isLoggedOut, (req, res) => {
  res.render("user/appointment");
});


router.get("/google", async (req,res) => {
  const {code} = req.query
  console.log({code})

  if (code) {
    const { tokens } = await googleApi.getToken(code);
    googleApi.setCredentials(tokens);
    console.log(tokens)
    res.redirect('/user/profile')
  } else {
    const url = googleApi.generateAuthUrl({
      access_type: "offline",
      scope: scope
    });
    res.redirect(url);
    console.log ("--", url) 
  }
});

  module.exports = router;