# Classes

## Learning Objectives
1. Review what a class is
1. Review the benefits of a class
1. Make a new class
1. Instantiate a class
1. add properties
1. understand the basic difference between public and private members
1. use a constructor method to instantiate values
1. demonstrate protected members and describe their purpose
1. demonstrate static members and describe their purpose
1. Create a factory
1. EXTRA: Inheritance
1. EXTRA: Protected members

## Running our code in Terminal
Let's run our code in terminal - formatting of objects will be much nicer/easier to read.

Just type `php filename.php` in terminal!

## Make our own objects

We covered associated arrays. While they are similar in a lot of ways to objects, objects (which are made with classes), provide us with the benefits of OOP (Object Oriented Programming).

We can make our own objects. They will be very similar to the JavaScript ones we are used to, the ones that have properties and methods that can be accessed and altered with dot notation - the syntax will be different. We'll also find that PHP classes have more options in the design of our objects.


## Object Basics - Properties

Let's make a template for our objects. The template is called a class. Remember how in JavaScript we used classes to create objects?

It's similar. But! We have to choose whether our variables will be public (accessible) or private (inaccessible)

```php
class World {
  private $codename = "x6yn444";
  public $size = "Medium"; // public var can be accessed outside class definition
}

$world = new World();

print_r($world);
print_r($world->size);
// print_r($world->codename); // error!
```

We can update the public properties very easily:

```php
class World {
  private $codename = "x6yn444";
  public $size = "Medium"; // public var can be accessed outside class definition
}

$world = new World();

print_r($world);
$world->size = 'Small';
print_r($world->size);
// print_r($world->codename); // error!
```

To get the values or set the values of our private members, we'll need to write methods to do so. Let's write one to get the value.

```php
class World {
  private $codename = "x6yn444";
  public $size = "Medium"; // public var can be accessed outside class definition
  public function getCodeName() {
    return $this->codename;
  }
}

print_r($world->getCodeName());
```
**Bonus** - try it! Write a method to change the value and test it.

## Constructor

The constructor function will run when we create (instantiate) our object. Let's add it to our code.

Note - we can also set default values.

```php
class World {
  private $codename = "x6yn444";
  public $size = "Medium"; // public var can be accessed outside class definition
  public function __construct($world_name, $shape= "oblate spheroid"){
    $this->name = $world_name;
    $this->shape = $shape;
  }
  public function getCodeName() {
    return $this->codename;
  }
}

$world = new World("Nothing But Shrimp");

print_r($world);
$world->size = 'Small';
print_r($world->size);
// print_r($world->codename); // error!
```

### You do

- make a new class Person
- a person should have publicly accessible name, age and occupation
- each object you should be able to set the name, age and occupation
- if no age is included, set the age to 85
- if no occupation is included, set the occupation to 'Student'
- **Bonus** in your world class create a new private member `people` that will be an array. Create a public method `populate` that will push people objects into this array. Finally, create a public method `census` that will `print_r` the `people` array


## Factory/Statics

Let's make a galaxy. The galaxy will contain an array of planets (made up of world objects). We just need one galaxy - so we won't need to instantiate a new one, we just want to use the functionality/properties. To do this, we'll use `static`


```php
class Galaxy {
  static protected $planets = array();
  static public function create ($name) {
    $new_planet = new World($name);
    self::$planets[] = $new_planet;
    return $new_planet;
  }
}

$tatooine = Galaxy::create('Tatooine');
print_r($tatooine);
```

Let's write a method that will let us find our worlds by index

```php
class Galaxy {
  static protected $planets = array();
  static public function create ($name) {
    $new_planet = new World($name);
    self::$planets[] = $new_planet;
    return $new_planet;
  }

  static public function find($index) {
    return self::$planets[$index];
  }
}

$tatooine = Galaxy::create('Tatooine');
print_r($tatooine);
print_r(Galaxy::find(0));
```
## Bonus - Let's create the milky way

```php
$our_planets = array(
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
  "Pluto"
);

foreach ($our_planets as $planet) {
  Galaxy::create($planet);
}

print_r(Galaxy::find(3));
print_r(Galaxy::find(8));

```
## Bonus - Let's Inherit

First there were cars and this worked for many people.

Let's note the use of `protected`.
We want to protect the number of wheels. Once the car is made - you cannot modify the number of wheels directly.  

```php
class Car {
	protected $wheels; //accessible by child class, not outside class, though
	private $engine = "off"; //unaccessible by child class
	public function __construct($num_wheels){
		$this->wheels = $num_wheels;
	}
	public function getWheels(){
		return $this->wheels;
	}
	public function start(){
		$this->engine = "on";
	}
}
```

But for some people, their life motto is 'anything worth doing, is worth overdoing' - and for them - the Hummer/Humvee was created. It is, for the uninitiated, a car++++:

```php
class Humvee extends Car {
	protected $armour = 10;
	public function takeDamage($damage){
		$this->armour -= $damage;
	}
	public function loseWheel(){
		$this->wheels--; //can access parent class $wheels member because it is protected
	}
	//can overwrite or even extend parent's start function
	public function start(){
		$this->radio = "WELCOME TO THE JUNGLE!";
		//$this->engine = "on" //creates separate property on Humvee, doesn't manipulate parent class prop
		parent::start(); //run parent's start function
	}
}

$my_humvee = new Humvee(6);
print_r($my_humvee);
$my_humvee->loseWheel();
print_r($my_humvee);
$my_humvee->takeDamage(6);
print_r($my_humvee);
$my_humvee->start();
print_r($my_humvee);
```
