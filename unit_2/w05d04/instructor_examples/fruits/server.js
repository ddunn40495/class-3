const express = require('express');
const methodOverride = require('method-override');
const app = express();

const fruits = require('./models/fruits.js');

app.use( express.urlencoded( { extended:false } ) );
app.use( express.static('public') );
app.use( methodOverride('_method') );

app.get('/fruits/', (req, res) => {
    res.render(
        'index.ejs',
        {
            allFruits:fruits
        }
    );
});

app.delete('/fruits/:indexOfFruitsArray', (req, res) => {
    fruits.splice(req.params.indexOfFruitsArray, 1);
    res.redirect('/fruits');
});

app.get('/fruits/new', (req, res) => {
    res.render('new.ejs');
});

// app.post('/products', (req, res) => {
//     console.log('Create route accessed');
//     console.log('req.body is: ', req.body);
//     res.send(req.body);
// })

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

app.put('/fruits/:indexOfFruitsArray', (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    fruits[req.params.indexOfFruitsArray] = req.body;
    res.redirect('/fruits');
});

app.get('/fruits/:indexOfFruitsArray/edit', (req, res) => {
    res.render(
        'edit.ejs',
        {
            fruit:fruits[req.params.indexOfFruitsArray],
            index:req.params.indexOfFruitsArray
        }
    );
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
