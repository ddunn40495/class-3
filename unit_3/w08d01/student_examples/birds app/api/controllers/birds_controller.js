// =======================================
//              DEPENDENCIES
// =======================================
const express = require("express");
const mongoose = require("mongoose");
const birds = express.Router();
const Bird = require("../models/bird.js");
const birdSeed = require("../models/bird_seed.js");

// =======================================
//              ROUTES
// =======================================

/* ===========
GET ROUTE
============= */
//NEW

/* ===========
POST ROUTE
============= */
//CREATE

birds.post("/", (req, res) => {
  Bird.create(req.body, (err, createdBird) => {
    Bird.find({}, (err, foundBird) => {
      res.json(foundBird); //.json() will send proper headers in response so client knows it's json coming back
    });
  });
});

/* ===========
GET ROUTE
============= */
//SHOW

/* ===========
GET ROUTE
============= */
//INDEX
birds.get("/", (req, res) => {
  Bird.find({}, (err, foundBirds) => {
    res.send(foundBirds);
  });
});
/* ===========
PUT ROUTE
============= */
//UPDATE
birds.put("/:id", (req, res) => {
  Bird.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    },
    (err, updatedPerson) => {
      if (err) {
        res.send(err);
      } else {
        Bird.find({}, (err, foundBirds) => {
          res.json(foundBirds);
        });
      }
    }
  );
});

/* ===========
GET ROUTE
============= */
//EDIT

/* ===========
DELETE ROUTE
============= */
//DELETE
birds.delete("/:id", (req, res) => {
  Bird.findByIdAndRemove(req.params.id, (err, deletedBird) => {
    Bird.find({}, (err, foundBirds) => {
      res.json(foundBirds);
    });
  });
});

/* ===========
SEED ROUTE
============= */
birds.get("/seed", (req, res) => {
  Bird.insertMany(birdSeed, (err, manyBirds) => {
    res.redirect("/");
  });
});

module.exports = birds;
