// console.log($);
// console.log('modal practice app.js is linked to this index.html');

$( () => {

  // GRABBING ALL ELEMENTS
  // open button
  const $openBtn = $('#openModal');
  // modal
  const $modal = $('#modal');
  // close
  const $closeBtn = $('#close');

  // EVENT HANDLERS
  const openModal = () => {
    $modal.css('display', 'block');
    // $modal.show();
  }

  const closeModal = () => {
    $modal.css('display', 'none');
    // $modal.hide();
  }

  // EVENT LISTENERS
  $openBtn.on('click', openModal);
  $closeBtn.on('click', closeModal);

  setTimeout(openModal, 5000);
});
