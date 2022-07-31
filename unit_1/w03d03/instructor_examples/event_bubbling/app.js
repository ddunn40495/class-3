console.log('app.js')

$(() => {
  $('.outside').on('click', event => {
    console.log('OUTSIDE target is: ', $(event.target))
    console.log('OUTSIDE currentTarget is:', $(event.currentTarget))
  })
  // $('.outside').on('click', (event) => {
  //   // doesn't matter where, this will always change blue to black background
  //   $(event.currentTarget).css('background-color', 'black')
  //   // this one will change the background of the element that was clicked
  //   $(event.target).css('background-color', 'black')
  // })

  $('.inside').on('click',(event) => {
    console.log('INSIDE target is:', $(event.target))
    console.log('INSIDE currentTarget is:', $(event.currentTarget))
    // stop event bubbling by calling event.stopPropagation
    // event.stopPropagation()
    // an aternative to stopPropagation is to return false
    return false
  })

})

// CODE GRAVEYARD

// Add jQuery code here
// $('.outside').on('click', () => {
//   console.log('OUTSIDE is clicked')
// })
// $('.inside').on('click', () => {
//   console.log('INSIDE is clicked')
// })
// $('body').on('click', () => {
//   console.log('BODY is clicked')
// })
