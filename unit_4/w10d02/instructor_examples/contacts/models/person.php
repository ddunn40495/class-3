<?php
$dbconn = pg_connect("host=localhost dbname=contacts");

class Person {
    public $id;
    public $name;
    public $age;

    public function __construct($id, $name, $age){
        $this->id = $id;
        $this->name = $name;
        $this->age = $age;

    }
}

class People {
    static function all(){
        $people = array();

        $results = pg_query("SELECT * FROM people");
        $row_object = pg_fetch_object($results);

        while($row_object !== false){

            $new_person = new Person(
                intval($row_object->id),
                $row_object->name,
                intval($row_object->age)
            );

            $people[] = $new_person;

            $row_object = pg_fetch_object($results);
        }

        // $person1 = new Person(1, 'Bob', 32);
        // $person2 = new Person(2, 'Matt', 40);
        // $person3 = new Person(3, 'Sally', 60);
        //
        // $people[] = $person1;
        // $people[] = $person2;
        // $people[] = $person3;

        return $people;
    }
}

?>
