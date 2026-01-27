const { executeQuery } = require("./db.js");
const { sql } = require("../config/database.js");

const VehicleModel = {
  getAllVehicleTypes: async () => {
    const query = `SELECT * FROM VehicleTypeMaster`;
    const result = await sql.query(query);
    if (result.recordset.length === 0) {
      throw new Error("No rows in VehicleTypes.");
    }
    return result; // Return the count of affected rows to the caller
  },
};

module.exports = VehicleModel;
