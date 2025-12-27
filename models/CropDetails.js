const { executeQuery } = require("./db.js");
const { sql } = require("../config/database.js");

const CropDetails = {

    getAllCrops: async () => {
        const query = `SELECT * FROM Crops`;
        const result = await sql.query(query);

        if (result.recordset.length === 0) {
            throw new Error("No rows in Crops.");
        }

        return result; // Return the count of affected rows to the caller
    },

}

module.exports = CropDetails;