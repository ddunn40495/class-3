console.log('app.js')

$(() => {
  // $('.outside').on('click', () => {
  //   console.log('OUTSIDE is clicked')
  // })
  
  // $('.inside').on('click', () => {
  //   console.log('INSIDE is clicked')
  // })

  // $('body').on('click', () => {
  //   console.log('BODY is clicked')
  // })

  $('.outside').on('click', event => {
    console.log('OUTSIDE target is: ', $(event.target))
    console.log('OUTSIDE currentTarget is: ', $(event.currentTarget))
  })
  
  $('.inside').on('click', event => {
    console.log('INSIDE target is: ', $(event.target))
    console.log('INSIDE currentTarget is: ', $(event.currentTarget))
  })
  
  $('body').on('click', event => {
    console.log('BODY target is: ', $(event.target))
    console.log('Body currentTarget is: ', $(event.currentTarget))
  })


  // $('.outside').on('click', event => {
  //   $('.outside').css('background-color', 'black')
  // })

  // $('.outside').on('click', event => {
  //   $(event.currentTarget).css('background-color', 'black')
  // })

  $('.outside').on('click', event => {
    $(event.target).css('background-color', 'black')
  })

  $('.inside').on('click', event => {
    console.log('INSIDE target is: ', $(event.target))
    console.log('INSIDE currentTarget is: ', $(event.currentTarget))
    event.stopPropagation()
  })
})
