
$( () => {
    //jQuery code goes here

    console.log('corgi carousel connected to app.js!');

let currentImgIndex = 0

$('.next').on('click', () => {
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
    currentImgIndex++
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')

    if(currentImgIndex < numOfImages) {
        currentImgIndex ++
       } else {
        currentImgIndex = 0
       }

})


$('.previous').on('click', () => {
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')

    if(currentImgIndex > 0) {
        currentImgIndex --
      } else {
        currentImgIndex = numOfImages
      }



   }


  });