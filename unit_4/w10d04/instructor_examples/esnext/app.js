// var a = 10
//
// ;(function IIFE() {
//   var a = 2
//   console.log('Inside the IFFE, the value of a is', a) //"Inside the IFFE, the value of a is 2"
// })()
//
// console.log('Outside the IFFE, the value of a is', a) //"Outside the IFFE, the value of a is 10s"
//
// //Now let the world know that you know what an IIFE is! They'll be impressed!

// var b = 1234
//
// {
//   let b = 5678
//   console.log('the value of b inside the `{}` is', b) //"block level scope"
// }
//
// console.log('the value of b outside of the `{}` is', b) //"global scope"

//a global variable
// var j = 10
//
// /////////// ES5 ///////////
// //get a little formatting, for clarity
// console.log('\n\nfor loop using `var`:\n')
//
// //for loop using var
// for (var iES5 = 0; iES5 < 5; iES5++) {
//   var kES5 = j + iES5
//   console.log('the vale of iES5 inside the for loop', iES5)
// }
//
// console.log('the value of iES5 outside the for loop is', iES5)
// console.log('the value of kES5 outside the for loop is', kES5)
// console.log('the value of j is', j)
//
// /////////// ES6 ///////////
//
// //get a little formatting, for clarity
// console.log('\n\nfor loop using `let`:\n')
//
// //for loop using let
// for (let iES6 = 0; iES6 < 5; iES6++) {
//   let kES6 = j + iES6
//   console.log('the value of iES6 inside the for loop is ', iES6)
// }
//
// console.log(
//   'the value of iES6 outside the for loop is: ReferenceError: iES6 is not defined'
// ) // console.log(iES6) //error undefined
// console.log('the value of j outside the for loop is', j)
// console.log(
//   'the value of kES6 outside the for loop is: `ReferenceError: kES6 is not defined`'
// ) // console.log(kES6) //error undefined
//
// //Woot woot!

// const beverage_es5 = type => {
//   return type || 'water'
// }
//
// console.log(beverage_es5())
// console.log(beverage_es5('White Claw'))
//
// console.log('\n\n')
//
// //Now you can do
//
// const beverage_es6 = (type = 'sparkling water') => {
//   return type
// }
//
// console.log(beverage_es6())
// console.log(beverage_es6('small beer'))
//
// //Now that is refreshing!

//ES5 - 2 arguments
// const sumES5 = function(a, b) {
//   return a + b
// }
//
// console.log('\nES5 sum:', sumES5(5, 5))

//ES6 - 2 arguments
// const sumES6 = (a, b) => a + b
//
// console.log('ES6 sum:', sumES6(6, 6))

// const salutationsES6 = () => console.log('Howdy ES6\n')
//
// salutationsES6()

// //ES6 - one argument
// var squareES6 = c => c * c
// console.log('ES6 square:', squareES6(6))

// class Person {
//   constructor(
//     name,
//     friends = ['Charlie', 'Dennis', 'Ron', 'Sweet Dee', 'Frank']
//   ) {
//     this.name = name
//     this.friends = friends
//   }
//   // undefined - can't run
//   // secretAdmirer() {
//   //   this.friends.forEach(function(f) {
//   //     // console.log(this)
//   //     console.log(this.name + ' sends flowers to ' + f)
//   //   })
//   // }
//
//   // freeze the value of this by setting it to a new variable name
//
//   giveOldSchoolLove() {
//     const self = this
//     // console.log(this)
//     // console.log(self)
//     this.friends.forEach(function(f) {
//       console.log(self.name + ' likes ' + f)
//     })
//   }
//   // bind the value of this
//   giveBindingAffection() {
//     // console.log(this)
//     this.friends.forEach(
//       function(f) {
//         // console.log(this)
//         console.log(this.name + ' makes friendship bracelets for ' + f)
//       }.bind(this)
//     )
//   }
//   // use an arrow function
//   giveNewSchoolLove() {
//     this.friends.forEach(f => console.log(this.name + ' hearts ' + f))
//   }
//
//   allTheLove() {
//     // errors
//     // this.secretAdmirer()
//     // these all work
//     this.giveOldSchoolLove()
//     this.giveBindingAffection()
//     this.giveNewSchoolLove()
//   }
// }
//
// //See examples
// let freinds = 'asdf'
// k = new Person('Karolin')
// console.log('\nSecret Admirer:')
// // k.secretAdmirer()
// console.log('\nShow old school love:')
// k.giveOldSchoolLove()
// console.log('\nShow new school love:')
// k.giveNewSchoolLove()
//
// // Supercalifragilisticexpialidocious !!!
//
// let arr = [1, 2, 3]
//
// // console.log(typeof arr) //'object'
// //
// // console.log(arr instanceof Array) // true
//
// console.log(Array.isArray(arr))

//SPREAD (take out of array)
//Let's look at an awesome Math method
// var x = -5
// var y = 5
//
// console.log(Math.max(x, y)) // 5
//
// // But what if you have
// var z = [1, 5, -2, 8, -9, 17, -22]
// var t = [1, 2, 3, 4, 5]
// // Using Math.max is doable, but cumbersome with an array.
//
// // Now you can do
// // console.log(Math.max(y, ...z)) // 17
//
// let a = [...z, ...t]
// console.log(a)

// Easy as pie!

//REST (gather into array)

//Let's get a bunch of arguments and sum the only the ones that are numbers

// function sumOnlyNums(...asdf) {
//   console.log(asdf)
//   var nums = asdf.filter(arg => typeof arg === 'number')
//   console.log(nums)
//   var sum = nums.reduce((sum, num) => sum + num)
//   return sum
// }
//
// console.log(
//   sumOnlyNums(
//     44,
//     false,
//     'pizza',
//     45,
//     { season: 'winter' },
//     [1, 2, 3, 4, 5],
//     2,
//     9,
//     'brendan',
//     10,
//     10,
//     10,
//     10
//   )
// ) // 100
//
// // Duck soup FTW!

//If you wanted to swap the value of x and y with es5,
//you had to do
// let x = true
// let y = false
// z = 10
// let temp
//
// // temp = x
// // x = y
// // y = temp
// //The new way
// //will return x and y to original values in this case
// [x, y, z] = [z, x, y]
//
// console.log(x, y, z)
// // NEATO!
//
// // NEATO!

// const someLongObjectName = {
//   brand: 'Tandy',
//   price: 2894,
//   year: 1984,
//   ram: '128KB',
//   hardDrive: '20MB',
//   mouseIncluded: true
// }
//
//
// // rename
// let {ram, screen = 15} = someLongObjectName
// ram = 100
//
// console.log(ram);
//
// console.log(someLongObjectName);

const nestedObject = {
  rabbit: {
    hat: 'rabbit',
    rabbitCape: 'fancy',
  }
}
const tryToPullRabbitProperties = nestedObject.rabbit
const pullRabbitProperties = {...nestedObject}
console.log(tryToPullRabbitProperties)
console.log(pullRabbitProperties)
