const sql = require("mssql");
require("dotenv").config();

const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT), // Ensure it's a number
    options: {
        encrypt: true,
        trustServerCertificate: true,
        connectTimeout: 30000,
    },
};

const connectToDatabase = async () => {
    try {
        const pool = await sql.connect(dbConfig);
        console.log("Connected to MSSQL Database");
        return pool; // Return the connection pool
    } catch (err) {
        console.error("Database connection failed:", err.message);
    }
};



module.exports = { connectToDatabase, sql };
