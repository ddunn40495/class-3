// DEPENDENCIES
const express = require('express');
const app = express();
const methodOverride = require('method-override');
app.use(express.static('public'));
app.use(express.json());
app.use('/static', express.static('public'))
app.use('/jquery', express.static('node_modules/jquery/dist/'));
app.use(express.urlencoded({extended: true}));app.use(methodOverride('_method'));
// run `npm i` to install dependencies in package.json



// NOTES:
// ejs has not been installed - install it!
// views folder has not been created - create it!
// views/missions folder has not been created create it!

// PORT
const port = 3000;

// DATA - put into marsMissions.js file inside of a models folder, for module.exports
// remember to require it in the server
const mars = require('./models/marsMissions.js') 

// INDEX Route
// send data to 'missions/index.ejs' view
// the view should display just the names of each mission
app.get('/', (request, response) => {
  response.render('index.ejs',
      {
          allMissions: mars
      }
  );
});
// Stretch: the names should provide a link to the show page

// SHOW Route
// send data to 'missions/show.ejs' view
app.get('/:missionIndex', (request, response) => {
  response.render('show.ejs',
      {
          allMissions: mars
      }
  );
});
// the view should display all the data for a single mission
// the view should have a link back to the index
// Stretch: display the image inside an image tag



// LISTENER
app.listen(port, ()=> {
  console.log('Missions to Mars running on port: ', port);
})

 

