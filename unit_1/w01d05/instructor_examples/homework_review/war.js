// function to make the deck
const makeDeck = () => {
  let deck = []
  for (let i = 1; i <= 14; i++) {
    deck.push(i)
  }
  return deck
}

// random number generator function
const randomNum = arrLength => {
  return Math.floor(Math.random() * arrLength)
}

// shuffle function (will use the random num funciton)
const shuffle = arr => {
  let shuffledDeck = []
  while (arr.length > 0) {
    const randomIndex = randomNum(arr.length)
    const card = arr.splice(randomIndex, 1).pop()
    shuffledDeck.push(card)
  }
  return shuffledDeck
}

// initialize a new deck using the functions above
let newDeck = shuffle(makeDeck())
// console.log(newDeck)

const player1Card = newDeck.shift()
const player2Card = newDeck.shift()

console.log(player1Card)
console.log(player2Card)

// play the game
if (player1Card > player2Card) {
  console.log('player 1 wins!')
} else if (player2Card > player1Card) {
  console.log('player 2 wins!')
} else {
  console.log('tie!')
// }
