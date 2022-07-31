$( () => {

  if (typeof $ == 'undefined'){
    console.log('oops! I still have to link my jQuery properly!');
  } else {console.log('I did it! I linked jQuery and this js file properly!')};

  //Jquery
  const $div = $('<div>')
  console.log($div)
  $div.addClass('meat')
  const $h3 = $('<h3>').text( 'Ostrich' );
  $div.append($h3)

  const $divB = $('<div>')
  $divB.addClass('dairy')
  const $h3a = $('<h3>').text( 'milk' );
  $divB.append($h3a)


  //Vanillia
  // const div = document.createElement('div')
  // console.log(div)


  //select an element 
  const $body = $('body')
  console.log($body)  

  //append to the body
  $body.append($div)
  $body.append($divB)

  //get all divs
  const $divs = $('div')
  // console.log($divs)

  // $divs.hide('slow')

  // $('.meat').remove()
  const $image = $('<img>') 
  $image.attr('src', 'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D')
  $body.prepend($image)


  console.log($divs.eq(2).children())

  $divs.eq(2).children().text( 'Kohlrabi');
  
});
