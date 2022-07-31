console.log('conneted to adventure');

// =====================
// HERO CLASS
// =====================
class Hero {
  constructor(name, health, weapons, catchphrases) {
    this.name = name;
    this.health = health;
    this.weapons = weapons;
    this.catchPhrases = catchphrases;
  }
  talkSass() {
    let randomPhrase = Math.floor(Math.random() * this.catchPhrases.length)
    console.log(this.catchPhrases[randomPhrase]);
  }
  announceHealth() {
    console.log(this.name + '\'s health is currently: ' + this.health);
  }
  fight(enemy) {
    console.log(Object.keys(this.weapons)[0] + '\'s hitpoints is: ' +  this.weapons[Object.keys(this.weapons)[0]]);
    enemy.health -= this.weapons[Object.keys(this.weapons)[0]];
    enemy.announceHealth();
  }
}

// instantiate our hero Dougie the Donut
let dougie = new Hero('Dougie the Donut', 100, { sprinkleSpray: 5, sugarShock: 10 }, ['i\'m fresher than day old pizza','you can\'t count my calories']);

console.log(dougie);

// =====================
// ENEMY CLASS
// =====================
class Enemy {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.weapons = {
        pepperoniStars: 5,
        cheeseGrease: 10
    };
    this.catchPhrases = ['i\'m youtube famous',
                        'i\'m more dangerous than an uncovered sewer'];
  }
  talkSmack() {
    let randomPhrase = Math.floor(Math.random() * this.catchPhrases.length)
    console.log(this.catchPhrases[randomPhrase]);
  }
  announceHealth() {
    console.log(this.name + '\'s health is currently: ' + this.health);
  }
  fight(hero) {
    hero.health -= this.weapons.cheeseGrease;
    // hero.announceHealth();
  }
}

// instantiate our enemy Pizza Rat
let pizzaRat = new Enemy('Pizza Rat');

console.log(pizzaRat);

// =====================
// WALKING DOWN THE STREET
// =====================
dougie.talkSass();
pizzaRat.talkSmack();
dougie.announceHealth();
pizzaRat.announceHealth();

// =====================
// FIGHT
// =====================
dougie.fight(pizzaRat);
pizzaRat.fight(dougie);
