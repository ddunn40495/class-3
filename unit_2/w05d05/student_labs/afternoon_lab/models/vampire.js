const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vampireSchema = new Schema({
  name: String,
  title: String,
  hair_color: String,
  eye_color: String,
  dob: Date,
  loves: [String],
  location: {
          city: String,
          state: String,
          country: String
  } ,
  gender: ['m', 'f', 'other', 'no-disclosure'],
  victims: Number
}, {timestamps: true});

const Vampire = mongoose.model('Vampire', vampireSchema);

//make this exportable to be accessed in `app.js`
module.exports = Vampire;
