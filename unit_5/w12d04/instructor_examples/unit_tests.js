const add = require('./add.js');

console.log('add() should return the sum of two numbers when passed integers as parameters');
if(add(1,1) === 2){
    console.log(' - success');
} else {
    console.log(' - fail');
}

console.log('');

console.log('add() should return the sum of two numbers when passed strings as parameters');
if(add("1", "1") === 2){
    console.log(' - success');
} else {
    console.log(' - fail');
}
