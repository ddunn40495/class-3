
// *******************************************//
// Everything provided to students in markdown start
// *******************************************//

// Dependencies
const mongoose = require('mongoose')
const db = mongoose.connection

// Config
const mongoURI = 'mongodb://localhost:27017/hotel'

// Models
const Hotel = require('./models/hotel.js')
const hotelSeed = require('./models/seed.js')

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, () => {
  console.log('The connection with mongod is established')
})

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', mongoURI))
db.on('disconnected', () => console.log('mongo disconnected'))

// Hotel.create(hotelSeed, (err, data) => {
//   if (err) console.log(err.message)
//   console.log('added provided hotel data')
// })

// Hotel.collection.drop()

// Hotel.countDocuments({}, (err, data) => {
//   if (err) console.log(err.message)
//   console.log(`There are ${data} hotels in this database`)
// })

// *******************************************//
// Everything provided to students end
// *******************************************//

// const myFavStay = {
//   name: 'Best Hotel',
//   location: 'Flordia',
//   rating: 4,
//   vacancies: true,
//   tags: ['clean', 'free breakfast', 'pool'],
//   rooms: [ { roomNumber: 200, size: 'huge', price: 160, booked: false } ]
// }


// Hotel.create(myFavStay, (err, data) => {
//   if (err) {
//     console.log(err.message)
//   } else {
//     console.log('added new hotel')
//   }
  
// })


// Hotel.find((err, hotels) => {
//   console.log(hotels)
//   db.close()
// })

// Hotel.find({}, {name: 1, _id:0 }, (err, hotels) => {
//   console.log(hotels)
//   db.close()
// })

// Hotel.find({name: 'Best Hotel'}, (err, hotels) => {
//   console.log(hotels)
//   db.close()
// })

// Hotel.find({vacancies: true}, {}, (err, hotels) => {
//     console.log(hotels)
//     db.close()
//   })


// Hotel.findOneAndRemove({name: 'Hotelicopter'}, (err, hotels) => {
//     if (err){
//         console.log(err);
//       } else {
//         console.log('This is the deleted item: ', hotels);
//       }
//   db.close()
// })

// Hotel.findOneAndRemove({name: "Hilbert's Hotel"}, (err, hotels) => {
//     if (err){
//         console.log(err);
//       } else {
//         console.log('This is the deleted item: ', hotels);
//       }
//   db.close()
// })


// Hotel.findOneAndRemove({location: "Colorado Rockies"}, (err, hotels) => {
//     if (err){
//         console.log(err);
//       } else {
//         console.log('This is the deleted item: ', hotels);
//       }
//   db.close()
// })


// Hotel.findOneAndUpdate({name: "The Great Northern"}, {rating: 5}, {new: true}, (err, hotels) => {
//     if (err){
//         console.log(err)
//       } else {
//         console.log('This is the updated item: ', hotels);
//       }
//   db.close()
// })


// Hotel.findOneAndUpdate({name: "Motel Bambi"}, {vacancies: false}, {new: true}, (err, hotels) => {
//     if (err){
//         console.log(err)
//       } else {
//         console.log('This is the updated item: ', hotels);
//       }
//   db.close()
// })

// Hotel.findOneAndUpdate({location: 'White Bay, Oregon'}, {rating: 2}, {new: true}, (err, hotels) => {
//     if (err){
//         console.log(err)
//       } else {
//         console.log('This is the updated item: ', hotels);
//       }
//   db.close()
// })
