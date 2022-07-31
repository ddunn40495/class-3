// const adventurer = {
//     name:'Timothy',
//     hitpoints:10,
//     belongings:['sword', 'potion', 'Tums'],
//     companion: {
//         name:'Velma',
//         type:'Bat',
//         companion: {
//             name:'Tim',
//             type:'Parasite',
//             belongings: ['SCUBA tank', 'Rogan josh', 'health insurance']
//         }
//     }
// }
// console.log(adventurer.companion.companion.belongings[2]);
//
// console.log(adventurer.belongings[1]);
//
// for(let i = 0; i < adventurer.belongings.length; i++){
//     console.log(adventurer.belongings[i]);
// }
// const movies = [
//     {
//         title:'Tokyo Story'
//     },
//     {
//         title:'Paul Blart: Mall Cop'
//     },
//     {
//         title:"L'Avventura"
//     },
// ]
//
// console.log(movies[0].title);
//
// for(let i = 0; i < movies.length; i++){
//     console.log(movies[i].title);
// }

// const foo = {
//     someMethod: () => {
//         console.log('oh hai!');
//     }
// }
//
// foo.someMethod();

// const foo = [
//     ['0,0', '0,1', '0,2'],
//     ['1,0', '1,1', '1,2'],
//     ['2,0', '2,1', '2,2'],
// ];
//
// console.log(foo[1][2]);

// const foo = [
//     1,
//     'hi',
//     () => {
//         console.log('fun');
//     }
// ];
//
// foo[2]();


// const summonBird = () => {
//     return {
//         color: 'blue'
//     }
// };
//
// console.log(summonBird());

// const createBag = () => {
//     return ['apple', 'banana', 'pear']
// }
//
// console.log(createBag()[1]);


// const foo = () => {
//     console.log('hello');
// }
//
// console.log(foo());

// const generateSpell = () => {
//     return () => {
//         console.log('fireball');
//         return generateSpell
//     }
// }
//
// generateSpell()();


// const foo = {
//     name:'Matt',
//     age: 39
// }
//
// for(let key in foo){
//     console.log(key);
// }

// const foo = {
//     someArray:[1,2,3]
// }
//
// // for(let element of foo.someArray){
// //     console.log(element);
// // }
//
// for(let i = 0; i < foo.someArray.length; i++){
//     console.log(foo.someArray[i]);
// }


// const myArray = [1,2,3];
//
// for(let i = 0; i < foo.someArray.length; i++){
//     console.log(foo.someArray[i]);
// }

// const foo = [
//     ["0,0", "0,1", "0,2"],
//     ["1,0", "1,1", "1,2"],
//     ["2,0", "2,1", "2,2"]
// ];
//
//
// for(let i = 0; i < foo.length; i++){
//
//     for(let j = 0; j < foo[i].length; j++){
//
//         console.log(foo[i][j]);
//
//     }
//
// }

// for(let row of foo){
//     for(let element of row){
//         console.log(element);
//     }
// }

// const summonServant = () => {
//     return {
//         bagOfStuff: ['clothes', 'food', 'keys'],
//         hat: {
//             color:'black'
//         },
//         washFeet: () => {
//             console.log('washing');
//         }
//     }
// }
//
// console.log(summonServant().hat.color);
// summonServant().washFeet();

// const wizard = {
//     summonImp: () => {
//         return {
//             color:'black'
//         }
//     },
//     generateSpell: () => {
//         return () => {
//             console.log('fireball');
//         }
//     }
// }
//
// console.log(wizard.summonImp().color);
// wizard.generateSpell()();

const bag = [
    1,
    'apple',
    () => {
        // return {
        //     name: 'bob'
        // }
        return () => {
            console.log('fireball!');
        }
    }
];

// console.log(bag[2]().name);
bag[2]()();
