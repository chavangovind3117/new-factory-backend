const villageModel = require("../models/villageModel");

exports.getVillageByGutID = async (req, res) => {
  try {
    const { gutID } = req.params;
    console.log("gut id in village controller : ", gutID);

    if (!gutID) {
      return res.status(400).json([]);
    }

    const result = await villageModel.getVillageByGutID(gutID);
    // console.log("village list in controller : ", result);

    res.status(200).json(result.recordset);
  } catch (error) {
    console.error("Error fetching village IDs:", error);
    res.status(500).json(error.message);
  }
};
