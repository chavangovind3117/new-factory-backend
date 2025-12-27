const { executeQuery } = require("./db.js");
const { sql } = require("../config/database.js");

const FactoryDetails = {
    getAllFactories: async (userID) => {
        const query = `SELECT FM.FactoryID, FM.FactoryName, FM.FactoryAddress
            FROM FactoryMaster FM
            JOIN FieldOverseers FO ON FM.FactoryID = FO.FactoryID
            WHERE FO.UserID = @userID 
            ORDER BY FM.FactoryName`;

        const params = [{ name: "userID", type: sql.Int, value: userID }];
        const result = await executeQuery(query, params);

        if (!result || result.length === 0) {
            throw new Error("No factories found in FactoryDetails.");
        }

        return result;
    },
};

module.exports = FactoryDetails;
