const express = require("express");

const { addGrowerDetails } = require("../controllers/GrowerDetails");
const { getAllGrowers } = require("../controllers/GrowerDetails");
const { updateGrowerDetails } = require("../controllers/GrowerDetails");
const { getGrowerDetails } = require("../controllers/GrowerDetails");
const { getGrowersByVillageCode } = require("../controllers/GrowerDetails");
const router = express.Router();

// ********************************************************************************************************
//                                      Profile routes
// ********************************************************************************************************

router.post("/add", addGrowerDetails);
router.get("/all", getAllGrowers);
router.get("/all/:villageCode", getGrowersByVillageCode);
router.put("/update/:id", updateGrowerDetails);
router.get("/get/:id", getGrowerDetails);

module.exports = router;
