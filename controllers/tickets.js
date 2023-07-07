const TicketModel = require("../models/ticket");
const FlightModel = require("../models/flight");

module.exports = {
  new: newTicket,
  create,
};

async function create(req,res) {
  console.log(req.params)
  
  req.body.flight = req.params.id
console.log(req.body)
try {
  const ticketFromTheDatabase = await TicketModel.create(req.body);

  console.log(ticketFromTheDatabase);
  res.redirect(`/flights/${req.params.id}`);
} catch (e) {
  console.log(e);
  res.render("movies/new", {
    errorMsg: e.message,
  });
}
}

function newTicket(req, res) {
  
  res.render("tickets/new", {id: req.params.id} );
}
