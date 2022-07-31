// =======================================
//              DEPENDENCIES
// =======================================
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const Pet = require("./models/pet.js");

// =======================================
//              MIDDLEWARE
// =======================================
require("dotenv").config();
app.use(express.json());

const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));
// =======================================
//              DATABASE
// =======================================
const port = process.env.PORT || 3004;
const mongoURI = process.env.MONGODB_URI;
const db = mongoose.connection;
const dbName = process.env.DBNAME;

// =======================================
//      MONGOOSE CONNECTION LOGIC
// =======================================
mongoose.connect(
  mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => {
    console.log("the connection with mongod is established");
  }
);
db.once("open", () => {
  console.log("mongo connected: ", dbName);
});
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("disconnected", () => console.log("mongo disconnected"));

// =======================================
//          CONTROLLERS
// =======================================
const petsController = require("./controllers/pet_controller.js");
app.use("/pets", petsController);

app.get("/droppets", (req, res) => {
  console.log("you dropped pets collection");
  Pet.collection.drop();
  res.redirect("/pets");
});
// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
