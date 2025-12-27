const express = require("express");
const { getAllFieldOverseers } = require("../controllers/FieldOverseers");

const router = express.Router();

// GET request to fetch all factories
router.get("/all", getAllFieldOverseers);

module.exports = router;