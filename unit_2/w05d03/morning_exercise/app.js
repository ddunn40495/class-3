const validCard = (params) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    let actualString = new String(params)
    console.log (actualString)
    let numArray = actualString.split('')
    console.log(numArray)
   
    let intArray = numArray.map(Number)
    console.log(intArray)
    let altArray = []
    let regArray = []
    for (let i = intArray.length - 2; i >= 0; i -= 2) {
       altArray.push(intArray[i])
        
    }
    for (let i = intArray.length - 1; i >= 0; i -= 2) {
        regArray.push(intArray[i])
         
     }
    console.log(altArray)
    console.log(regArray)
    let doubleArray = altArray.map(x  => x * 2)
    console.log(doubleArray)
    
    let valOfNums1 = doubleArray.reduce(reducer)
    console.log(valOfNums1)
    let valOfNums2 = regArray.reduce(reducer)
    console.log(valOfNums2)
    let valOfNums = valOfNums1 + valOfNums2
    
    if (valOfNums % 10 === 0) {
        return true
    } else {
        return false
    }
}
console.log(validCard(1234567890123456)) // should be false
console.log(validCard(4408041234567893)) // should be true
console.log(validCard(38520000023237)) // should be true
console.log(validCard(4222222222222)) // should be true