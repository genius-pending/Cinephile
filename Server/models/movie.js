const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  // scehema defined below
  UserName: {
    type: String,
    trim: true
  },
  MovieName: {
    type: String,
    unique: true
  },
  ImageURL: {
    type: String,
  },
  Review: {
    type: String,
    trim: true
  },
})

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;