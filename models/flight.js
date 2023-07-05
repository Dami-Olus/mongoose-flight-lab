const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airline: {
    type: String,
  },
  airport: { type: String },
  flightNumber: { 
    type: Number,
    min: 10,
    max: 999,
    required: true,
  },
  depature: {
    
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema); 
