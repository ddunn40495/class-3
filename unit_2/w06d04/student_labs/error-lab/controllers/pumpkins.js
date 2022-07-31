const express = require('express')
const Pumpkin = require('../models/pumpkin.js')
const pumpkins = express.Router()

pumpkins.delete('/:id', (req, res) => {
  Pumpkin.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/pumpkins')
  })
})

pumpkins.get('/:id/edit', (req, res) => {
  Pumpkin.findById(req.params.id, (error, foundPumpkin) => {
    res.render('edit.ejs', {
      pumpkin: foundPumpkin
    })
  })
})

pumpkins.put('/:id', (req, res) => {
  if (req.body.readyToShip === 'on') {
    req.body.readyToShip = true
  } else {
    req.body.readyToShip = false
  }
  Pumpkin.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedModel) => {
      res.redirect('/pumpkins')
    }
  )
})

pumpkins.get('/seed', (req, res) => {
  Pumpkin.create(
    [
      {
        description: 'Freddy in a business suit',
        color: 'pink',
        readyToShip: true
      },
      {
        description: 'Michael Myers in a speedo',
        color: 'blue',
        readyToShip: false
      },
      {
        description: 'Bagul in a pool',
        color: 'white',
        readyToShip: true
      }
    ],
    (err, data) => {
      res.redirect('/pumpkins')
    }
  )
})

pumpkins.get('/new', (req, res) => {
  res.render('new.ejs')
})

pumpkins.get('/:id', (req, res) => {
  Pumpkin.findById(req.params.id, (error, foundPumpkin) => {
    res.render('show.ejs', {
      pumpkin: foundPumpkin
    })
  })
})

pumpkins.get('/', (req, res) => {
  Pumpkin.find({}, (error, allPumpkins) => {
    res.render('index.ejs', {
      pumpkins: allPumpkins
    })
  })
})

pumpkins.post('/', (req, res) => {
  if (req.body.readyToShip === 'on') {
    req.body.readyToShip = true
  } else {
    req.body.readyToShip = false
  }
  Pumpkin.create(req.body, (error, createdPumpkin) => {
    res.redirect('/fruits')
  })
})
module.exports = pumpkins
