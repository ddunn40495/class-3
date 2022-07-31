   // console.log('Thursday is the day before Friday')

// function declaration
// function someFunc () {}

// function expression
// es5
// var someFunc = function () {}

// es6
// define function / function definition
const printBanner = (text) => {
  console.log('========================')
  console.log(`${text}`)
  console.log('========================')
}

// printBanner('I love string interpolation more than concatenation')
// function reference
// printBanner

// invoke or call function
// printBanner()

const printSum = () => {
  console.log(10 + 10)
}

// printSum()

const checkInputLength = (input) => {
  if (input.length > 10) {
    console.log('input length is greater than 10! Please shorten')
  } else {
    console.log('input length is not greater than 10, good to go!')
  }
}

const sayName = (name) => {
  console.log('Hello! My name is ' + name)
}


// sayName('Frodo')
// sayName('Merry')
// sayName('Pippin')
// sayName('Sam')

const calculateArea = (num1, num2) => {
  return num1 * num2
}

// console.log(
//   calculateArea(calculateArea(2,3),
//   calculateArea(9,4))
// )

// calculateArea(4,4)

const ten = () => {
   return 10
}

//function
// console.log(ten())

// method

// console.log(ten() + 8)

const example = (input) => {
  if(input === 'none') {
    return 0
  }
  return 1
}

console.log(example('none'))
