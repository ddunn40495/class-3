
const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const hotelSchema = new Schema ({
    name: { type: String, required: true, unique: true },
    location: { type: String },
    rating: { type: Number, max: 5 },
    vacancies: { type: Boolean },
    tags: [ String ],
    rooms: [ { roomNumber: Number, size: String, price: Number, booked: Boolean  } ]
}, { timestamps: true });



const Hotels = mongoose.model('Hotels', hotelSchema);

module.exports = Hotels;