$(() => {

  const list = []

  const render = () => {
    const lastIndexOfList = list.length - 1
    const $newLi = $('<li>').text(list[lastIndexOfList])
    $('ul').append($newLi)
    $newLi.on('click', event => {
      $(event.currentTarget).css('text-decoration', 'line-through')
    })
  }



  $('form').on('submit', event => {
    event.preventDefault()
    const inputValue = $('#todo').val()
    console.log(inputValue)
    list.push(inputValue)
    $(event.currentTarget).trigger('reset')
    render()
  })

















})
