// Dependencies
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const session = require('express-session')
// Configuration
require('dotenv').config()
const app = express()
const db = mongoose.connection // less typing
const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI

// Middleware MUST be before our routes so that our routes have this functionality
app.use(express.urlencoded({ extended: false }))
// use the express-session middleware
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
  })
)
// Database
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})

// Optional, but likely helpful
// Connection Error/Success
// Define callback functions for various events
db.on('error', err => console.log(err.message + ' is mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))

// Routes
app.get('/', (req, res) => {
  res.render('welcome.ejs')
})

const usersController = require('./controllers/users_controller.js')
app.use('/users', usersController)

const sessionsController = require('./controllers/sessions_controller.js')
app.use('/sessions', sessionsController)
// Listen - doesn't matter as much where this goes
//
app.listen(PORT, () => {
  console.log('listening on port:', PORT)
})
