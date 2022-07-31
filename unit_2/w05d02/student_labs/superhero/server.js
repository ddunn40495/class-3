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
const superhero =  [ { name: "Superman", powers: ['flight', 'invulnerability', 'x-ray vision']}, { name: "Wonder-Woman", powers: ['flight', 'invulnerability', 'x-ray vision']}, { name: "Black-Panther", powers: ['flight', 'invulnerability', 'x-ray vision']}]
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
//index
app.get('/superhero/', (req, res) => {
    
    res.send(superhero);
});
/* ===========
POST ROUTE
============= */
//CREATE
/* ===========
GET ROUTE
============= */
//SHOW
app.get('/superhero/:index', (req, res) => {
    let superNum = req.params.index
    let howManyPowers = superhero[superNum].powers.length 
   
const renderPowers = (numOfPowers) => {
    let powers = ''
    for (let i = 0; i < numOfPowers; i++) {
          powers += `<li>${superhero[superNum].powers[i]}</li>`      
    }
    return powers
}

    res.send(`<h1>${superhero[superNum].name}</h1>
    <ul>
        ${renderPowers(howManyPowers)}
    </ul>
    `);
});



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




