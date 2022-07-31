const express = require('express');
const Fruit = require('../models/fruits.js');
const router = express.Router();

router.delete('/:id', (req, res) => {
    Fruit.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/fruits');
    })
});

router.get('/:id/edit', (req, res) => {
    Fruit.findById(req.params.id, (error, foundFruit) => {
        res.render(
            'edit.ejs',
            {
                fruit:foundFruit
            }
        );
    })
});

router.put('/:id', (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    Fruit.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true},
        (err, updatedModel) => {
            res.redirect('/fruits');
        }
    )
})

router.get('/seed', (req, res) => {
    Fruit.create(
        [
            {
               name:'grapefruit',
               color:'pink',
               readyToEat:true
            },
            {
                name:'grape',
                color:'purple',
                readyToEat:false
            },
            {
                name:'avocado',
                color:'green',
                readyToEat:true
            }
        ],
        (err, data) => {
            res.redirect('/fruits');
        }
    )
});

router.get('/new', (req, res) => {
    res.render('new.ejs');
});

router.get('/:id', (req, res) => {
    Fruit.findById(req.params.id, (error, foundFruit) => {
        res.render(
            'show.ejs',
            {
                fruit:foundFruit
            }
        );
    })
});

router.get('/', (req, res) => {
    Fruit.find({}, (error, allFruits) => {
        res.render(
            'index.ejs',
            {
                fruits: allFruits
            }
        );
    })
});

router.post('/', (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    Fruit.create(req.body, (error, createdFruit) => {
        res.redirect('/fruits')
    })
})

// $('div').on('click', () => {
//     console.log('bar');
// })
// console.log('foo');

module.exports = router;
