// console.log('Oh hey, I remember something like this')

$(() => {
  // write our jQuery code
  // use jQuery to remove the class of card-back
  const $card = $('.card').on('click', (event) => {
    // console.log($(event.currentTarget))
    $(event.currentTarget).toggleClass('card-back')
  })
})
