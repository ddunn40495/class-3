// if (typeof $ == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {console.log('I did it! I linked jQuery and this js file properly!')};

// jQuery

// vanilla
// const div = document.createElement('div')
// console.log(div)

// select an element

// document on ready/ document on load

$(() => {
  // create an element
  const $div = $('<div>')
  $div.addClass('meat')
  // console.log($div)
  const $h3 = $('<h3>')
  $h3.text('Ostrich')
  $div.append($h3)

  // another div
  const $div2 = $('<div>')
  $div2.addClass('fruit')

  const $h32 = $('<h3>').text('Banana')
  // $div2.text('Banana')
  $div2.append($h32)
  // jQuery code goes in here
  const $body = $('body')
  // console.log($body)

  $body.append($div)
  $body.append($div2)

  const $divs = $('div')
  // console.log($divs)

  // $divs.hide('slow')

  $('.meat').remove()

  const $img = $('<img>')
  $img
    .attr(
      'src',
      'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
    )
    .attr('alt', 'an image of fine food')

  $body.prepend($img)
  console.log($divs)

  // cannot select an element using square brackets because it will be a vanilla DOM object
  // $divs[2].children()
  // .text('Kohlrabi')

  // must use .eq() to select from a collection
  console.log(
    $divs
      .eq(2)
      .children()
      .text('Kohlrabi')
  )

  // css on the fly

  $body.css('border', '2em solid black')
})
