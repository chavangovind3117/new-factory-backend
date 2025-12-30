const FieldOverseers = require("../models/FieldOverseers");

exports.getAllFieldOverseers = async (req, res) => {
  try {
    const fieldOverseers = await FieldOverseers.getAllFieldOverseers();

    res.status(200).json({
      success: true,
      count: fieldOverseers.length,
      data: fieldOverseers.recordset,
      message: "FieldOverseers fetched successfully.",
    });
  } catch (error) {
    console.error("Error fetching FieldOverseers details:", error);

    res.status(500).json({
      success: false,
      message: "Unable to fetch FieldOverseers details.",
    });
  }
};

exports.createFieldSurvey = async (req, res) => {
  const {
    userID,
    fieldOverseerName,
    circleID,
    gutCode,
    villageCode,
    growerCode,
    cropType,
    cropCategory,
    expectedWeight,
    factoryMember,
    totalAreaInHectare,
    coordinates,
  } = req.body;

  console.log(
    "inside createfiedl Survey : ",
    userID,
    fieldOverseerName,
    circleID,
    gutCode,
    villageCode,
    growerCode,
    cropType,
    cropCategory,
    expectedWeight,
    factoryMember,
    totalAreaInHectare,
    coordinates
  );

  try {
    // 🔴 Required field validation
    if (
      !userID ||
      !fieldOverseerName ||
      !circleID ||
      !gutCode ||
      !villageCode ||
      !growerCode ||
      !cropType ||
      !cropCategory ||
      !expectedWeight ||
      !coordinates ||
      !Array.isArray(coordinates) ||
      coordinates.length === 0
    ) {
      return res.status(400).json({
        success: false,
        message: "Required fields are missing.",
      });
    }

    // 🟢 Insert into DB
    const result = await FieldOverseers.createFieldSurvey(
      userID,
      fieldOverseerName,
      circleID,
      gutCode,
      villageCode,
      growerCode,
      cropType,
      cropCategory,
      expectedWeight, // keep STRING
      factoryMember,
      totalAreaInHectare,
      coordinates
    );

    // 🔴 Safety check (like GrowerID check)
    if (!result || result.rowsAffected[0] === 0) {
      return res.status(500).json({
        success: false,
        message: "Failed to insert field survey details.",
      });
    }

    res.status(201).json({
      success: true,
      message: "Field survey created successfully.",
    });
  } catch (error) {
    console.error("Error creating field survey:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create field survey.",
    });
  }
};
