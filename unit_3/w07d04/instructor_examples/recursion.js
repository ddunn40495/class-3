const numsToSum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const sumNumbers = (numsArray, sum) => {
  sum = sum || 0
  if (numsArray.length === 0) {
    return sum
  }
  sum += numsArray.shift()
  return sumNumbers(numsArray, sum)
}

console.log(sumNumbers(numsToSum))

let testCase1 = 10

const isEven = num => {
  if (num === 0) {
    return 'The number is even'
  }
  if (num === 1) {
    return 'The number is odd'
  }
  return isEven(num - 2)
}

console.log(isEven(testCase1))
console.log(isEven(1000000000003))
