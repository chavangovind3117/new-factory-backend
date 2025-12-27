const GrowerDetails = require("../models/GrowerDetails");

exports.addGrowerDetails = async (req, res) => {
  const {
    fullName,
    address,
    village,
    taluka,
    district,
    state,
    pinCode,
    photo,
    season,
    seasonStart,
    seasonEnd,
  } = req.body;
  // let photoUrl = null;
  try {
    if (
      !fullName ||
      !village ||
      !taluka ||
      !district ||
      !state ||
      !pinCode ||
      !photo
    ) {
      return res.status(400).json({
        message: "Required fields are missing.",
      });
    }

    const result = await GrowerDetails.create(
      fullName,
      address,
      village,
      taluka,
      district,
      state,
      pinCode,
      photo,
      season,
      seasonStart,
      seasonEnd
    );

    console.log(result);
    const growerID = result.recordset[0].GrowerID;

    console.log("grower id : ", growerID);

    if (!growerID) {
      return res.status(500).json({
        success: false,
        message: "Failed to insert grower details. No rows were affected.",
      });
    }

    res.status(200).json({
      growerID: growerID,
      success: true,
      message: "Grower details added successfully.",
    });
  } catch (error) {
    console.error("Error adding grower details:", error);

    res.status(500).json({
      message: "Failed to add grower details.",
    });
  }
};

exports.getAllGrowers = async (req, res) => {
  try {
    const result = await GrowerDetails.getAllGrowers();

    console.log("fetch grower details : ", result);

    if (!result) {
      return res.status(500).json({
        success: false,
        message: "Failed to find grower details",
      });
    }

    res.status(200).json({
      data: result.recordset,
      success: true,
      message: "Grower details fetched successfully.",
    });
  } catch (error) {
    console.error("Error adding grower details:", error);

    res.status(500).json({
      message: "Unable to fetch grower details.",
    });
  }
};

exports.getGrowersByVillageCode = async (req, res) => {
  try {
    const villageCode = req.params.villageCode;
    console.log("village code in controller", villageCode);
    const result = await GrowerDetails.getGrowersByVillageCode(villageCode);

    console.log("fetch grower details by village code : ", result);

    if (!result) {
      return res.status(500).json({
        success: false,
        message: "Failed to find growers by village code",
      });
    }

    res.status(200).json({
      data: result.recordset,
      success: true,
      message: "Growers fetched successfully.",
    });
  } catch (error) {
    console.error("Error adding grower details:", error);

    res.status(500).json({
      message: "Unable to fetch grower details.",
    });
  }
};

exports.getGrowerDetails = async (req, res) => {
  try {
    const growerCode = req.params.id;
    const result = await GrowerDetails.getGrowerDetails(growerCode);

    console.log(result);

    if (!result) {
      return res.status(500).json({
        success: false,
        message: "Failed to get grower details. No rows were affected.",
      });
    }

    res.status(200).json({
      data: result.recordset,
      success: true,
      message: "Grower details fetched successfully.",
    });
  } catch (error) {}
};

exports.updateGrowerDetails = async (req, res) => {
  const {
    fullName,
    address,
    village,
    taluka,
    district,
    state,
    pinCode,
    photo,
    season,
    seasonStart,
    seasonEnd,
  } = req.body;
  const growerID = req.params.id;
  try {
    if (
      !growerID ||
      !fullName ||
      !village ||
      !taluka ||
      !district ||
      !state ||
      !pinCode ||
      !photo
    ) {
      return res.status(400).json({
        message: "Required fields are missing.",
      });
    }
    console.log(
      growerID,
      fullName,
      address,
      village,
      taluka,
      district,
      state,
      pinCode,
      photo
    );

    const result = await GrowerDetails.update(
      growerID,
      fullName,
      address,
      village,
      taluka,
      district,
      state,
      pinCode,
      photo,
      season,
      seasonStart,
      seasonEnd
    );

    console.log(result);

    if (!result) {
      return res.status(500).json({
        success: false,
        message: "Failed to insert grower details. No rows were affected.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Grower details added successfully.",
    });
  } catch (error) {}
};
