//============ Dependencies ===============//
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const pumpkinsController = require('./controllers/pumpkins')

//========== CONFIG =========//
const app = express()

mongoose.connect('mongodb://localhost:27017/pumpkins', () => {
  console.log('connected to mongoose')
})
app.use('/pumpkins', pumpkinsController)
app.use(express.json());
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}));  
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
  res.redirect('/pumpkins')
})

app.listen(3000, () => {
  console.log("1,2 Freddy's coming for you...now that he's unemployed...")
})
