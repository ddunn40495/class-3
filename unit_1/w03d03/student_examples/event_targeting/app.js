console.log('Oh hey, I remember something like this')


$(() => {


  const handOfCards = []

  
    const $card = $('.card').on('click', event => {
      $(event.currentTarget).toggleClass('card-back')
      playHand()
    })
  
  
  const playHand = () => {
    if (handOfCards.length === 2) {
      console.log('checking', handOfCards)
    } else {
      console.log('adding to', handOfCards)
      // need to push something to handOfCards
    }
  }

























  })