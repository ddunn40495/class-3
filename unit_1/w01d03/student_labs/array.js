
const nTurtle = ["Donatello", "Leonardo", "Raphael" , "Michaelangelo"];

for (let i = 0; i < nTurtle.length; i++) {
  console.log(nTurtle[i].toUpperCase());
  }


for (turtle of nTurtle) {
    console.log(turtle.toUpperCase())
  };
 
  


















  const myArray = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..." ];

for (let i = 0; i < 20; i++) {
  console.log("Love me, pet me! HSSSSSS!")
  if (i % 2 === 0 ) {
    let quotes = Math.floor(Math.random()* (myArray.length));
    console.log(myArray[quotes])
  }
  
}




















