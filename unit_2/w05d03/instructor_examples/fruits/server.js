const express = require('express');
const app = express();

const fruits = require('./models/fruits.js');

app.use( express.urlencoded( { extended:false } ) );
app.use( express.static('public'))

app.get('/fruits/', (req, res) => {
    res.render(
        'index.ejs',
        {
            allFruits:fruits
        }
    );
});

app.get('/fruits/new', (req, res) => {
    res.render('new.ejs');
});

app.post('/products', (req, res) => {
    console.log('Create route accessed');
    console.log('req.body is: ', req.body);
    res.send(req.body);
})

app.post('/fruits', (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    // console.log(req.body);
    fruits.push(req.body);
    res.redirect('/fruits');
});

app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.render(
        'show.ejs',
        {
            fruit: fruits[req.params.indexOfFruitsArray]
        }
    )
});

app.listen(3000, () => {
    console.log('listening...');
});
