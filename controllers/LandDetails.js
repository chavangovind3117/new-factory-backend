const LandDetails = require("../models/LandDetails");

exports.addLandDetails = async (req, res) => {
  const {
    growerID,
    cropType,
    cropCategory,
    totalAreaInHectare,
    totalAreaInAcre,
    totalAreaInGunta,
    coordinates,
  } = req.body;
  console.log(
    "required fields",
    growerID,
    cropType,
    cropCategory,
    totalAreaInHectare,
    totalAreaInAcre,
    totalAreaInGunta,
    coordinates
  );
  try {
    if (
      !growerID ||
      !cropType ||
      !cropCategory ||
      !totalAreaInHectare ||
      !totalAreaInAcre ||
      !totalAreaInGunta ||
      !coordinates
    ) {
      return res.status(400).json({
        message: "Required fields are missing.",
      });
    }

    const coordinatesString = JSON.stringify(coordinates);

    const result = await LandDetails.create(
      growerID,
      cropType,
      cropCategory,
      totalAreaInHectare,
      totalAreaInAcre,
      totalAreaInGunta,
      coordinatesString
    );

    if (!result) {
      return res.status(500).json({
        success: false,
        message: "Failed to add land details. No rows were affected.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Land details added successfully.",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.updateLandDetails = async (req, res) => {
  const {
    growerID,
    fieldOverseerName,
    cropType,
    cropCategory,
    cropHealth,
    cropStage,
    totalAreaInHectare,
    totalAreaInAcre,
    totalAreaInGunta,
    gatNumber,
    expectedWeight,
    factoryMember,
  } = req.body;

  console.log(
    growerID,
    fieldOverseerName,
    cropType,
    cropCategory,
    cropHealth,
    cropStage,
    totalAreaInHectare,
    totalAreaInAcre,
    totalAreaInGunta,
    gatNumber,
    expectedWeight,
    factoryMember
  );
  try {
    if (
      !growerID ||
      !fieldOverseerName ||
      !cropType ||
      !cropCategory ||
      !cropHealth ||
      !cropStage ||
      !totalAreaInHectare ||
      !totalAreaInAcre ||
      !totalAreaInGunta ||
      !gatNumber ||
      !expectedWeight ||
      !factoryMember
    ) {
      return res.status(400).json({
        message: "Required fields are missing.",
      });
    }

    const landID = req.params.id;
    const affectedRows = await LandDetails.update(
      landID,
      growerID,
      fieldOverseerName,
      cropType,
      cropCategory,
      cropHealth,
      cropStage,
      totalAreaInHectare,
      totalAreaInAcre,
      totalAreaInGunta,
      gatNumber,
      expectedWeight,
      factoryMember
    );

    if (affectedRows < 1) {
      return res.status(500).json({
        success: false,
        message: "Failed to update land details. No rows were affected.",
      });
    }

    return res.status(200).json({
      growerID: growerID,
      landID: landID,
      success: true,
      message: "Land details updated successfully.",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.updateLandArea = async (req, res) => {
  try {
    const {
      totalAreaInHectare,
      totalAreaInAcre,
      totalAreaInGunta,
      coordinates,
      coordinatesString, // ✅ accept both
    } = req.body;

    const landID = req.params.id;

    // Choose whichever one is provided
    const coords = coordinates || coordinatesString;

    console.log("Received update request for LandID:", landID);
    console.log("Area Details:", {
      totalAreaInHectare,
      totalAreaInAcre,
      totalAreaInGunta,
      coordinates: coords,
    });

    // Validation
    if (
      !landID ||
      totalAreaInHectare == null ||
      totalAreaInAcre == null ||
      totalAreaInGunta == null ||
      !coords
    ) {
      return res.status(400).json({
        message: "Required fields are missing.",
      });
    }

    // Convert to string before storing
    const coordinatesJsonString = JSON.stringify(coords);

    const result = await LandDetails.updateArea(
      landID,
      totalAreaInHectare,
      totalAreaInAcre,
      totalAreaInGunta,
      coordinatesJsonString
    );

    if (!result) {
      return res.status(500).json({
        success: false,
        message: "Failed to update land Area. No rows were affected.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Land Area updated successfully.",
    });
  } catch (error) {
    console.error("UpdateLandArea Error:", error);
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.getLandDetails = async (req, res) => {
  const { growerID, landID } = req.params;

  console.log("growerId : ", growerID, landID);

  try {
    if (!growerID || !landID) {
      return res.status(400).json({
        message: "growerID and landID are required",
      });
    }
    const result = await LandDetails.findLandDetails(growerID, landID);

    console.log("fetch grower details : ", result);

    if (result.recordset.length === 0) {
      return res.status(500).json({
        success: false,
        message: "Failed to find Land details",
      });
    }

    res.status(200).json({
      // count: result.recordset.length,
      data: result.recordset,
      success: true,
      message: "Land details fetched successfully.",
    });
  } catch (error) {
    console.error("Error adding Land details:", error);

    res.status(500).json({
      message: "Unable to fetch Land details.",
    });
  }
};

exports.getLandIDs = async (req, res) => {
  const growerID = req.params.id;

  console.log("growerId : ", growerID);

  try {
    const result = await LandDetails.findLandIds(growerID);

    console.log("fetch grower details : ", result);

    if (!result) {
      return res.status(500).json({
        success: false,
        message: "Failed to find Land IDs",
      });
    }

    res.status(200).json({
      data: result.recordset,
      success: true,
      message: "Land IDs fetched successfully.",
    });
  } catch (error) {
    console.error("Error adding Land IDs:", error);

    res.status(500).json({
      message: "Unable to fetch Land IDs.",
    });
  }
};
