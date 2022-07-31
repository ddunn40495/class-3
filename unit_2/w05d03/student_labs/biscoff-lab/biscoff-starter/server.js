// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const app = express();
const port = 3000;
app.use(express.urlencoded({extended:false}));

// =======================================
//              DATABASE
// =======================================
const bakedGoods = require('./models/bakedgoods.js');




app.use((req, res, next) => {
  console.log('I run for all routes');
  next();
});
// =======================================
//              ROUTES
// =======================================

// new 
app.get('/bakedgoods/new', (req, res) => {
  res.render('new.ejs')
})
// index route
app.get('/bakedgoods', (req, res) => {
  res.render('index.ejs', {
      snacks: bakedGoods
  });
});

// show route
app.get('/bakedgoods/:id', (req, res) => {
  res.render('show.ejs', {
      snacks: bakedGoods[req.params.id]
  });
});

//post
app.post('/bakedgoods', (req,res) => {
  bakedGoods.push(req.body)
  res.redirect('/bakedgoods')
})

// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
  console.log(`Biscoff Bakery app listening on port: ${port}`)
});
