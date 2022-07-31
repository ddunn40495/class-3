# PHP

## Setup

1. Double click /Applications/MAMP/MAMP or use Spotlight
1. Tell MAMP to where your files are
	- Click on Preferences
	- Click on Web Server
	- Click the folder icon next to "Document Root" and set up to do your work in today's student examples folder
	- Click OK
1. In your Document Root, create `index.php`.
1. Go to <http://localhost:8888/>
	- If no file is specified in the URL after the port, MAMP will look for `index.php`
1. Error logs are in /Applications/MAMP/logs/
	- use `tail -f php_error.log` to watch the end of the log file in case something breaks

## Basics

### Tags

Because this is all run on top of Apache, the initial assumption is that we're serving static HTML files

- We need `<?php ?>` tags to show that we're writing PHP
- Think of this as if Apache/PHP is server.js and we're writing EJS

Instead of `<%= %>` you have `<?= ?>` or `<?php echo ?>`

Instead of `<% %>` you have `<?php ?>`

### Comments

```php
// single line comment
```
```php
/*
multi
line
comment
*/
```

### Be ware the semi colon!
Let's make our first error together


```php
<?php
	 echo "hello"
?>
```

Go ahead and check the browser, now
```php
<?php
	 echo "hello "
	 echo "world"
?>
```

**404 error!!** in the browser? That's not helpful.

go ahead and run

- `tail -f php_error.log`
or
- `tail -f /Applications/MAMP/logs/php_error.log`

To see our error

