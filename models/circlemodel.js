const { executeQuery } = require("./db.js");
const { sql } = require("../config/database.js");

const getCircles = {
  getAllcircles: async () => {
    const query =
      "SELECT  Circlecode as circleID , CircleName FROM CircleMaster ORDER BY CircleName";
    const result = await executeQuery(query);

    // console.log("result in circle model : ", result);

    if (!result || result.length === 0) {
      throw new Error("No circle found in CircleMaster.");
    }

    return result;
  },
};

module.exports = getCircles;
