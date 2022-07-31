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
app.get('/frasier', (req, res) => {
    res.send(" 'Once in prep school, the Existentialist Club once named me 'Most Likely to Be' ")
  })
  app.get('/niles', (req, res) => {
    res.send('You know, sometimes I wonder if Im not just in psychiatry for the money')
  })
  app.get('/daphne', (req, res) => {
    res.send('Hello world')
  })
  app.get('/roz', (req, res) => {
    res.send('Hello world')
  })

  
//   app.get('/Scrappy', (req, res) => {
//       res.send('Yep')
//   })

  app.get('/scrappy', (req, res) => {
    res.send('yep')
})
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
