const express = require("express");
const router = express.Router();

const { getAllRegions } = require("../controllers/RegionDetails");


// ********************************************************************************************************
//                                      Crops Routes
// ********************************************************************************************************

// Route for user login
router.get("/all", getAllRegions);



module.exports = router; 