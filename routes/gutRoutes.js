const express = require("express");
const router = express.Router();
const { getGutByCircleID } = require("../controllers/gutController");

router.get("/gut/get/:circleID", getGutByCircleID);

module.exports = router;
