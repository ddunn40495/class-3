// // open frezzer 
// //check frezzer for waffles 

// //see how many waffles are in box
// //if two or more waffles are in box put them in toaster


// // const frezzerArray = ['ice cream', 'waffles', 'pizza']
// // frezzerArray.includes('waffles')


const randomNum = () => {
    return Math.floor(Math.random() * 12 + 1)
}

const waffles = randomNum()

const makeWaffles = () => {
    const warmSryup = (waffles) => {
        if (waffles > 8) {
            return 60
        } else if ( waffles > 4) {
            return 45
        } else if ( waffles >= 1) {
            return 30 
        } else  {
            console.log('nope')
        }
    
    
    }
    
    
    
    const warmWaffles = (waffles) => {
        if (waffles > 10) {
            return 240
        } else if ( waffles > 8) {
            return 180
        } else if ( waffles >= 6) {
            return 120
        } else if ( waffles > 4) {
            return 90
        } else if ( waffles > 2) {
            return 45
        } else  {
            console.log('nope')
        }
    }
    

    console.log('it takes ' + warmWaffles(waffles) + ' secs' + ' to warm up ' +  waffles + ' waffles ' + ' and '+ warmSryup(waffles) + ' sec' + ' to warm up the syrup')
    
}

makeWaffles()




//go to cabnit and check for srurup
//grab syrup

// go to drawer
// open drawer to check for fork and knive
// grab fork and knife
// 
