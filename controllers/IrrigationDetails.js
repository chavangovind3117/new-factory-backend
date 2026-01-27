const IrrigationDetails = require("../models/IrrigationDetails");

exports.getAllIrrigationSources = async (req, res) => {
  try {
    const result = await IrrigationDetails.getAllIrrigationSources();
    res.status(200).json(result.recordset);
    console.log("inside irrsource controller", result.recordset);
  } catch (error) {
    console.error("Error fetching irrigation sources:", error);
    res.status(500).json(error.message);
  }
};

exports.getAllIrrigationMethods = async (req, res) => {
  try {
    const result = await IrrigationDetails.getAllIrrigationMethods();
    res.status(200).json(result.recordset);
  } catch (error) {
    console.error("Error fetching irrigation methods:", error);
    res.status(500).json(error.message);
  }
};
