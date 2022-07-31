// =======================================
//              DEPENDENCIES
// =======================================
const express = require("express");
const request = express.Router();
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
request.post("/", (req, res) => {
  Pet.create(req.body, (err, createdPet) => {
    console.log(
      `This is your pet you just created ====================================${createdPet}========================`
    );
    Pet.find({}, (err, foundrequest) => {
      res.json(foundrequest);
    });
  });
});
/* ===========
GET ROUTE
============= */
//INDEX
request.get("/", (req, res) => {
  Pet.find({}, (err, foundrequest) => {
    res.json(foundrequest);
  });
});

/* ===========
PUT ROUTE
============= */
//UPDATE
request.put("/:id", (req, res) => {
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
        Pet.find({}, (err, foundrequest) => {
          res.json(foundrequest);
        });
      }
    }
  );
});

/* ===========
DELETE ROUTE
============= */
//DELETE
request.delete("/:id", (req, res) => {
  Pet.findByIdAndRemove(req.params.id, (err, deletedPet) => {
    console.log(
      `This is your deleted pet ==================================== ${deletedPet} =============================`
    );
    Pet.find({}, (err, foundrequest) => {
      res.json(foundrequest);
    });
  });
});

/* ===========
SEED ROUTE
============= */
// request.get("/seed", (req, res) => {
//   Pet.insertMany(seeds, (err, manyrequest) => {
//     res.redirect("/");
//   });
// });

module.exports = request;
