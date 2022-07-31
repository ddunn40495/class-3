$(() => {
  $('form').on('submit', addToBuy)
})

// addToBuy function
const addToBuy = () => {
  event.preventDefault()
  const $inputBox = $('#input-box')
  const toBuy = $inputBox.val()
  const $div = $('<div>')
    .addClass('to-buy-item')
    .html('<h3>' + toBuy + '</h3>')

  $('.to-buy-list').append($div)

  const $button = $('<button>')
    .text('Complete')
    .on('click', moveToBuy)
    .appendTo($div)
}

//moveToBuy function
const moveToBuy = () => {
  const $toDoDiv = $(event.currentTarget).parent()
  // console.log($toDoDiv)
  $toDoDiv
    .removeClass('to-buy-item')
    .addClass('bought-item')
    .appendTo($('.bought'))
    .children()
    .eq(1)
    .text('REMOVE')
    .on('click', removeBought)
}

// removeBought function
const removeBought = () => {
  $(event.currentTarget)
    .parent()
    .remove()
}
