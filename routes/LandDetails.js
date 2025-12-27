const express = require("express");
const { updateLandDetails } = require("../controllers/LandDetails");
const { updateLandArea } = require("../controllers/LandDetails");
const { addLandDetails } = require("../controllers/LandDetails");
const { getLandIDs } = require("../controllers/LandDetails");
const { getLandDetails } = require("../controllers/LandDetails");
const router = express.Router();


// ********************************************************************************************************
//                                      Land Details routes
// ********************************************************************************************************

router.get("/:id", getLandIDs);
router.get("/:growerID/:landID", getLandDetails);
router.post("/add", addLandDetails);
router.put("/update/:id", updateLandDetails);
router.put("/updateArea/:id", updateLandArea);
// router.delete("/:id", LandDetailsController.delete);

module.exports = router;