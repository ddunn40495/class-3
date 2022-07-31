$(() => {




    // put jQuery in here

const $container = $('#container')
console.log($container)

const $h1 = $('<h1>Whats Up</h1>')


$container.append($h1)


const $h2 = $('<h2>Daniel</h2>')
const $h3 = $('<h3>Hufflepuff</h3>')
const $h4 = $("<h4 class='dog'>Lacey</h4>")
const $h4wand = $('<h4>bigest wand</h4>')



$container.append($h2, $h3, $h4, $h4wand)

const $ul = $("<ul storage='trunk'></ul>")
$ul.attr('storage', 'trunk')
const $list1 = $('<li>butter beer</li>')
const $list2 = $('<li>invisibility cloak</li>')
const $list3 = $('<li>magic map</li>')
const $list4 = $('<li>time turner </li>')
const $list5 = $('<li>leash</li>')
const $list6 = $('<li>Bertie Botts Every Flavor Jelly Beans </li>')

$list2.addClass('secret')
$list3.addClass('secret')
$list4.addClass('secret')

$container.append($ul)
$ul.append($list1, $list2, $list3, $list4, $list5, $list6)

const $h5 = $('<h5>Spring 2017</h5>')
const $table = $('<table>')
const $thread = $('<thread>')
const $tbody =$('<tboody>')
const $row1 = $('<tr>')
const $head1 = $('<th>Day</th>')
const $head2 = $('<th>Classes</th>')
const $row2 = $('<tr>')
const $row3 = $('<tr>')
const $row4 = $('<tr>')
const $row5 = $('<tr>')
const $row6 = $('<tr>')

const $td1 = $('<td>Monday</td>')
const $td2 = $('<td>Herbology</td>')
const $td3 = $('<td>Tuesday</td>')
const $td4 = $('<td>Divination</td>')
const $td5 = $('<td>Wednesday</td>')
const $td6 = $('<td>History of Magic</td>')
const $td7 = $('<td>Thursday</td>')
const $td8 = $('<td>Charms</td>')
const $td9 = $('<td>Friday</td>')
const $td10 = $('<td>Potions</td>')

$container.append($h5, $table)
$table.append($thread, $tbody)
$thread.append($row1)

$row1.append($head1, $head2)
$row2.append($td1, $td2)
$row3.append($td3, $td4)

$row4.append($td5, $td6)
$row5.append($td7, $td8)
$row6.append($td9, $td10)
$tbody.append($row2, $row3, $row4, $row5, $row6)


$h4wand.remove()
$list1.remove()

const $newWand = $('<h4>baby wand</h4>')
$ul.prepend($newWand)



});