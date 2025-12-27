const express = require("express");
const { getAllFactories } = require("../controllers/FactoryDetails");

const router = express.Router();

// GET request to fetch all factories
router.get("/all/:id", getAllFactories);

module.exports = router;
