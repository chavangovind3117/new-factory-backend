const SlipDetails = require("../models/SlipDetails");

exports.addSlipDetails = async (req, res) => {
    const { fieldOverseerName, growerName, growerID, landID, tonnage, transporterName, harvesterName, factoryName, distance } = req.body;
    console.log("required fields", fieldOverseerName, growerName, growerID, landID, tonnage, transporterName, harvesterName, factoryName, distance,)
    try {

        if (!fieldOverseerName || !growerName || !growerID || !landID || !tonnage || !transporterName || !harvesterName || !factoryName || !distance) {
            return res.status(400).json({
                success: false,
                message: "All fields are required.",
            });
        }

        const affectedRows = await SlipDetails.create(fieldOverseerName, growerName, growerID, landID, tonnage, transporterName, harvesterName, factoryName, distance);

        if (affectedRows < 1) {
            return res.status(500).json({
                success: false,
                message: "Failed to add slip details. No rows were affected.",
            });
        }

        res.status(200).json({
            success: true,
            message: "Slip details added successfully."
        });

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}
