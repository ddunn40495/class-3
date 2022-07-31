// console.log('hello!');


let apples;
let money;
// game initialized

const buyApple = () => {
    apples++;
    money--;
    showStatus();
    askForAction();
}

const eatApple = () => {
    apples--;
    showStatus();
    askForAction();
}

const start = () => {
    apples = 0;
    money = 20;
    showStatus();
    askForAction();
}

const showStatus = () => {
    alert('You have ' + apples + ' apples and $' + money);
}

const askForAction = () => {
    const choice = prompt("What do you want to do?", "buy apple / eat apple / restart");

    if(choice === 'eat apple'){
        eatApple();
    } else if(choice === 'buy apple'){
        buyApple();
    } else if(choice === 'restart'){
        start();
    }
}

start();


// let action = null;
//
// while(action !== 'stop'){
//     action = prompt('what do you want to do?', 'your action')
// }
