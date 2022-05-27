const mongoose = require('mongoose');
//  creating schema
const movieSchema = new mongoose.Schema({
title: String,
director: String,
stars: [String],
image: String,
description: String,
showtimes: [String]
})
//  creating model
const Movie = mongoose.model ('Movie', movieSchema);
//  exporting model
module.exports = Movie
