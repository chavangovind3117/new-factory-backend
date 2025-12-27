const CropDetails = require("../models/CropDetails");

exports.getAllCrops = async (req, res) => {

    try {
        const result = await CropDetails.getAllCrops();

        console.log("fetch Crop details : ", result)

        if (!result) {
            return res.status(500).json({
                success: false,
                message: "Failed to find Crop details",
            });
        }

        res.status(200).json({
            data: result.recordset,
            success: true,
            message: "Crop details fetched successfully."
        });

    } catch (error) {
        console.error("Error adding Crop details:", error);

        res.status(500).json({
            message: "Unable to fetch Crop details."
        })
    }

};