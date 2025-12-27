const gutModel = require("../models/gutModel");

exports.getGutByCircleID = async (req, res) => {
  try {
    const { circleID } = req.params;

    if (!circleID) {
      return res.status(400).json([]);
    }

    const result = await gutModel.getGutByCircleID(circleID);

    // console.log("gut list in controller : ", result);

    res.status(200).json(result.recordset);
  } catch (error) {
    console.error("Error fetching gut IDs:", error);
    res.status(500).json([]);
  }
};
