<?php

class Person {
  public $species = "mammal";
  private $onWatchList = false;
  public function __construct($name, $age = 85, $occupation = "Student") {
    $this->name = $name;
    $this->age = $age;
    $this->occupation = $occupation;
  }
}

$karolin = new Person ("Karolin", 43, "instructor");
// print_r ($karolin);


class World {
  private $codename = "x6yn444";
  private $people = [];
  public $size = "Medium";
  public function __construct($world_name, $shape="oblate spheroid"){
    $this->name = $world_name;
    $this->shape = $shape;
  }
  public function getCodeName(){
    return $this->codename;
  }
  public function getPeople () {
    return $this->people;
  }
  public function createPeople($name, $age = 75, $occupation = "leaflet distributor") {
    $this->people[]= new Person ($name, $age, $occupation);
  }
}

$world = new World("Nothing But Shrimp");
$world->createPeople("Shrimpy McShrimpsky");
$world->createPeople("Karolin", 43, "Instructor");


print_r($world);
// $world->size = 'small';
// print_r($world->size);
// $world->codename = '893h3j3';
// print_r($world->getCodeName());

class Galaxy {
  static protected $planets = array();
  static public function createNewWorld ($name) {
    $new_planet = new World($name);
    self::$planets[] = $new_planet;
    return $new_planet;
  }

  static public function find ($index) {
    return self::$planets[$index];
  }
}

$tatooine = Galaxy::createNewWorld('Tatooine');
// print_r($tatooine);
// print_r(Galaxy::find(0));

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

foreach($our_planets as $planet) {
  Galaxy::createNewWorld($planet);
}

// print_r(Galaxy::find(3));
// print_r(Galaxy::find(8));


class Car {
  protected $wheels;  // accessible by child
  private $engine = "off"; // not accessible by child
  public function __construct($num_wheels) {
    $this->wheels = $num_wheels;
  }
  public function getWheels() {
    return $this->wheels;
  }
  public function start () {
    $this->engine = "on";
  }
}


$mazda = new Car(4);
// print_r($mazda);

class Humvee extends Car {
  protected $armor = 10;
  public function takeDamage($damage) {
    $this->armor -= $damage;
  }
  public function loseWheel() {
    $this->wheels--;
  }
  public function start () {
    $this->radio = "WELCOME TO THE JUNGLE";
    // $this->engine = "on"; sets new property instead of changing parent property
    parent::start();
  }
}

$my_humvee = new Humvee(6);
$my_humvee->loseWheel();
$my_humvee->takeDamage(5);
$my_humvee->start();
// print_r($my_humvee);










?>
