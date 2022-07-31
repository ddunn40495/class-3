const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema(
  {
    name: String,
    species: String,
    breed: String,
    image: { type: String, default: "https://loremflickr.com/240/120" },
    age: Number,
    adopted: { type: Boolean, default: false },
    medIssues: { type: Boolean, default: false },
    goodForApt: { type: Boolean, default: false },
    likes: Number,
    requests: [{ type: mongoose.Schema.Types.ObjectId, ref: "Request" }],
    personalityTraits: [String],
    color: { type: String, default: null },
  },
  { timestamps: true }
);

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;
