// const car = {
//     color: 'blue',
//     hp: 4000,
//     hp: 5000,
//     year: 1989
// }
//
// console.log(car);

// const house = {
//     doors:9
// }
//
// house.windows = 30;
// house.hasGarden = true;
//
// console.log(house);
//
// house.windows = 29;
//
// console.log(house);

// const mogwai = {};
//
// mogwai = { name: 'Gizmo'}
// // mogwai.name = 'gizmo'
// //
// console.log(mogwai);

// const borough = {
//     name:'Brooklyn'
// }
//
// console.log(borough);

// const obj = {
//     whatevs: 'hi',
//     count:4
// }
//
// if(obj.whatevs == 'hi'){
//     console.log('okay');
// }
//
// for(let i = 0; i < obj.count; i++){
//     console.log(i);
// }
//
// if(obj.whatevs){
//     console.log('this works');
// }
// if(obj.doesntexist){
//     console.log('should not log');
// }
// //logging a property that doesn't exist
// console.log(obj.doesntexist);

// const foo = null
// if(foo){
//     console.log('works');
// }


// const goblin = { badGuy: true };
//
// console.log(goblin['badGuy']);

// const strangeObj = {}
//
// strangeObj['a key with spaces'] = 999;
//
// // console.log(strangeObj['a key with spaces']);
//
//
// const obj = {};
//
// for(let i = 0; i < 10; i++){
//     obj['key' + i] = 'foo';
// }
//
// console.log(obj);

// const obj = {
//     1:'one'
// }
//
// console.log(obj['1']);
//
// const monster = {
//     name:'Slimer',
//     age:6
// }
//
// const someVar = 'asdf';
//
// console.log(monster[someVar]);

const movie = {
    title: "L'Avventura",
    director: "Michelangelo Antonioni",
    year: 1960
}

for(let key in movie){
    // console.log(key);
    console.log(movie[key]+"!!!");
}
