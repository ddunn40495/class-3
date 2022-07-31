// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));
const methodOverride = require('method-override');

// =======================================
//              DATABASE
// =======================================
const pokemon = require('./models/pokemon.js');
app.use(methodOverride('_method'));

// =======================================
//              ROUTES
// =======================================
// index route
app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {
      pokemon: pokemon
    });
  });
  
  // new route
  app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs');
  })
  
  // show route
  app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {
      pokemon: pokemon[req.params.id],
      id: req.params.id
    });
  });
  
  //create
  app.post('/pokemon', (req, res) => {
    pokemon.push(req.body);
    res.redirect('/pokemon');
  });
  
//update
app.put('/pokemon/:id', (req, res) => { 
	pokemon[req.params.id] = req.body 
	res.redirect('/pokemon'); 
})



//Edit
app.get('/pokemon/:id/edit', (req, res)=>{
	res.render('edit.ejs', { 
			pokemon: pokemon[req.params.id],
			id: req.params.id
		})
})

//delete
app.delete('/pokemon/:id', (req, res) => {
	pokemon.splice(req.params.id, 1); 
	res.redirect('/pokemon');  
});

  // =======================================
  //              LISTENER
  // =======================================
  app.listen(port, () => {
    console.log(`listening on port: ${port}`)
  });
  