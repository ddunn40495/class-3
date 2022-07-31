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
        exercise(num) {
            this.weight + num
         }
         ageUp(num) {
             this.age + num;
             this.height + num; 
             this.weight + num;
             this.mood - num;
             this.backAccount + (10 * num); 
         }
        buyHamster(hamster) {
            hamsterPrice = hamster.getPrice()
            this.hamsters.push(hamster)
            this.bankAccount - hamsterPrice
        }
    
    }

    const timmy = new Person('timmy');
    timmy.ageUp(5);
    timmy.eat(5);
    timmy.exercise(5);
    timmy.ageUp(9);
    const sammmy = new Hamster('sammy');
    timmy.buyHamster(sammmy);
    timmy.ageUp(15);
    timmy.eat(2);
    timmy.exercise(2);
    
    console.log(timmy)

