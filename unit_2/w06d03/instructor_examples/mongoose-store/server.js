// ___________________
// Dependencies
// ___________________
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const app = express()
const db = mongoose.connection

const PORT = 3000

// ___________________
// Database
// ___________________
const mongoURI =
  process.env.MONGODBURI || 'mongodb://localhost:27017/mongoosestore'

// Connect to Mongo
mongoose.connect(
  mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => console.log('MongoDB connection established:', mongoURI)
)

// Error / Disconnection
db.on('error', err => console.log(err.message + ' is Mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))

// ___________________
// Controllers
// ___________________
// Step 1/3 require the controller to be able to use the products routes
const productsController = require('./controllers/products')

// ___________________
// Middleware
// ___________________

// use public folder for static assets
app.use(express.static('public'))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(methodOverride('_method'))

app.use('/products', productsController)
// use method override
// ___________________
// Routes
// ___________________
// localhost:3000  - this will reroute to `products`
app.get('/', (req, res) => {
  res.redirect('/products')
})

// ___________________
// Listener
// ___________________
app.listen(PORT, () =>
  console.log('Hurry! Last chance to buy amazing items on port', PORT)
)
