// class Pet {
//     constructor(name) {
//         this.owner = 'daniel'
//         this.name = name
//     }
//     walk() {
//         console.log('walka walka')
//     }
// }

// const goodBoy = new Pet('lacey')

// goodBoy.walk()

// console.log(goodBoy.name)

// class Dog extends Pet {
//     constructor(name) {
//         super(name)
//         this.price = 20
//     }
//     bark() {
//         console.log('bark')
//     }
//     chaseTail() {
//         console.log('oh boy oh boy oh boy')
//     }
//     getPrice() {
//         return this.price
//     }
// }

// const goodDog = new Dog('airbud')

// console.log(goodDog)
// goodDog.bark()
// goodDog.chaseTail()
// goodDog.getPrice()

// class Cat extends Pet {
//     constructor(name) {
//         super(name)
//         this.price = 10
//     }
//     purr() {
//         console.log('purrrrr')
//     }
//     clean() {
//         console.log('cleaning')
//     }
//     getPrice() {
//         return this.price
//     }
//     walk() {
//         console.log('strut strut')
//     }
// }

// const goodCat = new Cat('kit kat')

// console.log(goodDog)
// goodCat.purr()
// goodCat.clean()
// goodCat.getPrice()
// goodCat.walk()

// const frank = () => {
    
// }

// () => {
    
// }

// for (let i = 0; i < array.length; i++) {
    
// }

class Hamster  {
constructor(name) {
    this.owner = ''
    this.name = name
    this.price = 15
}
wheelRun() {
    console.log('squeak squeak')
}
eatFood() {
    console.log('nibble nibble')
}
getPrice() {
    return this.price
}
}





let hamsterPrice = 0


class Person {
    constructor (name) {
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 20;
    }
    getName() {
        return this.name
    }
    getAge() {
        return this.age
    }
    getWeight() {
        return this.weight
    }
    greet() {
        console.log('Hi my name is' + this.name);
    }
    eat(num) {
        this.weight + num
        this.mood + num
    }
    buyHamster(hamster) {
        hamsterPrice = hamster.getPrice()
        this.hamsters.push(hamster)
        this.bankAccount - hamsterPrice
    }

}
const alez = new Person('alez')

const normalHampster = new Hamster('kellen')


alez.buyHamster(normalHampster)
console.log(hamsterPrice)

class Hoopers {
    constructor(name, position, college, shootingHand, threePointPercentage, astPerGame) {
        this.name = name
        this.position = position
        this.college = college
        this.shootingHand = shootingHand
        this.threePointPercentage = threePointPercentage
        this.assistPerGame = astPerGame

    }
    getPosition() {
        return this.position
    }


}
let paString = null


class Rockets extends Hoopers {
    constructor(name, position, college, shootingHand, threePointPercentage, astPerGame, residence, yearsWithRockets) {
        super(name, position, college, shootingHand, threePointPercentage, astPerGame)
        this.residence = residence
        this.yearsWithTeam = yearsWithRockets
    }
    paAnnocement() {
        paString = this.getPosition()
        return "#13 from " + this.college + ' starting at ' + paString + ' ' + this.name
    }
}

const theBeard = new Rockets('James Harden', 'point guard', 'ASU', 'left', 35.5, 7.5, 'sugar land', 8)
console.log(theBeard)
console.log(theBeard.paAnnocement())

theBeard.position = 'point-forward'
console.log(theBeard)