<?php

function checkPrime($num){
  for ($i=2; $i < sqrt($num); $i++) {
    if ($num % $i === 0) {
      // echo "Is not prime \n";
      return false;
    }
  }
  // echo "is prime \n";
  return true;
}

// checkPrime(3);
// checkPrime(20);

function printPrimes($limit){
  for ($i=0; $i <= $limit; $i++) {
    if (checkPrime($i)) {
      echo "This is a prime number: $i\n";
    }
  }
}

// printPrimes(100)

function euler($num) {
  $sum = 0;
  for ($i=0; $i <= $num; $i++) {
    if ($i % 3 === 0) {
      $sum += $i;
      echo "This is i: $i\n";
    } elseif ($i % 5 === 0) {
      $sum += $i;
      echo "This is i: $i\n";
    }
  }
  echo "This is the sum: $sum\n";
}

euler(1000)


 ?>
