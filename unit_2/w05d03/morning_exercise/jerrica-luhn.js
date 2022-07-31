const validCard = (cardNum) => {
  // initializing variables
  cardNum = cardNum.toString()
  let sum = 0
  let toDouble = false // creating a boolean variable to keep track of whether i need to double the current number ; initially false because i don't to double the last number

  // loop through the number
  for(let i = cardNum.length - 1; i >= 0; i--) {
    // check if the current number needs to be doubled ; in other words, if toDouble is true
    if(toDouble) {
      // double the number
      let doubledNum = parseInt(cardNum[i]) * 2
      // if the doubled number is 2 digits
      if(doubledNum > 9) { // turn the number into a string and add the two digits onto the sum
        let stringDoubleNum = doubledNum.toString()
        sum += parseInt(stringDoubleNum[0]) + parseInt(stringDoubleNum[1])
      } else {
        // otherwise, add the doubled number to the sum
        sum += doubledNum
      }
      // toggle the toDouble variable
      toDouble = false
    } else { // otherwise, add the current number onto the sum
      sum += parseInt(cardNum[i])
      // toggle the toDouble variable
      toDouble = true
    }
  }

  // check if the sum is evenly divisible by 10
  if(sum % 10 === 0) {
    return true
  } else {
    return false
  }
}

console.log(validCard(1234567890123456))
console.log(validCard(4408041234567893))
console.log(validCard(38520000023237))
console.log(validCard(4222222222222))
