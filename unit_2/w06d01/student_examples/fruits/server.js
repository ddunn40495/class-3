// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const port = 3000;
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));  
app.use(methodOverride('_method'));


// =======================================
//              DATABASE
// =======================================
const Fruit = require('./models/fruits.js');
const dataBaseVar = 'your_data_base_as_a_string'
const mongoURI = 'mongodb://localhost:27017/'+ dataBaseVar;
const db = mongoose.connection;



// =======================================
//      MONGOOSE CONNECTION LOGIC
// =======================================
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify : false }, () => {
	console.log('the connection with mongod is established')
})
db.once('open', ()=> {
  console.log('mongo connected: ', mongoURI);
});
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('disconnected', () => console.log('mongo disconnected'));
// =======================================
//              ROUTES
// =======================================


/* ===========
GET ROUTE
============= */
//NEW
app.get('/fruits/new', (req, res)=>{
    res.render('new.ejs');
});


/* ===========
POST ROUTE
============= */
//CREATE
app.post('/fruits/', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }
    Fruit.create(req.body, (error, createdFruit)=>{
        res.redirect('/fruits');
    });
});



/* ===========
GET ROUTE
============= */
//SHOW
app.get('/fruits/:id', (req, res)=>{
    Fruit.findById(req.params.id, (err, foundFruit)=>{
        res.render('show.ejs', {
            fruit:foundFruit
        });
    });
});



/* ===========
GET ROUTE
============= */
//INDEX
app.get('/fruits', (req, res)=>{
    Fruit.find({}, (error, allFruits)=>{
        res.render('index.ejs', {
            fruits: allFruits
        });
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