class Hero {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.objects = {
            sprinkleSpray: 5,
            sugarShock: 10
        };
        this.catchPhrases = ['i\'m fresher than day old pizza', 
        'you can\'t count my calories'];
    }
    talkSass() {
        let ranNum = 0;
        ranNum = Math.floor(Math.random() * 2);
        console.log(this.catchPhrases[ranNum]);
    }
    announceHealth() {
        console.log(this.health);
    }
    battle(enemy) {
        //Select a random object for attack
        let choice = 0;
        choice = Math.floor(Math.random() * 2);
        let attObj = null;
        if (choice == 0) {
            attObj = this.objects.sprinkleSpray
        } else {
            attObj = this.objects.sugarShock
        }
        //change method to accept enemy as argument
        //subtracts from enemies health using objects hitpoints
        if(this.health > 0) {
            this.health - attObj
        }
        //console log enemies name and health
        console.log('i\'m ready to rumble')
        console.log('attack' + attObj)
        console.log(enemy + 'got hit by ' + attObj + 'Health ' + enemy.health)
    }
}



const dougie = new Hero('Dougie');
dougie.battle();

class Enemy {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.objects = {
            pepperoniStars: 5,
            cheeseGrease: 10    
        };
        this.catchPhrases = ['i\'m youtube famous',
        'i\'m more dangerous than an uncovered sewer'];
    }
    talkSmack() {
        let ranSay = 0;
        ranSay = Math.floor(Math.random() * 2);
        console.log(this.catchPhrases[ranSay]);
    }
    announceHealth() {
        console.log(this.health);
    }
    battle(hero) {
        //Select a random object for attack
        let choice = 0;
        choice = Math.floor(Math.random() * 2);
        let attObj = null;
        if (choice == 0) {
            attObj = this.objects.pepperoniStars
        } else {
            attObj = this.objects.cheeseGrease
        }
        //change method to accept hero as argument
        //subtracts from heros health using objects hitpoints
        if(hero.health > 0) {
            hero.health - attObj
        }
        //console log enemies name and health
        console.log('i\'m gonna flatten you like a slice of pepperoni!');
        console.log('attack' + attObj)
        console.log(hero + 'got hit by ' + attObj + 'Health ' + hero.health)
    }
}

const pizzaRat = new Enemy('Pizza Rat');

dougie.talkSass();
pizzaRat.talkSmack();
dougie.announceHealth();
pizzaRat.announceHealth();

pizzaRat.battle(dougie);
dougie.battle(pizzaRat);
pizzaRat.announceHealth();
dougie.announceHealth();


