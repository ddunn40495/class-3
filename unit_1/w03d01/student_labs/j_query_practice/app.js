$( () => {

const $body = $('body')
const $divTop = $('<div>').addClass('container')
const $h1 = $('<h1>Trois couleurs: rouge, blanc, et blue</h1>')
const $div1 = $('<div>').addClass('couleur red')
const $div2 = $('<div>').addClass('couleur white')
const $div3 = $('<div>').addClass('couleur blue')


$body.append($divTop, $h1, $div1, $div2, $div3)


const $divBotttom = $('<div>').attr('id', 'bottom-container')
const $h1bottom = $('<h1>Lumpy Space Princess</h1>')
const $divImg = $('<div>').attr('id', 'img-container')
const $pic = $("<img src='https://images-na.ssl-images-amazon.com/images/I/31%2Bzs3goeXL._AC_.jpg'>")

$divBotttom.append($h1bottom)
$divImg.append($pic)

$body.append($divBotttom, $divImg)

// $body.append($divTop, $h1, $div1, $div2, $div3)



















});