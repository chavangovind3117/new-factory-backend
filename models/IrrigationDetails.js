const { executeQuery } = require("./db.js");
const { sql } = require("../config/database.js");

const IrrigationDetails = {
  getAllIrrigationSources: async () => {
    const query = `SELECT * FROM IrrSourceMaster`;
    const result = await sql.query(query);

    if (result.recordset.length === 0) {
      throw new Error("No rows in IrrigationSources.");
    }
    return result; // Return the count of affected rows to the caller
  },

  getAllIrrigationMethods: async () => {
    const query = `SELECT * FROM IrrMethodMaster`;
    const result = await sql.query(query);

    if (result.recordset.length === 0) {
      throw new Error("No rows in IrrigationMethods.");
    }
    return result; // Return the count of affected rows to the caller
  },
};

module.exports = IrrigationDetails;
