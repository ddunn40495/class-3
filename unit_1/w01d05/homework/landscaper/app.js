let money = 0
const allEquip = [ {
    name: 'teeth',
    price: 1,
    rate: 1
}, {
    name: 'scissors',
    price: 5,
    rate: 5
}, {
    name: 'push lawnmower',
    price: 25,
    rate: 50
}, {
    name: 'battery-powered lawnmower',
    price: 250,
    rate: 100
}, {
    name: 'students',
    price: 500,
    rate: 250
}]

const userEquip = []

userEquip.push(allEquip[0])

let statPrompt = null
let buyPrompt = null


const starter = () => {
    alert('Welcome to Landscape Hero, you have $1 and a set of teeth to cut grass time to get started')
    
    const buyScissors = (money) => {
        if (money > 4) {
            userEquip.push(allEquip[1])
            money -= allEquip[1].price
            alert('you got scissors, now lets work with those')
            mowLawn()
        } else {
            alert('youre broke')
            showStatus()
        }
        
    }

    const buyPushMow = (money) => {
        if (money > 24) {
            userEquip.push(allEquip[2])
            money -= allEquip[2].price
            alert('you got a push mower, now lets work with that')
            mowLawn()
        } else {
            alert('youre broke')
            showStatus()
        }
        
    }

    const buyPowerMow = (money) => {
        if (money > 249) {
            userEquip.push(allEquip[3])
            money -= allEquip[3].price
            alert('you got a battery powered mower, now lets work with that')
            mowLawn()
        } else {
            alert('youre broke')
            showStatus()
        }
        
    }

    const buyStudents = (money) => {
        if (money > 499) {
            userEquip.push(allEquip[4])
            money -= allEquip[4].price
            alert('you got a whole crew, now lets make money')
            mowLawn()
        } else {
            alert('youre broke')
            showStatus()
        }
    }

    const showStatus = () => {
        const toolnames = []
            for (let i = 0; i < userEquip.length; i++) {
                toolnames.push(userEquip[i].name)
            }
            if (money < 1000) {
                alert('you are using ' + userEquip[userEquip.length -1].name + ' You have these other tools ' +  toolnames  + ' and $' + money + ' !')
                statPrompt = prompt("would you like to buy new tools with you money? Please say yes/no")
                if (statPrompt === 'yes') {
                    selEquip(money)
                } else {
                    mowLawn()
                }
            } else {
                alert('Youre super rich and never have to work again')
            }

        }
        
        


    const mowLawn = () => {
            money += userEquip[userEquip.length -1].rate
            showStatus()
        } 

    const selEquip = (money) => {
        buyPrompt = prompt('Enter 1 to buy scrissor for $5, Enter 2 to buy push mover for $25, Enter 3 to buy power mover for $250, and Enter 4 to buy a crew of student for $500, enter 0 to keep working and save')
        if (buyPrompt == 1) {
            buyScissors(money)
        } else if (buyPrompt == 2) {
            buyPushMow(money)
        } else if (buyPrompt == 3) {
            buyPowerMow(money)
        } else if (buyPrompt == 4) {
            buyStudents(money)
        } else if (buyPrompt == 0) {
            mowLawn()
        } else {
            alert('sorry you entered a wrong value')
            showStatus()
        }
        
        
    }

mowLawn()

}

starter()


