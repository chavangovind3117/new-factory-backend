const express = require("express");
const router = express.Router();
const { getAllcircles } = require("../controllers/circleController");

router.get("/", getAllcircles);

module.exports = router;