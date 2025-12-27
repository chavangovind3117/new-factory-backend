const express = require("express");
const router = express.Router();
const { addSlipDetails } = require("../controllers/SlipDetails");

// ********************************************************************************************************
//                                      Authentication routes
// ********************************************************************************************************

// Route to add slip details
router.post("/add", addSlipDetails);

module.exports = router;