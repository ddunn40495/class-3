$(() => {

    let needsArray = []
    const $listLeft = $('<ul>')
    $('#list-left-header').append($listLeft)
    const $listRight = $('<ul>')
    $('#list-right-header').append($listRight)




    const render = () => {
        const newNeed = needsArray.length -1
        const $li = $(`<li>${needsArray[newNeed]}</li>`).addClass('need-item no-display')
        const $butt = $('<button>BROUGHT</button>')
        $li.append($butt)
        $butt.on('click', () => {
            console.log('button')
            $li.remove()
            $listRight.append($li)
            $butt.text('delete')
            $butt.addClass('delete')
            $('.delete').on('click', () => {
                console.log('delete')
                $(event.target).parent().remove()
            })
        })
        $listLeft.append($li)

    }

	$('#submit').on('click', () => {
        event.preventDefault()
        const inputVal = $('#input-box').val()
        needsArray.push(inputVal)
        // $('#input-box').val('')
        $("#input-box").empty('')
        render()
        
        
    })





















  })