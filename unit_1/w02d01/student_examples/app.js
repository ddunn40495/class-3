const adventurer = {
	name: 'Timothy',
	hitpoints: 10,
	belongings: ["sword", "potion", "Tums"],
	companion: {
		name: "Velma",
		type: "Bat",
		companion: {
			name: "Tim",
			type: "Parasite",
			belongings: ["SCUBA tank", "Rogan josh", "health insurance"]
		}  
	}
}
// console.log(adventurer.companion.companion.belongings[2])

const foo = {
    someArray:[1,2,3]
};

for(let element of foo.someArray){
    // console.log(element);
}

//same as above
for (let i = 0; i < foo.someArray.length; i++) {
    // console.log(foo.someArray[i]);
}


const foo = [
	["0,0", "0,1", "0,2"],
    ["1,0", "1,1", "1,2"],
    ["2,0", "2,1", "2,2"]
]

for (let row of object) {
	for (let element of row) {
		console.log(element)
	}
}

//same as above
for (let i = 0; i < foo.length; i++) {
    for (let j = 0; j < foo[i].length; j++) {
        console.log(foo[i][j]);
    }
}

const summonServant = ()=>{
    return {
        bagOfStuff: ['clothes', 'food', 'keys']
    }
};

console.log(summonServant().bagOfStuff[1]);

const summonServant = ()=>{
    return {
        washFeet:()=>{
            console.log('washing...');
        }
    }
};

summonServant().washFeet();



const wizard = {
    summonImp:()=>{
        return {
            color: 'black'
        }
    }
};

console.log(wizard.summonImp().color);

const wizard = {
    generateSpell:()=>{
        return ()=>{
            console.log('fireball')
        }
    }
}
wizard.generateSpell()();