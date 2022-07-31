// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
// const mongoose = require('mongoose');
// const methodOverride = require('method-override');
const app = express();
const port = 3000;
// app.use(express.static('public'));
// app.use(express.urlencoded({extended: true}));  
// app.use(methodOverride('_method'));


// =======================================
//              DATABASE
// =======================================
const drinks = require('./models/drinks.js')
const foods = require('./models/food.js');
const food = require('./models/food.js');


// =======================================
//      MONGOOSE CONNECTION LOGIC
// =======================================
//REPLACE 'basiccrud' WITH YOUR DATABASE
// mongoose.connect('mongodb://localhost:27017/basiccrud', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify : false });
// mongoose.connection.once('open', ()=> {
//   console.log('connected to mongo');
// });
// =======================================
//              ROUTES
// =======================================


/* ===========
GET ROUTE
============= */
//INDEX
app.get('/drinks', function(req, res){
    res.render('drinks_index.ejs', {
        allDrinks: drinks
    });
});       

/* ===========
GET ROUTE
============= */
//SHOW
app.get('/drinks/:index', function(req, res){
    res.render('drinks_index.ejs', {
        allDrinks: drinks[req.params.index]
    });
});   

/* ===========
GET ROUTE
============= */
//INDEX
app.get('/food', function(req, res){
    res.render('food_index.ejs', {
        allFood: food
    });
});       

/* ===========
GET ROUTE
============= */
//SHOW
app.get('/food/:index', function(req, res){
    res.render('food_show.ejs', {
        allFood: food[req.params.index]
    });
});   




// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
  console.log(`listening on port: ${port}`)
});