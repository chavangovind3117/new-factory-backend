const { executeQuery } = require("./db.js");
const { sql } = require("../config/database.js");

const AdminDetails = {
    getAdminGrowers: async (userID) => {
        const query = `SELECT DISTINCT sd.SlipID, sd.LandID, sd.GrowerID, sd.GrowerName, sd.Tonnage, sd.TransporterName, sd.HarvesterName
            FROM Admins a
            JOIN FactoryMaster fm ON a.FactoryID = fm.FactoryID
            JOIN SlipDetails sd ON fm.FactoryName = sd.FactoryName
            WHERE a.UserID = @userID`;

        const params = [{ name: "userID", type: sql.Int, value: userID }];
        const result = await executeQuery(query, params);

        if (!result || result.length === 0) {
            throw new Error("No grower data in AdminDetails.");
        }

        return result;
    },
};

module.exports = AdminDetails;