const FlightsModel = require("../models/flight");

module.exports = {
  create,
};

async function create(req, res) {
  console.log(req.body);
  console.log(req.params.id)

  const flightFromTheDb = await FlightsModel.findById(req.params.id)

  flightFromTheDb.destinations.push(req.body)

  await flightFromTheDb.save()

  console.log(flightFromTheDb)

  res.redirect(`/flights/${req.params.id}`)
}
