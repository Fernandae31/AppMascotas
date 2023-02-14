const express = require('express');
const router = express.Router();
const User = require("../models/User.model")

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index", {userInSession: req.session.currentUser});
});


router.get("/profile/:id", (req, res, next) => {

  const { id } = req.params
  User.findById(id)
    .then(datos => {
      res.render("profile", { userInSession: req.session.currentUser, datos })
    })
    .catch(err => next(err))
})


router.post('/profile/:id', (req, res, next) => {
  const { id } = req.params

  User.findByIdAndUpdate(id, { new: true })
    .then((newData) => {
      req.session.currentUser = newData
      // Remove the password field
      delete req.session.currentUser.password;
      res.redirect(`/profile/${id}`)
    })
    .catch(err => next(err))

})

module.exports = router;
