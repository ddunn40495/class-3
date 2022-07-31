// const stack = [];
// stack.push(1);
// stack.push(9);
// stack.push(5);
// console.log(stack);
// stack.pop();
// console.log(stack);
//
// const queue = [];
// queue.push(1);
// queue.push(5);
// queue.push(9);
// console.log(queue);
// queue.shift();
// console.log(queue);

// const head = {
//     name:'Matt'
// }
//
// const person2 = {
//     name:'Bob'
// }
//
// const person3 = {
//     name:'Sally'
// }
//
// const tail = {
//     name:'Zagthorp'
// }
//
// const find = (node, value) => {
//     if(node.name === value){
//         return true;
//     } else {
//         return find(node.next, value);
//     }
// }
//
//
// head.next = person2;
// person2.next = person3;
// person3.next = tail;
//
// console.log(find(head, 'Bob'));
const contents = [];

const hash = (value) => {
    let result = 0;
    for(let i = 0; i < value.length; i++){
        result += value.charCodeAt(i);
    }
    return result;
}

const person1 = {
    name:'Matt',
    age: 39
}

const person2 = {
    name:'Bob',
    age: 12
}

const insert = (newPerson) => {
    const index = hash(newPerson.name);
    console.log(index);
    contents[index] = newPerson;
    console.log(contents);
}

insert(person1);
insert(person2);


console.log(hash('Matt'));
console.log(hash('ttaM'));
