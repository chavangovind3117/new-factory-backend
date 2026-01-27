const exptress = require("express");
const router = exptress.Router();
const {
  getAllPlantationMethods,
} = require("../controllers/PlantationController");

// ********************************************************************************************************
//                                      Plantation Routes
// ********************************************************************************************************
// Route to get all plantation details
router.get("/methods/all", getAllPlantationMethods);

module.exports = router;
