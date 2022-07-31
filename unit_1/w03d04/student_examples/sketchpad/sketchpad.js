$(()=>{


    const changeColor = (event) => {
		$(event.target).addClass('pink');
    }
    
    const makeSquare = (divs) => {
        for (let i = 0; i < divs; i++) {
            const $div = $('<div>')
            $div.addClass('square')
            $('div').on('mouseover', changeColor);
            $('body').append($div)
            
        }
    
    }
    

    $('#inputButton').on('click', () => {
        const val = $('#inputBox').val()
        makeSquare(val)
    })




    



















});
