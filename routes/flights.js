const express = require("express");
const router = express.Router();
const flightsCtrl = require("../controllers/flights");
const ticketsCtrl = require("../controllers/tickets");

//Get /flights
router.get("/", flightsCtrl.index);
//GET /flights/new
router.get("/new", flightsCtrl.new);
//POST /flights
router.post("/", flightsCtrl.create);

router.get("/:id", flightsCtrl.show);

router.get("/:id/tickets/new", ticketsCtrl.new);

module.exports = router;
