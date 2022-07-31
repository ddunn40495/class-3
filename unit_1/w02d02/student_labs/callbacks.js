

// const manners = () => {
//     console.log('hi')
// }
// const logger = (param) => {
//     console.log(param)
// }
// logger(manners)



const manners = () => {
    console.log('hi')
}
const logger = (param) => {
    param()
}
// logger(manners)


// const mobboss = (employee)=>{
//     console.log("I'm the boss");
//     employee();
// }
// mobboss(
//     ()=>{
//         console.log("I'm the thief");
//     }
// );
// mobboss(
//     ()=>{
//         console.log("I'm the arsonist");
//     }
// );


const electricMixer = (attachment) => {
    console.log("This mixer is now: " + attachment())
}

// electricMixer(() => {
//   return "spiralizing";
// });
let bigString
let newString

const blender = () => {
    return 'tasty smoothie'
}

const wordReverse = (string) => {
     newString = string.split('').reverse().join('')
    return newString
}


const toUpperCase = (string) => {
     bigString = string.toUpperCase()
    return bigString
}

const repMaster = (input, fun) => {
    return fun(input) + ' proves that I am the rep MASTER!'

}

console.log(repMaster('Daniel is happy', wordReverse))

let sum = 0 

setInterval( () => {
    console.log(sum = +2)
    
}, 1000)
