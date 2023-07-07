const mongoose = require("mongoose");

const Schema = mongoose.Schema;



const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
  },
  arrival: {
    type: Date,
  },
});

const flightSchema = new Schema(
  {
    airline: {
      type: String,
      enum: ["American", "Southwest", "United"],
    },
    airport: {
      type: String,
      enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
    },
    flightNumber: {
      type: Number,
      min: 10,
      max: 999,
      required: true,
    },
    depature: {
      type: Date,
    },
    destinations: [destinationSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Flight", flightSchema);
