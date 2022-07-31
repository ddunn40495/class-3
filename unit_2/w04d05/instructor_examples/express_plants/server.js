// Dependencies
const express = require('express')
// Configuration
const app = express()
const PORT = 3003

const plants = [
  'Monstera Deliciosa',
  'Corpse Flower',
  'Elephant-Foot Yam',
  "Witches' Butter"
]

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to Botany Express')
})

app.get('/plants', (req, res) => {
  res.send(plants)
})

app.get('/plants/awesome', (req, res) => {
  //this will never be reached
  res.send(`
    <h1>Plants are awesome!</h1>
    <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
  `)
})

app.get('/plants/:indexOfPlantsArray', (req, res) => {
  console.log(req.params.indexOfPlantsArray)
  res.send(plants[req.params.indexOfPlantsArray])
})

app.get('/plants/oops/:indexOfPlantsArray', (req, res) => {
  res.send(plants[req.params.indexOfPlantsArray])
  // not allowed to send two responses
  res.send('this is the index: ' + req.params.indexOfPlantsArray)
})

app.get('/plants/fixed/:indexOfPlantsArray', (req, res) => {
  if (plants[req.params.indexOfPlantsArray]) {
    res.send(plants[req.params.indexOfPlantsArray])
  } else {
    res
      .status(404)
      .send(
        'cannot find anything at this index: ' + req.params.indexOfPlantsArray
      )
  }
})

// multiple parameters
app.get('/hello/:firstname/:lastname', (req, res) => {
  console.log(req.params)
  res.send('hello ' + req.params.firstname + ' ' + req.params.lastname)
})

app.get('/howdy/:firstname', (req, res) => {
  console.log(req.params)
  console.log(req.query)
  res.send('howdy ' + req.query.title + ' ' + req.params.firstname)
})

// Listener
app.listen(PORT, () => {
  console.log('listening on port', PORT)
})
