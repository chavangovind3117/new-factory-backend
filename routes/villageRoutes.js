const express = require("express");
const router = express.Router();
const { getVillageByGutID } = require("../controllers/villageController");

router.get("/village/get/:gutID", getVillageByGutID);

module.exports = router;
