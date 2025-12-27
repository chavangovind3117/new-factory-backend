const express = require("express");
const router = express.Router();

const { getAllCrops } = require("../controllers/CropDetails");


// ********************************************************************************************************
//                                      Crops Routes
// ********************************************************************************************************

// Route for user login
router.get("/all", getAllCrops);



module.exports = router; 