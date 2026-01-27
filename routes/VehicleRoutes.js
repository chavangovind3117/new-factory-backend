const express = require("express");
const router = express.Router();

const { getAllVehicleTypes } = require("../controllers/VehicleController");

// ********************************************************************************************************
//                                      Vehicle Routes
// ********************************************************************************************************

// Route to get all vehicle types
router.get("/types/all", getAllVehicleTypes);

module.exports = router;
