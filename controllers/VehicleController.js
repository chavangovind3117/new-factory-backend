const VehicleModel = require("../models/VehicleModel");

exports.getAllVehicleTypes = async (req, res) => {
  try {
    const result = await VehicleModel.getAllVehicleTypes();
    res.status(200).json(result.recordset);
  } catch (error) {
    console.error("Error fetching vehicle types:", error);
    res.status(500).json(error.message);
  }
};
