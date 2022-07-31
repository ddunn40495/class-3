// =======================================
//      PROGRAMMING FUNDAMENTALS
// =======================================



// DRY
This means dont repeat yourself, we use functions and loops so we dont have to repeat ourselves. 

// KISS
You want to keep the code simple because other people are going to be looking and making changes to that code.

// Avoid creating a YAGNI
Dont have unneassacry pieces of code. 

// Do the simplest thing that could possibly work
You should write code that is clean and simple so its is easier to read.

// Don't make me think
If the code is really hard of another person to read then the code needs to be simplified.

// Write code for the maintainer
You will be maintaining code and others will maintain code that you wrote. Write DRY code others can read.

// Single responsibility principle
Each function or loop should perform a single task.

// Avoid premature optimization
You shouldnt try to optimizate your code until it is working.

// Separation of concerns
You should organize your code into differnet sections so you can easy find what you are looking for.




const f = l => {
    //declaring a function
    let es = 0, p = 0, c = 1, n = 0
    // declaring variables and adding values
    while (c <= l) { //While c is less than or equal to l run that loop
      n = c + p;
      [c, p] = [n, c]
      es += (c % 2 === 0) ? c : 0
    }
    return es // return value of es
  }
  
  // console.log(f(55))


  const f2 = (limit) => {
    let evenSum = 0;
    let previous = 0;
    let current = 1;
    while (current <= limit) {
      let next = current + previous;
      previous = current;
      current = next;
      if (current % 2 === 0) {
        evenSum += current;
      }
    }
    return evenSum;
  }
  
  
  console.log(f2(55))
