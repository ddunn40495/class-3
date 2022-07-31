const express = require('express')
const users = express.Router()
const bcrypt = require('bcrypt')
// add the model so we can access the db and use useful functions from mongoose
const User = require('../models/users.js')

// get the new user form - this requires no data
// /new is part of the url in the browser
users.get('/new', (req, res) => {
  // path to the file, by default it goes into the views folder
  res.render('users/new.ejs')
})

// create a new user in the database
users.post('/', (req, res) => {
  console.log(req.body)
  // overwrite the user password with an encryped one, first argument is what the user entered
  // second one is how encrypted, 10 is pretty standard
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  // I want the form data//what the user inputted
  console.log(req.body)
  // overwrite what the user puts in, and have it encrypted
  User.create(req.body, (err, createdUser) => {
    if (err) {
      console.log(err)
      res.send('oops, there was an error')
    } else {
      console.log('the user is created', createdUser)
      res.redirect('/')
    }
  })
})

users.get('/', (req, res) => {
  User.find({}, (err, foundUsers) => {
    res.render('users/index.ejs', {
      users: foundUsers
    })
  })
})

module.exports = users
