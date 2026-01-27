const { executeQuery } = require("./db.js");
const { sql } = require("../config/database.js");

const PlantationModel = {
  getAllPlantationMethods: async () => {
    const query = `SELECT * FROM PlantMethodMaster`;
    const result = await sql.query(query);
    if (result.recordset.length === 0) {
      throw new Error("No rows in PlantationMethods.");
    }
    return result; // Return the count of affected rows to the caller
  },
};

module.exports = PlantationModel;
