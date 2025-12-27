const express = require("express");
const router = express.Router();

const { getAdminGrowers } = require("../controllers/AdminDetails");


// ********************************************************************************************************
//                                      Admin Routes
// ********************************************************************************************************

// Route for user login
router.get("/all/:id", getAdminGrowers);



module.exports = router; 