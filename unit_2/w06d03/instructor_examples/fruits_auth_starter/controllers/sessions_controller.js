const bcrypt = require('bcrypt')
const express = require('express')
const sessions = express.Router()
const User = require('../models/users.js')

// show us the new users form
sessions.get('/new', (req, res) => {
  res.render('sessions/new.ejs', {
    currentUser: req.session.currentUser
  })
})
// create a new session

// a few things that can happen

// username exist and password matches

// user name exists but password doesn't match

// user name doesn't exist

// upon success we CREATE a new session

sessions.post('/', (req, res) => {
  // look for the user
  User.findOne({ username: req.body.username }, (err, foundUser) => {
    // database has an error
    if (err) {
      console.log(err)
      res.send('oops the db had a problem')
    } else if (!foundUser) {
      // this is what happens if MongoDB does not find the user
      res.send('<a href="/">Sorry! No user Found</a>')
    } else {
      // user found! Yay!
      // Does the password for this user match?
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        req.session.currentUser = foundUser
        res.redirect('/')
      } else {
        res.send('<a href="/">password does not match</a>')
      }
    }
  })
})

sessions.delete('/', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/')
  })
})

module.exports = sessions
