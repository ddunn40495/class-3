<?php

function validDate($date){
  $exp = "/[01]\d(-?|\/)\d\d(-?|\/)\d{2,4}/";
  if (preg_match($exp, $date)) {
    return true;
  }
  return false;
}

var_dump(validDate('12-12-2112'));
var_dump(validDate('12122112'));
var_dump(validDate('12/12/2112'));
var_dump(validDate('12/12/20'));
 ?>
