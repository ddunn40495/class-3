// console.log('hooray for classes')

// class definition
class Person {
  constructor (name, age, eyes, hair, lovesCats = false, isLynx) {
    this.legs = 2
    this.arms = 2
    this.name = name
    this.age = age
    this.eyes = eyes
    this.hair = hair
    this.lovesCats = lovesCats
    this.isLynx = isLynx || false
  }
  classyGreeting(otherClassyPerson) {
    console.log('Greetings ' + otherClassyPerson.name + '!')
  }
  greet (otherPerson) {
    console.log('Hi ' + otherPerson + '!')
  }
  setHair (hairColor) {
    this.hair = hairColor
  }
  sayMyAge () {
    console.log('I am ' + this.age + ' years old')
  }
  walk () {
    console.log('I hate when Burt has repossessed my car')
  }
}


// instantiating a new class
// invoking/calling a function that creates a new object
// based on the person class
const dud = new Person('Dud', 27, 'green', 'blond', true, true)
// dud.sayMyAge()
const liz = new Person('Liz', 29, 'brown', 'brown')
liz.setHair('chestnut with lowlights')

dud.hair = 'supernova red'
// dud.greet('Alice')
// dud.walk()
// dud.sayMyAge()
// dud.setHair('tidal wave blue')
// console.log('this is dud\'s legs', dud.legs)
// console.log(dud)
// console.log(liz)
// console.log(typeof dud)
// console.log(typeof liz)

// dud.greet('Liz')
// liz.greet('Dud')

// dud.greet('Alice')
// dud.walk()
// liz.greet('Alice')
// liz.walk()
// dud.classyGreeting(liz)



// VENDING MACHINE

// // const vendingMachine = {
//   snacks: [
//     {
//       name: 'apple',
//       price: 7
//     },
//     {
//       name: 'doritos',
//       price: 6
//     },
//     {
//       name: 'sun chips',
//       price: 6
//     }
//   ],
//   vend(index) {
//     // console.log(vendingMachine.snacks[index])
//     console.log(this.snacks[index])
//   }
// }

// vendingMachine.vend(1)

///////////////////////////////////////////////////////////
// INHERITANCE
///////////////////////////////////////////////////////////


class SuperHero extends Person {
  constructor(name, age, eyes, hair){
    super(name, age, eyes, hair)
    this.superPowers = [
     'flight',
     'superhuman strength',
     'energy blasts',
     'energy absorption',
     'ability augmentation',
     'super-speed',
     'enhanced hearing',
     'nigh-invulnerability'
   ]
  }
  fly() {
    console.log('Up up and away!')
  }
  greet(otherPerson) {
    console.log(`Greetings Earthl- Oops, I mean ${otherPerson}`)
  }
  walk(){
    super.walk()
    this.fly()
  }
}

const captainMarvel = new SuperHero('Carol Danvers', 30, 'brown', 'blonde')

// console.log(captainMarvel)
// captainMarvel.walk()
// captainMarvel.fly()

// console.log('Dud says')
// dud.greet('Carol')
//
// console.log('Captain Marvel says')
// captainMarvel.greet('Dud')
// captainMarvel.walk()

console.log(captainMarvel)
// dud is a person, he cannot fly like a SuperHero
// dud.fly()







// const arr = [1,4,3,2]
//
// arr.sort()
//
// console.log(arr)
