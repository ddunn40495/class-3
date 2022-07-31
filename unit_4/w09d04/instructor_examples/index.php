<?php
// single line comment

/*
multi
line comment
*/
// echo "hello";
// echo " world";


  // $my_first_var; //declare
  // $my_second_var = 2; // declare and assign
  // $my_first_var = 3; // reassign
  // echo $my_first_var;
  // echo $my_second_var;

  // $string = "beans";
  // var_dump($string);
  // echo $string;

  // $integer = 5985;
  // var_dump($integer);
  //
  // $float = 10.365;
  // var_dump($float);

  // $bool = true;
  // var_dump($bool);

  // $suitcase = array("compass", "candle", "pyjamas", "Tums");
  // var_dump($suitcase);

  // $x = null;
  // var_dump($x);

  // $first_part = "first part";
  // $second_part = "second part";
  // $concatenation = $first_part . " "  . $second_part;
  // $concatenation .= ". Appended value";
  // echo $concatenation;

  // does not interpolate
  // $x = 5;
  // echo 'I have $x single pizzas'

  // will interpolate
  // $x = 10;
  // echo "I have $x double pizzas";

?>

<?php
 function dogeGreet($name) {
   $test = "hi";
   return "Such wow, $name";
 }

 // echo dogeGreet("Matt");

?>

<?php
  // echo  2 ** 3;
 ?>

<?php
  // $x = 2;
  // $x++;
  // $x--;
  // echo $x;
 ?>

<?php
// echo "hello"  . "<br />";
//   $my_var = 1;
//   $my_var += 3;
//   $my_var -= 2;
//   $my_var *= 2;
//   $my_var /= 2;
//   echo $my_var;


 ?>

<?php
  // $x = 2;
  // if($x > 2) {
  //   echo "x > 2";
  // } elseif ($x < 2){
  //   echo "x < 2";
  // } else {
  //   echo " x == 2";
  // }
?>

<!-- <?php $x = 2; ?>
<?php if ($x > 2) : ?>
  <h1> x > 2 </h1>
<?php elseif ($x < 2) : ?>
  <div>x < 2</div>
<?php else : ?>
  <p>x is equal to 2</p>
<?php endif; ?> -->


<?php
// $x = 2;
// $y = 4;
//
// $x > $y;
// $x < $y;
// $x <= $y;
// $x >= $y;

 ?>

<?php

  // true && false // AND operator
  // true || false // OR operator
 ?>


<?php
 // $x = 1;
 //
 // while ($x <= 5) {
 //   echo "The number is $x <br />";
 //   $x++;
 // }



 ?>

<!-- <ul>
<?php  $count = 10 ?>
<?php while($count <=20) : ?>
  <li>I now own <?= $count ?> plants</li>
  <?php $count++; ?>
<?php endwhile; ?>
</ul> -->


<ul>
 <!-- <?php for ($j = 0; $j < 10; $j++) : ?>
    <li>The number of days since I last watered my plants is <?= $j ?></li>
   <?php endfor; ?>  -->
</ul>

<?php
 // for ($i=0; $i < 10 ; $i++) {
 //   echo "The number of plants I have overwatered is : $i <br/>";
 //   $q = 'hello';
 // }
 //
 // echo $q;
 ?>

<?php
// $colors = array("red", "orange", "yellow", "green", "blue", "violet");
//
// foreach ($colors as $key => $value) {
//   echo "$key : $value <br />";
// }
 ?>

<!-- <?php $colors = array("red", "orange", "yellow", "green", "blue", "violet"); ?>
<?php foreach ($colors as $key => $value) : ?>
  <?= $key ?> <?= $value ?><br/>
<?php endforeach; ?> -->

<?php
 // $likes = ["bears", "beets", "Battlestar Galactica"];
 // $likes[4] = 'Beats';
 // $likes[] = "Being last";
 // // Array
 // echo $likes;
 // echo  "<br />";
 // // type, count, type of each item in the array, and actual value
 // var_dump ($likes);
 // echo "<br />";
 // echo "I like " . $likes[0] . "," . $likes[4] . ", and " . $likes[2], "<br />";
 // echo count($likes), "<br/> ";
 // // shows more details than echo, but not as many as var_dump
 // print_r($likes);

 ?>

<?php
  $cat2 = array(
    "age" => 6,
    "color" => 'orange tabby',
    "eyes" => 'green'
  );
  // print_r($cat2); echo "<br />";
  // foreach ($cat2 as $key => $value) {
  //   echo "$key: $value <br/>";
  // }
 echo $cat2["color"]
 ?>

<!-- <?php foreach($cat2 as $key => $value): ?>
  <?= $key ?> : <?=$value ?> <br/>
<?php endforeach; ?> -->
