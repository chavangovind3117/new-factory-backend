const { executeQuery } = require("./db.js");
const { sql } = require("../config/database.js");

const SlipDetails = {

    create: async (fieldOverseerName, growerName, growerID, landID, tonnage, transporterName, harvesterName, factoryName, distance,) => {

        const query = `INSERT INTO SlipDetails (FieldOverseerName,GrowerName, GrowerID, LandID, Tonnage, TransporterName, HarvesterName, FactoryName, DistanceFromFactoryInKM)
            VALUES (@fieldOverseerName,@growerName, @growerID, @landID, @tonnage, @transporterName, @harvesterName, @factoryName, @distance)`;

        const params = [
            { name: "fieldOverseerName", type: sql.VarChar, value: fieldOverseerName },
            { name: "growerName", type: sql.VarChar, value: growerName },
            { name: "growerID", type: sql.Int, value: growerID },
            { name: "landID", type: sql.Int, value: landID },
            { name: "tonnage", type: sql.VarChar, value: tonnage },
            { name: "transporterName", type: sql.VarChar, value: transporterName },
            { name: "harvesterName", type: sql.VarChar, value: harvesterName },
            { name: "factoryName", type: sql.VarChar, value: factoryName },
            { name: "distance", type: sql.VarChar, value: distance },
        ];
        const result = await executeQuery(query, params);

        if (!result) {
            throw new Error("No rows were inserted into SlipDetails.");
        }

        return result; // Return the count of affected rows to the caller

    },
}

module.exports = SlipDetails;