var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
  country: {type: String, default: "Россия"},
  zip: String,
  region: String,
  region_district: String,
  city: { type: String, required: true },
  city_district: String,
  street: { type: String, required: true },
  num_house: { type: String, required: true },
  year_built: Number,
  area: Number,
  sections: Number,
  max_floor:Number,
  min_floor:Number,
  flats: Number,
  users: [{id: String, name: String}],
  actual_events: [String]
})

module.exports = mongoose.model('House', Schema);