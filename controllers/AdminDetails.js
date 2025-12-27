const AdminDetails = require("../models/AdminDetails");

exports.getAdminGrowers = async (req, res) => {
    try {
        const userID = req.params.id;
        const Growers = await AdminDetails.getAdminGrowers(userID);

        res.status(200).json({
            success: true,
            data: Growers.recordset,
            message: "Grower name and ids fetched successfully.",
        });
    } catch (error) {
        console.error("Error fetching grower name and id details:", error);

        res.status(500).json({
            success: false,
            message: "Unable to fetch grower name and ids.",
        });
    }
};
