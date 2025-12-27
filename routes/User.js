const express = require("express");
const router = express.Router();

const { login } = require("../controllers/Auth");


// ********************************************************************************************************
//                                      Authentication routes
// ********************************************************************************************************

// Route for user login
router.post("/login", login);



module.exports = router; 
