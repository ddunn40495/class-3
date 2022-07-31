// setTimeout(
//     ()=>{
//         console.log('hi');
//     },
//     2000
// );
//
// // setInterval(
// //     () => {
// //         console.log('hi');
// //     },
// //     2000
// // )
//
// const iceCreams = ['Vanilla', 'Chocolate', 'Strawberry'];
//
// iceCreams.forEach(
//     (currentElement) => {
//         console.log(currentElement);
//     }
// );

// const badGuy = (action) => {
//     console.log("I'm going to do something...");
//     action();
//     console.log("I'm done");
//     console.log("-----");
// }
//
// badGuy(
//     () => {
//         console.log("Steal a safe");
//     }
// );
//
// badGuy(
//     () => {
//         console.log("Intimidate a businessman");
//     }
// );

const iceCreams = ['Vanilla', 'Chocolate', 'Strawberry'];
// iceCreams.forEach(
//     (currentElement) => {
//         console.log(currentElement);
//     }
// );

const updatedIceCreams = iceCreams.map(
    (flavor) => {
        return flavor + " Ice Cream"
    }
)

console.log(updatedIceCreams);
