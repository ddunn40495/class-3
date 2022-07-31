const numsToSum = [ 1 , 2, 3, 4, 5, 6, 7, 8 , 9 ,10 ];

const sumNumbers = ( numsArray, sum ) => {
    sum = sum || 0
    if (numsArray.length === 0) {
        return sum
    }
}


const sumNumbers = ( numsArr ) => {
    if ( numsArr.length === 0 ){
    return sum;
    }
    sum += numsArray.shift()
    return sumNumbers(numsArray, sum)
   }


   const testCase1 = 10;
const isEven = ( num ) => {
  if ( num === 0 ) {
    return "the number is even";
  }
  if ( num === 1 ){
    return "the number is odd";
  }
  return isEven( num - 2 );
}

isEven( testCase1 );
isEven( 101 );




const testCase = 5

const factorial =  (num) => {
    if (num === 0) {
        return num
    }
   return factorial(num* (num - 1) )

   

}

const testCase2 = 4

const steps = (num) => {
    
}









