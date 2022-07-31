const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

const fruitsController = require('./controllers/fruits.js');
app.use('/fruits', fruitsController);

app.listen(3000, () => {
    console.log('listening...');
})
mongoose.connect(
    'mongodb://localhost:27017/basiccrud',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    },
    () => {
        console.log('connected to mongod');
    }
)
