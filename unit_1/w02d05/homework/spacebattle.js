let nextShip = 0

class Usa {
    constructor() {
        this.hull = 20
        this.firepower = 5
        this.accuracy = .7
    }
    charge(param) {
        while (this.hull > 0) {
            while(enemyNavy[param].hull > 0) {
                if ((Math.floor(Math.random() * 3) + 6) / 10 <= this.accuracy) {
                    enemyNavy[param].hull -= this.firepower
                    console.log('USS Ship' + ' lauching attack on Alien Ship  #' + enemyNavy[param].id)
                    console.log('we hit the alien ship')
                    console.log('Alien Ship' + '#' + enemyNavy[param].id + '  Health is ' + enemyNavy[param].hull)
                    enemyNavy[param].charge()
                } else {
                    console.log('USS Ship' + ' lauching attack on Alien Ship  #' + enemyNavy[param].id)
                    console.log('We missed get it together boys')
                    console.log('Alien Ship' + '#' + enemyNavy[param].id + '  Health is ' + enemyNavy[param].hull)
                    enemyNavy[param].charge()
                }
            }

            
        }
        console.log('we won')
    }
    retreat() {
        console.log('Theyre are too many we will come back with full force tommorow')
    }
    win() {
        console.log('game over')
    }
}

const USSschwar = new Usa

console.log(USSschwar)


class Enemy {
    constructor(id) {
        this.hull = Math.floor(Math.random() * 3) + 3
        this.firepower = Math.floor(Math.random() * 2) + 2
        this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10
        this.id = id
    }
    charge () {
        if (this.hull > 0) {
            if (USSschwar.accuracy < this.accuracy) {
                USSschwar.hull -= this.firepower
                console.log('Alien Ship  #' + this.id + ' lauching attack on USS Ship')
                console.log('We got hit, repair the sides and fire back')
                console.log('USS Ship Health is  ' + USSschwar.hull )
                USSschwar.charge(this.id)
            } else {
                console.log('Alien Ship  #' + this.id + ' lauching attack on USS Ship')
                console.log('They missed, lets go get em')
                console.log('USS Ship Health is  ' + USSschwar.hull)
                USSschwar.charge(this.id)
            }
                    
         } else if (this.hull <= 0 && this.id < 5) {
                nextShip = this.id + 1
                sendShip(nextShip)  
        } else {
            console.log('over')
        }
        return
    }
}

const enemyNavy = []


for (let i = 0; i < 6; i++) {
    enemyNavy.push(new Enemy(i))
    
    
}

const sendShip = (nextShip) => {
    if (nextShip <= enemyNavy.length - 1) {
        USSschwar.charge(nextShip)
    } 
}

// console.log(enemyNavy)


  
  USSschwar.charge(0)
    




  
    
