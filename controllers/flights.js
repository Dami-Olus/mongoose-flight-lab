const FlightModel = require("../models/flight");
const TicketModel = require("../models/ticket");

module.exports = {
  index,
  new: newFlight,
  create,
  show,
};

async function index(req, res) {
  const flights = await FlightModel.find({});
  res.render("flights/index", { title: "All Flights", flights: flights });
}

function newFlight(req, res) {
  res.render("flights/new");
}

async function show(req, res) {
  await FlightModel.findById(req.params.id).then((flight) => {
    TicketModel.find({ flight: flight._id }).then((ticket) => {
      console.log(ticket);
      res.render("flights/show", { flight, ticket });
    });
  });
}

async function create(req, res) {
  console.log(req.body);
  try {
    const flightFromTheDatabase = await FlightModel.create(req.body);

    console.log(flightFromTheDatabase);
    res.redirect("/flights");
  } catch (e) {
    console.log(e);
    res.render("movies/new", {
      errorMsg: e.message,
    });
  }
}
