
class Factory {
    constructor(castle) {
        this.name = castle
        this.storage = []
    }
    makePeon() {
        const newPeon = new Peon('', this.storage.length)
        this.storage.push(newPeon)
    }
    grabPeon(id) {
     return this.storage[id]
    }
 }


class Castle {
    constructor(name) {
        this.name = name
        this.barracks =
        this.hitPoints = 10
        this.peons = []
    }
    
    
 
}

class Peon {
    constructor(name, id) {
        this.name = name
        this.job = ['nothing', 'repair', 'attack']
        this.id = id
    }
   
}


const whitecastle = new Castle('White Castle')
const whiteCastleFactory = new Factory('whiteCastle')
let promptVal = null
let newName = null
let peonJob = null

const namePeon = (currentPeon) => {
    newName = prompt('Enter name for your brand new peon')
    whitecastle.peons[currentPeon].name = newName
}
const assignPeon = () => {
    peonJob = prompt('Would you like your peon to do nothing (Press 1), repair things (Press 2), or attack (press 3)')
    if (peonJob == 1) {
        
    } else if (peonJob == 2) {
        
    } else if (peonJob == 3) {

    } else {

    }
}
const start = () => {
   

    promptVal = prompt('Hey welcome to the Game, would you like to create a peon (press 1), would you like to deploy peons (Press 2), would you like to quit (Press 3)') 

    if (promptVal == 1) {
        whiteCastleFactory.makePeon()
        whitecastle.peons.push(whiteCastleFactory.storage[whiteCastleFactory.storage.length - 1])
        namePeon(whitecastle.peons.length -1)
    } else if (promptVal == 2) {
        
    } else if (promptVal == 3) {

    } else {
        return
    }





}


start()

console.log(whitecastle.peons)