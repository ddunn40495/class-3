class Person {
    constructor(name, age, eyes, hair, lovesCats = false, isLynx) {
        this.legs = 2
        this.arms = 2
        this.name = name
        this.age = age
        this.eyes = eyes
        this.hair = hair
        this.lovesCats = lovesCats
        this.isLynx = isLynx || false
    }
    greet(friend) {
        console.log('hi ' + friend + '!')
    }
    walk() {
        console.log('I hate when Burt has repossessed my car.')
    }
    setHair(hairColor) {
        this.hair = hairColor
    }
}

const dud = new Person('dud', 27, 'green', 'blonde')
// const liz = new Person('liz', 31, 'blue', 'brown')
// console.log(dud)
// console.log(liz)
// console.log(typeof dud)
// console.log(typeof liz)

// dud.greet('alice')
// dud.walk()
// liz.greet('alice')
// liz.walk()


const liz = new Person('Liz', 36, 'hazel', 'brown')
console.log(liz)
// liz.setHair('chestnut with lowlights')
liz.hair = 'red'
console.log(liz)


class SuperHero extends Person {
    constructor(name, age, eyes, hair) {
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
        console.log('Greetings Earthl- Oops, I mean ' + otherPerson)
      }
      walk() {
        super.walk()
        this.fly()
      }
  }
//   const captainMarvel = new SuperHero('Carol Danvers', 30, 'brown', 'blonde')
//   console.log(captainMarvel)
//   captainMarvel.walk()
//   captainMarvel.fly()
  
  
const captainMarvel = new SuperHero('Carol Danvers', 30, 'brown', 'blonde')
captainMarvel.greet('Bob')
captainMarvel.walk()
captainMarvel.fly()
console.log(captainMarvel)