////////////////////////////////
// Easy Going
////////////////////////////////

for (let i = 1; i < 21; i++) {
    console.log(i);
    
}
////////////////////////////////
// Get Even
////////////////////////////////

for (let i = 0; i < 201; i += 2) {
    console.log(i);
    
}
////////////////////////////////
// Fizz Buzz
////////////////////////////////
 for (let i = 0; i < 101; i++) {
     if (i % 3 === 0 && i % 5 === 0) {
         console.log("fizzbuzz");
     } else if (i % 3 === 0){
         console.log("fizz");
     } else if (i % 5 === 0){
        console.log("buzz");
     } else {
         console.log(i);
     }       
 }

////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2] = "5001";

wolfy[3] = "Gotham City";

dart.push("Hawkins");

wolfy[0] = "Gameboy";
////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
const ninTurt = ['donatello', 'leonardo', 'raphael', 'michaelangeo']

// for ( const value of ninTurt) {
//     console.log(ninTurt.toUpperCase());
// }  I wasnt able to work this one out

////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

console.log(favMovies[8]);

favMovies.pop();
console.log(favMovies);
favMovies.push('Guardians of the Galaxy');
console.log(favMovies);

favMovies.reverse();
console.log(favMovies);

favMovies.shift();
console.log(favMovies);

favMovies.unshift();
console.log(favMovies);
//6. It returns the same array as the shift method. 

favMovies.splice(14, 1, 'Avatar');
console.log(favMovies);

console.log(favMovies.length);

const sliceMovies = favMovies.slice(10);
console.log(sliceMovies);

console.log(favMovies);
console.log(favMovies.indexOf('Fast and Furious'));
// The value I got was -1

////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert", ["Lucinda", "Jacc", "Neff", "Snoop"], ["Petunia", ["Baked Goods", "Waldo"]]];



////////////////////////////////
//  Excited Kitten
////////////////////////////////
const myArray = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..." ];

for (let i = 0; i < 20; i++) {
 console.log("Love me, pet me! HSSSSSSSS");
 if ( i % 2 === 0 ){
   let quotes = Math.floor(Math.random()* (myArray.length));
   console.log(myArray[quotes]);
 }
}
////////////////////////////////
//  Find the Median
////////////////////////////////

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

let median = 0;

nums.sort();
if (nums.length % 2 === 0){
  const middleIndex1 = Math.floor((nums.length-1)/2);
  console.log('middleIndex1', middleIndex1);

  const middleIndex2 = Math.ceil((nums.length-1)/2);
  console.log('middleIndex2', middleIndex2);

  median = (nums[middleIndex1] + nums[middleIndex2])/2;
  
} else {
  median = nums[Math.floor(nums.length/2)];
}

console.log(median);