const { connectToDatabase } = require("../config/database");

// Function to execute a query with parameters
const executeQuery = async (query, parameters = []) => {
  try {
    // Establish a connection to the database
    const pool = await connectToDatabase();
    const request = pool.request();
    console.log(parameters);

    // Add parameters to the request
    parameters.forEach((param) => {
      request.input(param.name, param.type, param.value);
    });

    // Execute the query and return the result
    const result = await request.query(query);
    console.log("Recordset:", result.recordset);
    return result;
  } catch (error) {
    console.error("Database query error:", error);
    throw error;
  }
};

module.exports = { executeQuery };
