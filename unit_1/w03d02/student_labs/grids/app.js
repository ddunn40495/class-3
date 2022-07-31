$(() => {
    const $body = $('body')
    const $container = $('<div>')
    $container.addClass('container')
    $body.append($container)

    const checkerBoard = () => {
        for (let i = 1; i <= 140; i++) {
            const $miniSquare = $('<div>')
            $container.append($miniSquare)
                    if (i % 2 === 0 ) {
                        $miniSquare.addClass('black')
                    } else {
                        $miniSquare.addClass('red')
                    }
                    
            }
    }


checkerBoard()



});