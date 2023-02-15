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

router.get("/profile/:id", isLoggedIn, (req, res) => {
    const { id } = req.params
    console.log(id)
    User.findById(id)
    .then(data => {
      res.render("user/profile", { userInSession: data } );
    })
    .catch(err => next(err))
  });

  router.get('/profile/:id/edit', (req,res,next) => {
    const { id } = req.params
  
    User.findById(id)
        .then(userToEdit => {
          res.render('user/editProfile', { user:userToEdit})
        })
  })

router.post('/profile/:id/edit', (req, res, next) =>{
  const { id } = req.params
  const { name, password, email, address, phone } = req.body

  User.findByIdAndUpdate (id, { name, password, email, address, phone } , { new: true})
      .then(User => {
      res.redirect(`/user/profile/${id}`)
      console.log(User)
      })
      .catch(err => next (err))
})

router.get("/spa", isLoggedIn, (req, res) => {
  res.render("user/spa");
});




router.get("/google", async (req,res) => {
  const {code} = req.query
  console.log({code})

  if (code) {
    const { tokens } = await googleApi.getToken(code);
    googleApi.setCredentials(tokens);
    console.log(tokens)
    res.redirect('/')
  } else {
    const url = googleApi.generateAuthUrl({
      access_type: "offline",
      scope: scope
    });
    res.redirect(url);
    console.log ("--", url) 
  }
});

router.post('')

  module.exports = router;