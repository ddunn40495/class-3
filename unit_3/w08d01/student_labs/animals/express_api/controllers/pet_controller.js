// =======================================
//              DEPENDENCIES
// =======================================
const express = require("express");
const pets = express.Router();
const Pet = require("../models/pet.js");
const Request = require("../models/request.js");
const seeds = require("../models/seed.js");

// =======================================
//              ROUTES
// =======================================

/* ===========
POST ROUTE
============= */
//CREATE
pets.post("/", (req, res) => {
  Pet.create(req.body, (err, createdPet) => {
    console.log(
      `This is your pet you just created ====================================${createdPet}========================`
    );
    Pet.find({}, (err, foundPets) => {
      res.json(foundPets);
    });
  });
});

/* ===========
GET ROUTE
============= */
//SHOW
pets.get("/:id", (req, res) => {
  Pet.findById(req.params.id, (err, foundPet) => {
    console.log(
      `This is your pet you just requested ====================================${foundPet}========================`
    );
    res.send(foundPet);
  });
});

/* ===========
GET ROUTE
============= */
//INDEX
pets.get("/", (req, res) => {
  Pet.find({}, (err, foundPets) => {
    res.json(foundPets);
  });
});

/* ===========
GET ROUTE
============= */
//DOG
pets.get("/dog", (req, res) => {
  Pet.find({ species: "dog" }, (err, foundPets) => {
    res.json(foundPets);
  });
});

/* ===========
GET ROUTE
============= */
//CAT
pets.get("/cat", (req, res) => {
  Pet.find({ species: "cat" }, (err, foundPets) => {
    res.json(foundPets);
  });
});

/* ===========
PUT ROUTE
============= */
//UPDATE
pets.put("/:id", (req, res) => {
  Pet.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedPet) => {
      console.log(
        `This is your updated pet ==================================== ${updatedPet} =============================`
      );
      if (err) {
        res.send(err);
      } else {
        Pet.find({}, (err, foundPets) => {
          res.json(foundPets);
        });
      }
    }
  );
});

/* ===========
DELETE ROUTE
============= */
//DELETE
pets.delete("/:id", (req, res) => {
  Pet.findByIdAndRemove(req.params.id, (err, deletedPet) => {
    console.log(
      `This is your deleted pet ==================================== ${deletedPet} =============================`
    );
    Pet.find({}, (err, foundPets) => {
      res.json(foundPets);
    });
  });
});

/* ===========
SEED ROUTE
============= */
// pets.get("/seed", (req, res) => {
//   Pet.insertMany(seeds, (err, manypets) => {
//     res.redirect("/");
//   });
// });

module.exports = pets;
