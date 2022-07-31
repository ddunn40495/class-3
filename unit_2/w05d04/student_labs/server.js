// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
// const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));  
app.use(methodOverride('_method'));

// =======================================
//              DATABASE
// =======================================
const doc = require('./models/doc.js') 

// =======================================
//      MONGOOSE CONNECTION LOGIC
// =======================================
//REPLACE 'basiccrud' WITH YOUR DATABASE
// mongoose.connect('mongodb://localhost:27017/basiccrud', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify : false });
// mongoose.connection.once('open', ()=> {
//   console.log('connected to mongo');
// });


app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

// =======================================
//              ROUTES
// =======================================


/* ===========
GET ROUTE
============= */
//NEW
app.get('/smarty/new', (req, res) => {
    res.render('new.ejs')
})


/* ===========
POST ROUTE
============= */
//CREATE
app.post('/smarty', (req, res) => {
    doc.push(req.body)
    res.redirect('/smarty')
})



/* ===========
GET ROUTE
============= */
//SHOW
app.get('/smarty/:smartyIdNum', (req, res) => {
    res.render('show.ejs', {
        doc: doc[req.params.smartyIdNum],
        index: req.params.smartyIdNum
    })
})


/* ===========
GET ROUTE
============= */
//INDEX
app.get('/smarty', (req, res) => {
    res.render('index.ejs', {
        doc: doc
    })
})

/* ===========
PUT ROUTE
============= */
//UPDATE
app.put('/smarty/:smartyIdNum', (req, res) => { 

	doc[req.params.smartyIdNum] = req.body 
	res.redirect('/smarty')
})

/* ===========
GET ROUTE
============= */
//EDIT
app.get('/smarty/:smartyIdNum/edit', (req, res)=>{
	res.render(
		'edit.ejs', 
		{ 
			doc: doc[req.params.smartyIdNum], 
			index: req.params.smartyIdNum 
		}
	)
})

/* ===========
DELETE ROUTE
============= */
//DELETE
app.delete('/smarty/:smartyIdNum', (req, res) => {
	doc.splice(req.params.smartyIdNum, 1)
	res.redirect('/smarty')
});

// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
  console.log(`listening on port: ${port}`)
});