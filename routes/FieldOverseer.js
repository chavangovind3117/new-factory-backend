const express = require("express");
const { getAllFieldOverseers } = require("../controllers/FieldOverseers");
const { createFieldSurvey } = require("../controllers/FieldOverseers");

const router = express.Router();

// GET request to fetch all factories
router.get("/all", getAllFieldOverseers);
router.post("/create-survey", createFieldSurvey);

module.exports = router;
