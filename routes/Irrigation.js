const express = require("express");
const router = express.Router();

const {
  getAllIrrigationSources,
  getAllIrrigationMethods,
} = require("../controllers/IrrigationDetails");

// Irrigation APIs
router.get("/sources/all", getAllIrrigationSources);
router.get("/methods/all", getAllIrrigationMethods);

module.exports = router;
