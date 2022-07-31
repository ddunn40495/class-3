

Title: PHP II - Exploring Methods<br>
Type: Exploration, Reading Documentation & Presentation<br>
Duration: 1.5 hrs<br>
Creator: Karolin Rafalski<br>
Topics: PHP  methods<br>
<hr>

# Explore PHP's Methods

### Lesson Objectives
_During this lesson, students will be:_
- Use the php docs to find methods
- Use and explain php methods



## Let's run PHP in Terminal Today
- Running php in terminal is easy!
- just type `php myfile.php`

## Would you like input?
- you can get input from the user via terminal using the function `fgets()`. However, `fgets()` will also take any unnessesarry whitespace/carriage returns, so we need to trim it so we'll wrap that function in another function `trim()` : `trim(fgets())`.

Finally we have to pass in `STDIN` (standard input), which will be the user input

Let's try it

```php
<?php

  $response = trim(fgets( STDIN ));
  echo "You typed $response";
  if ($response === "s") {
    echo "You tped something!!!!"
  }

?>
```


<br>
<hr>

![explorers](https://www.thewrap.com/wp-content/uploads/2016/05/explorersmovie.jpg)

This morning you will each get a method to explore. Your job is to look in the PHP documentation to read about the method, come up with an explanation of what it is, and show an example of it in use. If you can, try to think of a (simple) real world case where you might want to use that method - ie, summing the numbers so people could see a total price in their shopping cart.

You'll have 10-15 minutes to research and prepare. You will then take turns coming to the front and presenting your findings to the class. When you are not presenting, it's your job to listen, learn, take notes, and ask questions.

[Google Sheet with assignments](https://docs.google.com/spreadsheets/d/1s09r89lmmDE5-fxg30mQ3r9Xolz0yFdVTQbV_XAxhQE/edit#gid=0)

[PHP Manual](https://www.php.net/manual/en/)

Example string: `"we researched PHP methods."`


Example array:

```php
$hoyas = array (
  "Hindu Rope Vine",
  "Carnosa",
  "Krimson Queen",
  "Krimson Princess",
  "Black Dragon",
  "Linearis",
  "Sunrise",
  "Bella",
  "Royal Hawaiian",
  "Kerrii",
  "Curtisii",
  "Serpens"
  "Retusa"
);
```


Example associative array/hash:

```php
$computer = array (
  "maker" => "IBM",
  "model" => "Tandy 1000",
  "year" => 1983,
  "ram" => "128KB",
  "processorSpeed" => "4.7MHz",
  "drive" => "floppy 2 x 5.25",
  "extraFeatures" => ["reset button" , "volume knob"],
  "price" => 2953,
  "joystick" => "included",
  "weight" => "23lbs"
);
```



## Post your notes and example in Slack

When it's your turn to present, post your topic, notes, and comment in Slack so that others can put it into their notes.

### Formatting for Slack:
![formatting](https://i.imgur.com/R1J1OOg.png)

### Example

![slack](https://i.imgur.com/jd2Xg3y.png)