![our first error](https://i.imgur.com/J6ZcTMh.png)

Ah ha! We forgot our semi-colons! Let's fix it.
```php
<?php
	 echo "hello ";
	 echo "world";
?>
```

### Declaring/Assigning variables

Use a $ before a variable name to tell php it is a variable.  Assignment is standard.

```php
<?php
	$my_first_var; //declare
	$my_first_var = 2; //assignment
	$my_second_var = 3; //declare and assign
	echo $my_first_var; //print this variable to the page
	echo $my_second_var; //print this variable to the page
?>
```

**Bonus** - research how you could get the two variables to print on separate 'lines' in the browser/html


**Note:** On variable names
![](https://i.imgur.com/2wWjLkH.png)

[reference]( https://softwareengineering.stackexchange.com/questions/196416/whats-the-dominant-naming-convention-for-variables-in-php-camelcase-or-undersc)
### Data Types

**Bonus** - find out what the difference is between `echo` and `var_dump()` and share it (summarize in your own words and provide a link to your resource) in the classroom channel!

PHP has the following basic data types:

Strings:

```php
<?php
$string = "beans";
var_dump($string);
?>
```

Integers:

```php
<?php
$integer = 5985;
var_dump($integer);
?>
```

Floats:

```php
<?php
$float = 10.365;
var_dump($float);
?>
```

Booleans:

```php
<?php
$bool = true;
var_dump($bool);
?>
```

Arrays:

```php
<?php
$suitcase = array("compass","candle","pyjamas","Tums");
var_dump($suitcase);
?>
```

Null:

```php
<?php
$x = null;
var_dump($x);
?>
```

### String Operators

Use a `.` or `.=` to combine strings.  Works just like `+` and `+=`

```php
<?php
	$first_part = "first part";
	$second_part = "second part";
	$concatenation = $first_part . " " . $second_part; //combine strings
	$concatenation .= ".  Appended value"; //append strings
	echo $concatenation;
?>
```

Some kinds of string interpolation work:

Sadness (single quotes):
```php
<?php
	$x = 5;
	echo 'I have $x single pizzas';
?>
```
Happiness (double quotes):
```php
<?php
	$x = 10;
	echo "I have $x double pizzas";
?>
```

### Functions

```php
<?php
// such old meme, still funny?
function dogeGreet($name) {
    return "Such wow, $name!";
}
echo dogeGreet("Matt"); // call the function
?>
```

### Arithmetic Operators

```php
<?php
	echo 1 + 1; //2
	echo 2 - 1; //1
	echo 3 * 2; //6
	echo 12 / 3; //4
	echo 5 % 2; //1 modulus
	echo 2 ** 3 //8 exponents
?>
```

### Increment/Decrement Operators

```php
<?php
	$x = 2;
	$x++; //increment by 1;
	echo $x;
	$x--; //decrement by 1;
	echo $x;
?>
```

### Assignment Operators

```php
<?php
	$my_var = 1;
	echo $my_var;
	$my_var += 3; //$my_var = $my_var + 3;
	echo $my_var;
	$my_var -= 2; //$my_var = $my_var - 2;
	echo $my_var;
	$my_var *= 2; //$my_var = $my_var * 2;
	echo $my_var;
	$my_var /= 2; //$my_var = $my_var / 2;
	echo $my_var;
?>
```

## Conditionals

### Formats

The traditional format works great:

```php
<?php
	$x = 1;
	if($x > 2){
		echo "x > 2";
	}
	elseif($x < 2){
		echo "x < 2";
	}
	else{
		echo "x == 2";
	}
?>
```

If you have html and don't want to have lines that look like `<?php } ?>`, you can use the following style of if/else:

```php
<?php $x = 1; ?>
<?php if($x > 2): ?>
	<div>x > 2</div>
<?php elseif($x < 2): ?>
	<div>x < 2</div>
<?php else: ?>
	<div>x == 2</div>
<?php endif; ?>
```

### Comparison Operators

Equality:

```php
<?php
	$x == $y; //equal
	$x === $y; //identical
	$x != $y; //not equal
	$x !== $y; //not identical
?>
```

Arithmetic:

```php
<?php
	$x < $y; //less than
	$x > $y; //greater than
	$x <= $y; //less than or equal to
	$x >= $y; //greater than or equal to
?>
```

### Logical Operators

```php
<?php
	true && false //AND operator
	true || false //OR operator
?>
```

## Loops

### While

```php
<?php
$x = 1;

while($x <= 5) {
    echo "The number is: $x <br/>";
    $x++;
}
?>
```

Alternative syntax:

```php
<ul>
	<?php $count = 10;?>
	<?php while($count <= 20): ?>
		<li>I now own <?= $count ?> plants</li>
		<?php $count++; ?>
	<?php endwhile; ?>
</ul>
```

### For

```php
<?php
for ($i = 0; $i < 10; $i++) {
    echo "The number plants I have over-wartered is: $i <br/>";
}
?>
```

Alternative syntax:

```php
<ul>
	<?php for ($j = 0; $j < 10; $j++): ?>
	    <li>The number days since I last watered my plants is: <?= $j ?></li>
	<?php endfor; ?>
</ul>
```

### Foreach

This is like `for of` in JS:

```php
<?php
$colors = array("red", "orange", "yellow", "green", "blue", "violet");

foreach ($colors as $key => $value) {
    echo "$key: $value <br/>";
}
?>
```

Alternative syntax:

```php
<?php $colors = array("red", "orange", "yellow", "green", "blue", "violet"); ?>
<?php foreach ($colors as $key => $value): ?>
	<?= $key ?>: <?=$value?><br/>
<?php endforeach ?>
```


## Arrays

### Indexed Arrays

Standard array functionality

```php
<?php
$likes = array("Bears", "Beets", "Battlestar Galactica");
$likes[4] = 'Beats'; //can be in indexes that don't yet exist
$likes[] = "Being last"; //pushes onto array
echo "I like " . $likes[0] . ", " . $likes[4] . " and " . $likes[5] . "." , "<br/>"; //access arrays normally
echo count($likes) , "<br/>"; //prints length of array
print_r($likes); //prints contents of array in nicer format than var_dump
?>
```

**Bonus** 
research how to:

- remove the last element of the array
- remove the first element of the array
- add to the beginning of the array
- add an item in the middle of the array
- remove an item in the middle of the array

### Associative Arrays (hashes)

These are very similar to JavaScript objects, but are accessed like arrays:

```php
<?php
    $cat2 = array(
        "age" => 6,
        "color" => 'orange tabby',
        "eyes" => "green"
    );
    print_r($cat2); echo "<br/>";
    $cat2["likesPlants"] = true;
    print_r($cat2); echo "<br/>";
    echo "Charlie has " . $cat2['color'] . " fur color";
?>
```


This works for associative arrays:

```php
<?php
$cat = array(
		"age" => 6,
		"color" => 'champagne mink',
		"eyes" => "green"
);
foreach ($cat as $key => $value) {
	echo "$key: $value <br/>";
}
?>
```

Alternative syntax:

```php
<?php
$cat2 = array(
		"age" => 6,
		"color" => 'orange tabby',
		"eyes" => "green"
);
?>
<?php foreach ($cat2 as $key => $value): ?>
	<?= $key ?>: <?=$value?> <br/>
<?php endforeach ?>
```

Access just one value:

```php
echo $cat2["color"];
```
