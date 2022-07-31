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
app.get('/yessir', (req, res) => {
    res.send('yessir')
})


/* ===========
GET ROUTE
============= */
//INDEX
app.get('/', (req, res) => {
    res.send('whats up')
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
