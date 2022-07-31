// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express')
const Logs = require('../models/logs.js')
const logs = express.Router()
const isAuthenticated = (req, res, next) => {
    if (req.session.currentUser) {
      return next()
    } else {
      res.redirect('/sessions/new')
    }
  }







// =======================================
//              ROUTES
// =======================================

/* ===========
GET ROUTE
============= */
//NEW
logs.get('/new', isAuthenticated, (req, res) => {
    res.render('logs/new.ejs', {
        currentUser: req.session.currentUser
    })
})


/* ===========
POST ROUTE
============= */
//CREATE
logs.post('/', (req, res)=>{
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
      } else {
        req.body.shipIsBroken = false
      }
    Logs.create(req.body, (error, createdLog)=>{
        console.log(createdLog)
        res.redirect('/logs');
    });
});



/* ===========
GET ROUTE
============= */
//SHOW
logs.get('/:id', (req, res) => {
    Logs.findById(req.params.id, (error, foundLog) => {
      res.render('logs/show.ejs', {
        log: foundLog,
        currentUser: req.session.currentUser
      })
    })
  })


/* ===========
GET ROUTE
============= */
//INDEX
logs.get('/', (req, res)=>{
    Logs.find({}, (error, allLogs)=>{
        res.render('logs/index.ejs', {
            logs: allLogs,
            currentUser: req.session.currentUser
        });
    });
});
/* ===========
PUT ROUTE
============= */
//UPDATE
logs.put('/:id', isAuthenticated, (req, res)=>{
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
      } else {
        req.body.shipIsBroken = false
      }
    Logs.findByIdAndUpdate(req.params.id, req.body, { new: true },  (err, updatedModel)=>{
        res.redirect('/logs/' + req.params.id);
    });
});

/* ===========
GET ROUTE
============= */
//EDIT
logs.get('/:id/edit', (req, res)=>{
    Logs.findById(req.params.id, (err, foundLog)=>{ 
        res.render(
    		'logs/edit.ejs',
    		{
                log: foundLog,
                currentUser: req.session.currentUser
    		}
    	);
    });
});


/* ===========
DELETE ROUTE
============= */
//DELETE
logs.delete('/:id', isAuthenticated, (req, res)=>{
    Logs.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/logs');
    });
});



module.exports = logs