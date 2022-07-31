const express = require('express')
const app = express()

const PORT = 3000

app.use(express.urlencoded({ extended: false }))

app.use(express.static('public'))

const budget = require('./models/budget.js')

//////////////////////////////////////////////////////

app.use((req, res, next) => {
  res.locals.sum = 0
  for (let item of budget) {
    res.locals.sum += Number(item.amount)
  }
  next()
})

//====== Routes ======//

//Get Route to budgets
app.get('/budgets', (req, res) => {
  // let sum = 0
  // for (let item of budget) {
  //   sum += Number(item.amount)
  // }
  res.render('index.ejs', {
    items: budget,
    money: res.locals.sum
  })
})

//Post Route to budgets
app.post('/budgets', (req, res) => {
  budget.push(req.body)
  res.redirect('/budgets')
})

//Get Route to budgets/new
app.get('/budgets/new', (req, res) => {
  res.render('new.ejs')
})

//Get route for budget show page
app.get('/budgets/:index', (req, res) => {
  res.render('show.ejs', {
    // pass an individual item by grabbing the "index" of the items
    item: budget[req.params.index],
    money: res.locals.sum
  })
})

//App Listen
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
