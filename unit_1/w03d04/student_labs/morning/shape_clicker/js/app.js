$(() => {


    const array = ['triangle','circle', 'square', 'triangle-down', 'octagon', 'heart']

    let i = 0
console.log('shape clicker js file is connected');



$('.triangle').on('click', event => {
    if (i < 6) {
        i++
        $(event.currentTarget).attr('class', array[i])
    } else {
        i = 0
        $(event.currentTarget).attr('class', array[i])
    }
    

  })


})