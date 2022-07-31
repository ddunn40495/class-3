// =======================================
//      COMBINING DATATYPES
// =======================================

crayonBox = { colors: ['red', 'orange', 'blue', 'purple', 'black', 'grey', 'yellow'] }

console.log(crayonBox.colors[2]);

bottle = {
    cap: {
        material: ['metal', 'plastic'],
        color: ['green', 'white', 'gold'],
    }
}

console.log(bottle.cap.color[1]);


let receipt = [ { name: 'bag', price: 12 }, { name: 'apples', price: 14 }, { name: 'mangos', price: 13 } ]

console.log(receipt[1].name);

let apartmentBuilding = ['white', 'brick', ['jack', 'mark', 'tim', 'winston', 'jackie']]

console.log(apartmentBuilding[2][2]);



// ============================
// Combine objects
// arrays functions
// more than one level deep
// ============================

function knit() {
    return {
        item: 'scarf',
        size: '6ft'
    }
};
console.log(knit().item);

function crayonSelector () {
    return crayonBox = { colors: ['red', 'orange', 'blue', 'purple', 'black', 'grey', 'yellow'] }
}

console.log(crayonSelector().colors[2]);


function powerButton() {
    return function options() {
        console.log('select a song');
    }
    
}
powerButton()();


// ===============
// Vending Machine
// ===============



const vendingMachine = {
    snacks: [{
        name: 'chips',
        price: 3
    }, {
        name: 'crackers',
        price: 1
    }, {
        name: 'coke',
        price: 2
    }],
    vend: (snacknum) => {
        return vendingMachine.snacks[snacknum].name
    }
}


console.log(vendingMachine.vend(0))






// const vender = (snacknum) => {
//     return vendingMachine.snacks[snacknum].name
// }

// console.log(vender(0))

// ===============
// Callbacks
// ===============
const add = (num1, num2) => {
    return num1 + num2
}
   

const subtract = (num1, num2) => {
    return num1 - num2
}

  
const multiply = (num1, num2) => {
    return num1 * num2
}
     
const divide = (num1, num2) => {
    return num1 / num2
}
     
const calculator = (num1, num2, operator) => {
    return operator(num1, num2)
        
}

    console.log(calculator(5, 3, add));
   
   
   
   
    console.log(calculator(5, 3, subtract));
    console.log(calculator(5, 3, multiply));
    console.log(calculator(5, 3, divide));


// =======================================
//      ARRAY METHODS WITH CALLBACKS
// =======================================

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = [
  'The',
  'quick',
  'brown',
  'fox',
  'jumps',
  'over',
  'the',
  'lazy',
  'dog'
]


///every 

//num
console.log(nums.every(num => num => 0))
//word
console.log(panagram.every(word => word.length < 8 ))


//filter

//num
console.log(nums.filter(num => num < 4))
//word
console.log(panagram.filter(word => word.length % 2 === 0))

//find

//num
console.log(nums.find(num => num % 5 === 0))
//word
console.log(panagram.find(word => word.length > 5))
// logs undefined becasue no word is bigger than 5 char


//Find Index

//num
console.log(nums.findIndex(num => num % 3 === 0))
//word
console.log(panagram.findIndex(word => word.length < 2))

//For Each

//num
nums.forEach(num => console.log(num * 3))
//word
panagram.forEach(word => console.log(word + '!'))


//Thought Questions
const newNums = []
const newWords = []
nums.forEach(num => newNums.push(num * 3))
console.log(newNums)
panagram.forEach(word => newWords.push(word + '!'))
console.log(newWords)



//map

//num
const hugeNums = nums.map(num => num * 100)
console.log(hugeNums)
//word
const hugeWords = panagram.map(word => word.toUpperCase())
console.log(hugeWords)

//some

//num
console.log(nums.some(num => num % 7 === 0))
//word
console.log(panagram.some(word => word.match('a')))