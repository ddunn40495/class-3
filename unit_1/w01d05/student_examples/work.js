// const makeDeck = () => {
//     let deck = []
//     for (let i = 0; i <= 14; i++) {
//         deck.push(i)
//     }
//     return deck
// }

// const randomNum = (arrLength) => {
//     return Math.floor(Math.random() * arrLength)
// }

// const shuffle = (arr) => {
//     let shuffledDeck = []
//     while (arr.length > 0) {
//         const randomIndex = randomNum(arr.length)
//         const card = arr.splice(randomIndex, 1)
//         shuffledDeck.push(card)
//     }
//     return shuffledDeck
// }

// let newDeck = shuffle(makeDeck())
// console.log(newDeck)


// const p1Card = newDeck.shift()
// const p2Card = newDeck.shift()

// if (p1Card > p2Card) {
    
// } else () {
    
// }


let waffles;
let syrup;
const getWaffles = () => {
  let waffleCount = parseInt(prompt("How many waffles do you have?", "please enter a number"));
  if (waffleCount <= 0) {
    alert('You have no waffles! Go get some waffles!');
  } else {
    waffles+=waffleCount;
    alert('You have ' + waffles + ' waffle(s)');
  }
}

const checkSyrup = () => {
  let haveSyrup = prompt("Do you have any syrup?", "please answer yes/no");
  if (haveSyrup === "yes") {
    syrup = true;
    alert ('Perfect!');
    showStatus();
  } else {
  alert ('You need Syrup!');
  }
}
const showStatus = () => {
  if (syrup === true) {
    alert('You have ' + waffles + 'waffle(s) and Syrup!');
  } else {
    alert('You have ' + waffles + 'waffle(s) but no Syrup!');
  }
  
}
const start = () => {
    waffles = 0;
    syrup = 0;
    getWaffles();
    checkSyrup();
    
  }
  start();

