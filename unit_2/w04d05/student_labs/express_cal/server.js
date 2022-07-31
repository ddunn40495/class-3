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
app.get('/cal/:num1/:num2', (req, res) => {
    let num3 = Number(req.params.num1) + Number(req.params.num2)
    console.log(num3)
    console.log(req.params)
    console.log(Number(req.params.num1))
    res.send(`The sum is ${num3}`)
})

app.get('/calq/:num1/:num2', (req, res) => {

  let num3 = 0
  
  if (req.query.operation === 'add') {
    num3 = Number(req.params.num1) + Number(req.params.num2)
    res.send(`The sum is ${num3}`)
  } else if (req.query.operation === 'sub') {
    num3 = Number(req.params.num1) - Number(req.params.num2)
    res.send(`The sum is ${num3}`)
  } else if (req.query.operation === 'mul') {
    num3 = Number(req.params.num1) * Number(req.params.num2)
    res.send(`The sum is ${num3}`)
  } else if (req.query.operation === 'div') {
    num3 = Number(req.params.num1) / Number(req.params.num2)
    res.send(`The sum is ${num3}`)
    
  } else {
    res.send('error')
  }
  console.log(req.params)
  console.log(req.query)
  console.log(num3)
  
  
})

/* ===========
GET ROUTE
============= */
//NEW



/* ===========
POST ROUTE
============= */
//CREATE




/* ===========
GET ROUTE
============= */
//SHOW



/* ===========
GET ROUTE
============= */
//INDEX


/* ===========
PUT ROUTE
============= */
//UPDATE


/* ===========
GET ROUTE
============= */
//EDIT


/* ===========
DELETE ROUTE
============= */
//DELETE



// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
  console.log(`listening on port: ${port}`)
});