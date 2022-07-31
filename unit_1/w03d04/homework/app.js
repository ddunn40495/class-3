$(() => {
   

    let array = ['x', 'o']

    let i = 0
    const $top = ($('.top-row-win'))


    const restart = () => {
        $("div").removeClass( "o" )
        $("div").removeClass( "x" )
        $("div").removeClass( "winner" )

    }
    const winAlerto = () => {
        alert("o won")
        restart()
    }
    const winAlertx = () => {
        alert("x won")
        restart()
    }

 const topCheckerx = () => {
    if ($('#1').hasClass('x') && $('#2').hasClass('x') && $('#3').hasClass('x')) {
        $(event.currentTarget).attr('class', 'tac-box top-row-win right-row-win winner')
        setTimeout(winAlertx, 2000)
    } 
    else {
        
    }
 }

 const topCheckero = () => {
     if ($('#1').hasClass('o') && $('#2').hasClass('o') && $('#3').hasClass('o')) {
        $(event.currentTarget).attr('class', 'tac-box top-row-win right-row-win winner')
        setTimeout(winAlerto, 2000)
     } else {
         
     }
 }
    const bottomCheckero = () => {
        if ($('#7').hasClass('o') && $('#8').hasClass('o') && $('#9').hasClass('o')) {
            $(event.currentTarget).attr('class', 'tac-box top-row-win right-row-win winner')
        setTimeout(winAlerto, 2000)
        } else {
            
        }
    }

    const bottomCheckerx = () => {
        if ($('#7').hasClass('x') && $('#8').hasClass('x') && $('#9').hasClass('x')) {
            $(event.currentTarget).attr('class', 'tac-box top-row-win right-row-win winner')
        setTimeout(winAlertx, 2000)
        } else {
            
        }
    }

    const leftCheckero = () => {
        if ($('#1').hasClass('o') && $('#4').hasClass('o') && $('#7').hasClass('o')) {
            $(event.currentTarget).attr('class', 'tac-box top-row-win right-row-win winner')
        setTimeout(winAlerto, 2000)
        } else {
            
        }
    }
    const leftCheckerx = () => {
        if ($('#1').hasClass('x') && $('#4').hasClass('x') && $('#7').hasClass('x')) {
            $(event.currentTarget).attr('class', 'tac-box top-row-win right-row-win winner')
        setTimeout(winAlertx, 2000)
        } else {
            
        }
    }

    const rightCheckero = () => {
        if ($('#3').hasClass('o') && $('#6').hasClass('o') && $('#9').hasClass('o')) {
            $(event.currentTarget).attr('class', 'tac-box top-row-win right-row-win winner')
        setTimeout(winAlerto, 2000)
        } else {
            
        }
    }

    const rightCheckerx = () => {
        if ($('#3').hasClass('x') && $('#6').hasClass('x') && $('#9').hasClass('x')) {
            $(event.currentTarget).attr('class', 'tac-box top-row-win right-row-win winner')
        setTimeout(winAlertx, 2000)
        } else {
            
        }
    }

    const aSlantCheckero = () => {
        if ($('#3').hasClass('o') && $('#5').hasClass('o') && $('#7').hasClass('o')) {
            $(event.currentTarget).attr('class', 'tac-box top-row-win right-row-win winner')
        setTimeout(winAlerto, 2000)
        } else {
            
        }
    }

    const aSlantCheckerx = () => {
        if ($('#3').hasClass('x') && $('#5').hasClass('x') && $('#7').hasClass('x')) {
            $(event.currentTarget).attr('class', 'tac-box top-row-win right-row-win winner')
        setTimeout(winAlertx, 2000)
        } else {
            
        }
    }

    const bSlantCheckero = () => {
        if ($('#1').hasClass('o') && $('#5').hasClass('o') && $('#9').hasClass('o')) {
            $(event.currentTarget).attr('class', 'tac-box top-row-win right-row-win winner')
        setTimeout(winAlerto, 2000)
        } else {
            
        }
    }

    const bSlantCheckerx = () => {
        if ($('#1').hasClass('x') && $('#5').hasClass('x') && $('#9').hasClass('x')) {
            $(event.currentTarget).attr('class', 'tac-box top-row-win right-row-win winner')
        setTimeout(winAlertx, 2000)
        } else {
            
        }
    }

    const middleCheckerx = () => {
        if ($('#2').hasClass('x') && $('#5').hasClass('x') && $('#8').hasClass('x'))  {
            $(event.currentTarget).attr('class', 'tac-box top-row-win right-row-win winner')
        setTimeout(winAlertx, 2000)
        } else {
            
        }
    }

    const middleCheckero = () => {
        if ($('#2').hasClass('o') && $('#5').hasClass('o') && $('#8').hasClass('o')) {
            $(event.currentTarget).attr('class', 'tac-box top-row-win right-row-win winner')
        setTimeout(winAlertx, 2000)
        } else {
            
        }
    }
    $('.tac-box').on('click', event => {
        i++
        if (i < 2) {
            $(event.currentTarget).addClass(array[i])
            topCheckerx()
            topCheckero()
            leftCheckerx()
            leftCheckero()
            rightCheckerx()
            rightCheckero()
            bottomCheckerx()
            bottomCheckero()
            aSlantCheckerx()
            aSlantCheckero()
            bSlantCheckerx()
            bSlantCheckero()
            middleCheckerx()
            middleCheckero()


        } else {
            i = 0
            $(event.currentTarget).addClass(array[i])
            topCheckerx()
            topCheckero()
            leftCheckerx()
            leftCheckero()
            rightCheckerx()
            rightCheckero()
            bottomCheckerx()
            bottomCheckero()
            aSlantCheckerx()
            aSlantCheckero()
            bSlantCheckerx()
            bSlantCheckero()
            middleCheckerx()
            middleCheckero()
        }
    
      })

    $('#restart').on('click', () => {
        console.log('restart hit')
        $("div").removeClass( "x o winner" )
    })
















  })