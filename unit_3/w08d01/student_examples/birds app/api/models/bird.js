const mongoose = require('mongoose')

const birdSchema = new mongoose.Schema({
    name: String,
    team: String,
    img: {
        type: String,
        default: 'https://via.placeholder.com/150'
    }
})

const Bird = mongoose.model('Bird', birdSchema)

module.exports = Bird