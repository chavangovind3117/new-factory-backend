const { executeQuery } = require("./db.js");
const { sql } = require("../config/database.js");

const villageModel = {
  getVillageByGutID: async (gutID) => {
    const query = `SELECT Distinct VillageCode, VillageName, VillageNameD FROM VillegeMaster WHERE GutCode = @gutID ORDER BY VillageName`;

    const params = [{ name: "gutID", type: sql.Int, value: gutID }];

    const result = await executeQuery(query, params);

    console.log("villagelist in model : ", result);
    if (result.recordset.length === 0) {
      throw new Error("No Villages found for the given GutID.");
    }
    return result; // Return the result to the caller
  },
};

module.exports = villageModel;
