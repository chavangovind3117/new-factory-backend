const RegionDetails = require("../models/RegionDetails");

exports.getAllRegions = async (req, res) => {

    try {
        const result = await RegionDetails.getAllRegions();

        console.log("fetch Crop details : ", result)

        if (!result) {
            return res.status(500).json({
                success: false,
                message: "Failed to find Rdgion details",
            });
        }

        res.status(200).json({
            data: result.recordset,
            success: true,
            message: "Rdgion details fetched successfully."
        });

    } catch (error) {
        console.error("Error adding Rdgion details:", error);

        res.status(500).json({
            message: "Unable to fetch Rdgion details."
        })
    }

};