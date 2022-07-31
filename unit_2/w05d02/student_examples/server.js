// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
// const mongoose = require('mongoose');
// const methodOverride = require('method-override');
const app = express();
const port = 3000;
// app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));  
// app.use(methodOverride('_method'));

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
// =======================================
//              DATABASE
// =======================================

const fruits = require('./models/fruits.js'); //NOTE: it must start with ./ if it's just a file, not an NPM package

// =======================================
//      MONGOOSE CONNECTION LOGIC
// =======================================
//REPLACE 'basiccrud' WITH YOUR DATABASE
// mongoose.connect('mongodb://localhost:27017/basiccrud', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify : false });
// mongoose.connection.once('open', ()=> {
//     console.log('connected to mongo');
// });
// mongoose.connection.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
// mongoose.connection.on('disconnected', () => console.log('mongo disconnected'));
// ===================================
//              ROUTES
// =======================================
/* ===========
GET ROUTE
============= */
//New
app.get('/fruits/new', (req, res) => {
    res.render('new.ejs')
})
/* ===========
GET ROUTE
============= */
//index
app.get('/fruits/', (request, response) => {
    response.render(
        'index.ejs',
        {
            allFruits: fruits
        }
    );
});
/* ===========
POST ROUTE
============= */
//CREATE

app.post('/fruits', (req, res)=>{
    console.log(req.body);
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true; //do some data correction
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false; //do some data correction
    }
    fruits.push(req.body);
    console.log(fruits);
    
    res.redirect('/fruits')
});
/* ===========
GET ROUTE
============= */
//SHOW

app.get('/fruits/:indexOfFruitsArray', function(req, res){
    res.render('show.ejs', 
    {   
        allFruits: fruits

    });
});  



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



