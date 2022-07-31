const checkPalindrome = (string) => {
    const revString = string.toLowerCase().split('').reverse().join('')
    if (revString === string.toLowerCase()) {
        return true
    } else {
        return false
    }
}

console.log(checkPalindrome('racecar'))
console.log(checkPalindrome('nascar'))




//SUM ARRAY

const sumArray = (array) => {
    let sum = 0

    for (let i = 0; i < array.length; i++) {
        sum += array[i]
        
    }

    return sum
}

console.log(sumArray([25, 25, 25 ]))


//PRIME NUMBRS

 const checkPrime = (number) => {
    for (i = 2; i < Math.sqrt(number); i++ ){
        while (number % i === 0) {
            return false
        }
        return true
    }
    
}



console.log(checkPrime(12))
console.log(checkPrime(13))





const printPrimes = (num) => {
    for (let i = 0; i < num; i++) {
       if (checkPrime(i) === true) {
           console.log(i)
       } 
        
    }
}

printPrimes(200)



