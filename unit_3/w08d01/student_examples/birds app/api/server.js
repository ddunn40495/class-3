// =======================================
//              DEPENDENCIES
// =======================================
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const cors = require("cors");
const app = express();

// =======================================
//              MIDDLEWARE
// =======================================
require("dotenv").config();
app.use(express.static("public"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(methodOverride("_method"));
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

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

app.use(cors(corsOptions)); // all routes are now exposed, sometimes you just want to limit access (ie OMDB - it's ok for anyone to see the movies, but you don't want just anyone updating the movies)
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
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
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
//           APP   CONTROLLERS
// =======================================
const birdsController = require("./controllers/birds_controller.js");
app.use("/birds", birdsController);

// =======================================
//           ROUTES
// =======================================

// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
