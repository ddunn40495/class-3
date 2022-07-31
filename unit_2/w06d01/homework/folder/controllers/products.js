const express = require('express')
const router = express.Router()
const Product = require('../models/products')


/* ===========
GET ROUTE
============= */
//NEW
router.get('/new', (req, res)=>{
    res.render('new.ejs');
});



/* ===========
POST ROUTE
============= */
//CREATE
router.post('/', (req, res)=>{
    Product.create(req.body, (error, createdProduct)=>{
        res.redirect('/store');
    });
});




/* ===========
GET ROUTE
============= */
//SHOW
router.get('/:id', (req, res)=>{
    Product.findById(req.params.id, (err, foundProduct)=>{
        res.render('show.ejs', {
            product:foundProduct
        });
    });
});


/* ===========
GET ROUTE
============= */
//INDEX
router.get('/', (req, res)=>{
    Product.find({}, (error, allProducts)=>{
        res.render('index.ejs', {
            product: allProducts
        });
    });
});

/* ===========
PUT ROUTE
============= */
//UPDATE
router.put('/:id', (req, res)=>{
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true },  (err, updatedModel)=>{
        res.redirect('/store/' + req.params.id);
    });
});

/* ===========
PUT ROUTE
============= */
//BUY
router.patch('/:id', (req, res)=>{
    Product.findByIdAndUpdate(req.params.id, {$inc: { qty: -1 }}, { new: true }, (err, updatedModel)=>{
      console.log(updatedModel)
        res.redirect('/store');
    });
});



/* ===========
GET ROUTE
============= */
//EDIT
router.get('/:id/edit', (req, res)=>{
    Product.findById(req.params.id, (err, foundProduct)=>{ 
        res.render(
    		'edit.ejs',
    		{
    			product: foundProduct 
    		}
    	);
    });
});

/* ===========
DELETE ROUTE
============= */
//DELETE
router.delete('/:id', (req, res)=>{
    Product.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/store');
    });
});



  /* ===========
GET ROUTE
============= */
//SEED
router.get('/seed/stuff', (req, res) => {

    const seedStuff = [
        {
          name: 'Beans',
          description: 'A small pile of beans. Buy more beans for a big pile of beans.',
          img: 'https://cdn3.bigcommerce.com/s-a6pgxdjc7w/products/1075/images/967/416130__50605.1467418920.1280.1280.jpg?c=2',
          price: 5,
          qty: 99
        }, {
          name: 'Bones',
          description: 'It\'s just a bag of bones.',
          img: 'http://bluelips.com/prod_images_large/bones1.jpg',
          price: 25,
          qty: 0
        }, {
          name: 'Bins',
          description: 'A stack of colorful bins for your beans and bones.',
          img: 'http://www.clipartbest.com/cliparts/9cz/rMM/9czrMMBcE.jpeg',
          price: 7000,
          qty: 1
        }
      ]
      
    Product.create(seedStuff, (err, seeds) => {
        res.redirect('/store')
        
    })
})

Product.find((err, seeds) => {
    console.log(seeds)
})


module.exports = router