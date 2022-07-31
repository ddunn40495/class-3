// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const session = require('express-session')


require('dotenv').config();
const app = express();
const port = process.env.PORT;
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));  
app.use(methodOverride('_method'));
app.use(
  session({
    secret: process.env.SECRET, //a random string do not copy this value or your stuff will get hacked
    resave: false, // default more info: https://www.npmjs.com/package/express-session#resave
    saveUninitialized: false // default  more info: https://www.npmjs.com/package/express-session#resave
  })
)



// =======================================
//              DATABASE
// =======================================

const mongoURI = process.env.MONGODBURI;
const db = mongoose.connection;


// =======================================
//      MONGOOSE CONNECTION LOGIC
// =======================================
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify : false, useCreateIndex: true, }, () => {
	console.log('the connection with mongod is established')
})
db.once('open', ()=> {
  console.log('mongo connected: ', mongoURI);
});
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('disconnected', () => console.log('mongo disconnected'));

// =======================================
//              CONTROLLERS
// =======================================
const logsController = require('./controllers/logs_controllers.js')
app.use('/logs', logsController)
const userController = require('./controllers/users_controllers.js')
app.use('/users', userController)
const sessionsController = require('./controllers/sessions_controllers.js')
app.use('/sessions', sessionsController)
// =======================================
//              ROUTES
// =======================================
app.get('/', (req, res) => {
  res.redirect('/logs')
})


// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
  console.log(`listening on port: ${port}`)
});