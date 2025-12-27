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
