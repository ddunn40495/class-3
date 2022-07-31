//NINJA TURTLES
// let ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
//
// for (let turtles of ninjaTurtles) {
//   console.log(turtles.toUpperCase())
// }

//WHERE IS WALDO
// const whereIsWaldo = [
//   ['Timmy', 'Frank'],
//   'Eggbert',
//   ['Lucinda', 'Jacc', 'Neff', 'Snoop'],
//   ['Petunia', ['Baked Goods', 'Waldo']]
// ]
//
// // console.log(whereIsWaldo[1])
// // whereIsWaldo.splice(1, 1)
// // console.log(whereIsWaldo)
//
// // console.log(whereIsWaldo[2][0])
// whereIsWaldo.splice(1, 1)
// console.log(whereIsWaldo)
// console.log('==============================')
// // console.log(whereIsWaldo[1][2])
// whereIsWaldo[1][2] = 'No One'
// console.log(whereIsWaldo)
// console.log('==============================')
// console.log(whereIsWaldo[2][1][1])
// console.log(whereIsWaldo.indexOf('Waldo'))

//EXCITED KITTEN
let phrases = [
  '...human...why you taking pictures of me?...',
  '...the catnip made me do it...',
  '...why does the red dot always get away...'
]

for (let i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    console.log(phrases[Math.floor(Math.random() * phrases.length)])
  } else {
    console.log('Love me, pet me! HSSSSSS!')
  }
  // console.log('Love me, pet me! HSSSSSS!')
}

// Find the Median
// - Find the median number in the following `nums` array, then console.log that number.
// -  _hint_ if you check the length of the array / 2, you might get not get a whole number. In which case, look into `Math.floor( // something )`

// To calculate the median of any set of numbers, you need to write the numbers in order. If there is an odd number of results, the median is the middle number. If there is an even number of results, the median will be the mean of the two central numbers.

// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
//
// // Expected output:
// // => 15
//
// let median = 0;
//
// // Sort the array to get the numbers in ascending order
// nums.sort();
// console.log("Nums array after sort: " + nums);
// console.log("Length of nums array: " + nums.length);
// // If the array has an ODD number of elements
// median = nums[Math.floor(nums.length/2)];
// console.log('median (expected 15): ', median);

// If the array has an even or odd number of elements
// if (nums.length % 2 === 0){
//   const middleIndex1 = Math.floor((nums.length-1)/2);
//   console.log('middleIndex1', middleIndex1);
//   const middleIndex2 = Math.ceil((nums.length-1)/2);
//   console.log('middleIndex2', middleIndex2);
//   median = (nums[middleIndex1] + nums[middleIndex2])/2;
// } else {
//   median = nums[Math.floor(nums.length/2)];
// }
//
// console.log('median (expected 15): ', median);
