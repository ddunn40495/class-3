// console.log('hooray for arrays')

// const arr = []

// console.log(arr)

const satchel = [
  'yurt',
  'mattress',
  'candle',
  'map',
  'trendy sunglasses',
  'rupees',
  'Pepto Bismol',
  'boomerang',
  // 'cloak of invisibility'
]

const squares = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// console.log(satchel[0])
// console.log(satchel[1])

// console.log(satchel[2 * 2 + 1])

const index = 2
// console.log(satchel[index])

// console.log(satchel.length)

// console.log(satchel[800])

// access the last element
let lastItem = satchel.length - 1
// console.log(satchel[lastItem])

// console.log(satchel[satchel.length - 1])

satchel[2] = 'glowing orb'

// console.log(satchel)
// console.log(satchel[satchel.length / 2])

const shortArray = ['first', 'middle', 'last']

// console.log(
//   shortArray[Math.floor(shortArray.length/2)]
// )
// for (let i = 0; i < satchel.length; i++) {
//   console.log(
//     'I take out and lovingly admire my ' +
//     satchel[i] +
//     ', and then carefully put it back'
//   )
// }

// for (let i = 0; i < satchel.length; i += 2) {
//   console.log('A nimble rogue is trying to steal my: ' +
//   satchel[i] +
//   '!!!'
// )
// }

// for (let i = 0; i < satchel.length; i++) {
//   if (i % 2 === 0  && i % 3 === 0) {
//     console.log('A lovely fairy has enchanted my', satchel[i])
//   }
// }

// console.log('I think my satchel is cool' , satchel)

const pairs = [
  ['Harold', 'Kumar'],
  ['Laurel', 'Hardy']
]

// console.log(pairs[1][0])

pairs[0][1] = 'Maude'

console.log(pairs)
