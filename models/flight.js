const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airline: {
    type: String,
  },
  aiport: { type: String },
  airline: { 
    type: Number,
    min: 10,
    max: 999,
    required: true,
  },
  depature: {},
});
