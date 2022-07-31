// ==================== SETUP ====================
// packages
const express = require('express'),
  methodOverride = require('method-override'),
  app = express()

// database
const pokemon = require('./models/pokemon.js')

// middleware
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

// ==================== GET ROUTES ====================
// data
app.get('/pokedata', (req, res) => {
  res.send(pokemon)
})

//index
app.get('/', (req, res) => {
  res.render('index.ejs')
})

//pokedex
app.get('/pokemon', (req, res) => {
  res.render('pokedex.ejs', {
    data: pokemon
  })
})

//new
app.get('/pokemon/new', (req, res) => {
  res.render('new.ejs')
})

//Show
app.get('/pokemon/:index', (req, res) => {
  res.render('show.ejs', {
    data: pokemon[req.params.index],
    index: req.params.index
  })
})

//Edit
app.get('pokemon/:index/edit', (req, res) => {
  res.render('edit.ejs', {
    data: pokemon[req.params.index],
    index: req.params.index
  })
})

// ==================== ACTION ROUTES ====================

// post route
app.post('/pokemon', (req, res) => {
  console.log(req.body)
  // creates newPokemon object to match the data structure of the model (reshape the data that comes back from req.body/our form)
  let newPokemon = {
    name: req.body.name,
    img: req.body.img,
    type: req.body.type,
    stats: {
      hp: req.body.hp,
      attack: req.body.attack,
      defense: req.body.defense,
      spattack: req.body.spattack,
      spdefense: req.body.spdefense,
      speed: req.body.speed
    }
  }
  console.log(newPokemon)
  // pushes the newPokemon object into the databse
  pokemon.push(newPokemon)
  // redirects to the pokedex
  res.redirect('/pokemon')
})

// put route
app.put('/pokemon/:index', (req, res) => {
  console.log(req.body)
  // creates editPokemon object to match the data structure of the model
  let editPokemon = {
    name: req.body.name,
    img: req.body.img,
    type: req.body.type,
    stats: {
      hp: req.body.hp,
      attack: req.body.attack,
      defense: req.body.defense,
      spattack: req.body.spattack,
      spdefense: req.body.spdefense,
      speed: req.body.speed
    }
  }
  console.log(editPokemon)
  // finds the pokemon we're editing by the index number, then sets it equal to the editPokemon object
  pokemon[req.params.index] = editPokemon
  res.redirect('/pokemon/' + req.params.index)
})

// delete route
app.delete('/pokemon/:index', (req, res) => {
  // splices the pokemon from the 'database' based on its array index
  pokemon.splice(req.params.index, 1)
  // redirects to pokedex
  res.redirect('/pokemon')
})

app.listen(3000, () => {
  console.log(`listening on port 3000`)
})
