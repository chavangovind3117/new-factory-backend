const { sql } = require("../config/database.js");

const RegionDetails = {


    getAllRegions: async () => {
        const query = `SELECT * FROM Regions`;
        const result = await sql.query(query);

        if (result.recordset.length === 0) {
            throw new Error("No rows in RegionDetails.");
        }

        return result; // Return the count of affected rows to the caller
    },

};

module.exports = RegionDetails;