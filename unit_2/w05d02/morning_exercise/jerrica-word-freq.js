// =========================
// FIND WORD FREQUENCIES
// =========================
const findWordFrequencies = (sentence) => {
  // initiate the object
  const wordFreqs = {}
  // split the sentence into an array of its words
  const wordArray = sentence.toLowerCase().split(" ")
  // loop through the array
  for (let word of wordArray) {
    // check if the word exists in the wordFreqs object
    if(wordFreqs[word]) { // if it does, increment its value by one
      wordFreqs[word] += 1
    } else { // if it does not, create it as a key and set its value to one
      wordFreqs[word] = 1
    }
  }
  // return the object
  return wordFreqs
}

// TESTING
const quickFoxFreqs = findWordFrequencies("The quick QUICK brown fox jumped over the lazy dog dog dog")
console.log(quickFoxFreqs)

// =========================
// FIND HIGHEST FREQUENCY
// =========================
const findHighestFrequencies = (wordFreqs) => {
  // initialize an object variable that keeps track of the current highest word and frequency
  let highestWordFrequency = { word: '', frequency: 0 }
  // loop through the object
  for (let word in wordFreqs) {
    // check if the current word has a higher frequency than the current one
    if(wordFreqs[word] > highestWordFrequency.frequency) {
      // if it  does, then set highestWordFrequency equal to the current word
      highestWordFrequency.word = word
      highestWordFrequency.frequency = wordFreqs[word]
    }
  }

  return highestWordFrequency
}

// TESTING
console.log(findHighestFrequencies(quickFoxFreqs))
