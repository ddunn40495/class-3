// console.log('scope is cool')
const globalNum = 10
const exampleFunction = () => {
  const num = 100
  console.log(num * globalNum)
}

// exampleFunction()

// const item = 'spicy meatball'
//
// const exampleFunction2 = () => {
//   console.log(item + ' within function')
// }
//
// exampleFunction2()

const setItem = () => {
  const item = 'spicy meatball'
  return item
}

const getItem = () => {
  return item
}

// console.log(getItem())

const returnGreeting = () => {
  return 'Oh hai, ' + returnName()
}

const returnName = () => {
  return 'Mr. Mistoffelees'
}

const item = 'Owen\'s leash'

// console.log(returnGreeting())

{
  const item = 'spicy meatball'
  // console.log(item)
}

// for (var i = 0; i < 3; i++) {
//   console.log('Inside the block:', i)
//   for (var j = 0; j < 2; j++) {
//     console.log('deeper inside the block', j)
//     for (var k = 0; k < 1; k++) {
//       console.log('even deeper in the block', k)
//     }
//   }
// }
//
// console.log('Outside the block', k)

// if (true) {
//   num = 100
//   console.log(num)
// }
//
// console.log(num)

const age = 21
let message = ''

// console.log(age, age < 21)

if (age < 21) {
  message = 'You cannot buy the beer'
} else {
  message = 'You can buy the beer'
}

// console.log(message)


// const words = "that's a ..."
//
// {
//   const item = 'spicy meatball'
//   const start = 'mama mia!'
//   {
//     console.log(start)
//     console.log(words)
//     console.log(item)
//   }
// }

// stack overflow just like an infinite loop with some under the hood differences
// const func = () => {
//   return func()
// }

const countdown = (num) => {
  if (num != 0) {
    console.log(num)
    countdown(num - 1)
  }
}

countdown(10)
