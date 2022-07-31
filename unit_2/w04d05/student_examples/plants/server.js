// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
// const mongoose = require('mongoose');
// const methodOverride = require('method-override');
const app = express();
const port = 3003;
// app.use(express.static('public'));
// app.use(express.urlencoded({extended: true}));  
// app.use(methodOverride('_method'));


// =======================================
//              DATABASE
// =======================================
const plants = [
    'Monstera Deliciosa',
    'Corpse Flower',
    'Elephant-Foot Yam',
    "Witches' Butter"
  ]
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
app.get('/hello/:firstname/:lastname', (req, res) => {
    console.log('=========================================')
console.log(
  'This is the entire Request Object sent from the browser to the server: '
)
console.log(req)
console.log('========================================')
    res.send(`Hello ${req.params.firstname} ${req.params.lastname}`)
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
