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

// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
  console.log(`listening on port: ${port}`)
});