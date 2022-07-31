console.log('corgi carousel connected to app.js!');

$(() => {
  // counter variable
  let currentImgIndex = 0;
  // length variable
  const numOfImages = $('.carousel-images').children().length - 1;

  // NEXT BUTTON
  // when we click on the next button
  $('.next').on('click', () => {
    // hide the current image
    $('.carousel-images').children().eq(currentImgIndex).hide();
    // if the current image index is less than the number of images we have
    if (currentImgIndex < numOfImages) {
      // increment the image index
      currentImgIndex++;
    } else {
      // otherwise, set the image index back to 0
      currentImgIndex = 0
    }
    // show the next image
    $('.carousel-images').children().eq(currentImgIndex).show();
  })

  // PREVIOUS BUTTON
  $('.previous').on('click', () => {
    // hide the current image
    $('.carousel-images').children().eq(currentImgIndex).hide();
    // if the image index is greater than 0
    if (currentImgIndex > 0) {
      // decrement index
      currentImgIndex--;
    } else {
      // otherwise set currentImgIndex equal to the last image index
      currentImgIndex = numOfImages;
    }
    // show the previous image
    $('.carousel-images').children().eq(currentImgIndex).show();
  })
})
