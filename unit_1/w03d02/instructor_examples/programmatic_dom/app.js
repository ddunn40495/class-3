// const addH2 = () => {
//     const $h2 = $('<h2>').text('just getting started');
//     $('body').append($h2)
// }
//
// const changeH2 = () => {
//     $('h2').text('getting warmed up')
// }
//
// $(() => {
//
//     addH2();
//     changeH2();
//
// })

const randColorRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

const generateSquares = (numberOfSquares) => {
    for(let i = 1; i <= numberOfSquares; i++){
        const $square = $('<div>').addClass('square');

        const color = randColorRGB();
        console.log(color);

        $square.css('background-color', color);
        $square.text(i);
        $square.attr('id', 'square' + i)

        $('body').append($square);
    }
}


$(() => {
    generateSquares(1000);
})
