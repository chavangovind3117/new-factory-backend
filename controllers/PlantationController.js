const PlantationModel = require("../models/PlantationModel");

exports.getAllPlantationMethods = async (req, res) => {
  try {
    const methods = await PlantationModel.getAllPlantationMethods();
    res.status(200).json(methods.recordset);
    console.log("Plantation data ", methods.recordset);
  } catch (error) {
    console.error("Error fetching plantation methods:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
