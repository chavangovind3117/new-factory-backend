const { executeQuery } = require("./db.js");
const { sql } = require("../config/database.js");

const FieldOverseers = {
    getAllFieldOverseers: async () => {
        const query = "SELECT * FROM FieldOverseers";
        const result = await executeQuery(query);

        if (!result || result.length === 0) {
            throw new Error("No factories found in FieldOverseers.");
        }

        return result;
    },
};

module.exports = FieldOverseers;
