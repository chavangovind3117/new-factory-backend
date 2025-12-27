const FactoryDetails = require("../models/FactoryDetails");

exports.getAllFactories = async (req, res) => {
    try {
        const userID = req.params.id;
        const factories = await FactoryDetails.getAllFactories(userID);

        res.status(200).json({
            success: true,
            count: factories.length,
            data: factories.recordset,
            message: "Factories fetched successfully.",
        });
    } catch (error) {
        console.error("Error fetching factory details:", error);

        res.status(500).json({
            success: false,
            message: "Unable to fetch factory details.",
        });
    }
};
