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

app.get('/', (req, res) => {
  res.send(`
  <html>
      <body>
          <h1>99 Bottles of beer on the wall</h1>
          <a href="/98">take one down, pass it around</a>

      </body>
  </html>
`);
})

app.get('/:number_of_bottles', (req, res) => {
  if (req.params.number_of_bottles < 0) {
      res.send('oops')
  } else {
      res.send(`
  <html>
      <body>
          <h1>${req.params.number_of_bottles} Bottles of beer on the wall</h1>
          <a href="/${req.params.number_of_bottles - 1}">take one down, pass it around</a>

      </body>
  </html>
`);
  }
  
})

app.get('/greeting', (req, res )=>{
    res.send('Hello Pal');
  });

  app.get('/greeting/:name', ( req, res )=>{
    res.send('Hello ' + req.params.name);
    console.log(req.params)
  });

  

  app.get('/tip/:total/:tipPercentage', ( req, res )=> {
    console.log(req.params)
    let tip = Number(req.params.total) * Number(req.params.tipPercentage)
    // res.send(tip);
    res.send(`${tip}`)
    // res.send('hello' + tip)
    // res.send(tip)
  });



let newArray = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]



app.get('/magic/:question', (req, res) => {

  let ranNum = Math.floor(Math.random() * newArray.length)
  console.log(req.params)
  res.send(`
  
  <h1>${req.params.question}</h1>
  
    <p>${newArray[ranNum]}</p>
  
  `)

})











// const sayings = newArray[Math.floor(Math.random() * newArray.length)];

  // app.get('/magic/:question', ( req, res )=>{
  //   let decodeQuestion = decodeURI(req.params.question)
  // res.send(decodeQuestion + ' ' + sayings);
  // });



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