const { executeQuery } = require("./db.js");
const { sql } = require("../config/database.js");

const gutModel = {
  getGutByCircleID: async (circleID) => {
    const query = `SELECT * FROM GutMaster WHERE CircleCode = @circleID ORDER BY Gutcode`;

    const params = [{ name: "circleID", type: sql.Int, value: circleID }];

    const result = await executeQuery(query, params);

    console.log("gutlist in model : ", result);

    if (result.recordset.length === 0) {
      throw new Error("No Guts found for the given CircleID.");
    }
    return result; // Return the result to the caller
  },
};

module.exports = gutModel;
