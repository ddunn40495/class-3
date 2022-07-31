// Dependencies
// the user will enter regular password, we need to check if it matches the encrypted password
const bcrypt = require('bcrypt')
// for routes
const express = require('express')
const sessions = express.Router() // bring in router functionality
// get the user, get the password and compare passwords in order to be able to log in
const User = require('../models/users.js')
// Routes

// Make a new session
// need a form - log in form
sessions.get('/new', (req, res) => {
  res.render('sessions/new.ejs')
})
// Create a new session
// post request - actual log in process
sessions.post('/', (req, res) => {
  User.findOne({ username: req.body.username }, (err, foundUser) => {
    // database has an error
    if (err) {
      console.log(err)
      res.send('oops db had an error')
    } else if (!foundUser) {
      res.send('<a href="/"> Sorry! No user found!</a> ')
    } else {
      // user is found! Now we have to check if password matchs
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        // set the session
        req.session.currentUser = foundUser
        res.redirect('/')
      } else {
        res.send('<a href="/"> Sorry! Wrong password!</a> ')
      }
    }
    // username not found
    // username found, but passord does not match
    // username found and password doesn't match
  })
})
// Delete a session

sessions.delete('/', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/')
  })
})
// delete route - log out process
// have access to this file and its functionality
module.exports = sessions
