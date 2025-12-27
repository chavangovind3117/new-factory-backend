const { executeQuery } = require("./db.js");
const { sql } = require("../config/database.js");

const LandDetails = {

    create: async (growerID, cropType, cropCategory, totalAreaInHectare,
        totalAreaInAcre, totalAreaInGunta, coordinatesString) => {

        const query = `INSERT INTO LandDetails (GrowerID ,CropType, CropCategory, TotalAreaInHectare, TotalAreaInAcre, TotalAreaInGunta, Coordinates) 
         VALUES (@growerID, @cropType, @cropCategory, @totalAreaInHectare, @totalAreaInAcre, @totalAreaInGunta, @coordinatesString)`;

        const params = [
            { name: "growerID", type: sql.Int, value: growerID },
            { name: "cropType", type: sql.VarChar, value: cropType },
            { name: "cropCategory", type: sql.VarChar, value: cropCategory },
            { name: "totalAreaInHectare", type: sql.Float, value: totalAreaInHectare },
            { name: "totalAreaInAcre", type: sql.Float, value: totalAreaInAcre },
            { name: "totalAreaInGunta", type: sql.Float, value: totalAreaInGunta },
            { name: "coordinatesString", type: sql.VarChar, value: coordinatesString },
        ];
        const result = await executeQuery(query, params);

        if (!result) {
            throw new Error("No rows were inserted into LandDetails.");
        }

        return result; // Return the count of affected rows to the caller

    },

    update: async (landID, growerID, fieldOverseerName, cropType, cropCategory, cropHealth, cropStage, totalAreaInHectare,
        totalAreaInAcre, totalAreaInGunta, gatNumber, expectedWeight, factoryMember) => {

        const query = `UPDATE LandDetails 
         SET FieldOverseerName = @fieldOverseerName, CropType = @cropType, CropCategory = @cropCategory, CropHealth = @cropHealth, 
             CropStage = @cropStage, TotalAreaInHectare = @totalAreaInHectare, 
             TotalAreaInAcre = @totalAreaInAcre, TotalAreaInGunta = @totalAreaInGunta, 
             GatNumber = @gatNumber, ExpectedWeight = @expectedWeight, FactoryMember = @factoryMember 
         WHERE LandID = @landID AND GrowerID = @growerID`;

        const params = [
            { name: "landID", type: sql.Int, value: landID },
            { name: "growerID", type: sql.Int, value: growerID },
            { name: "fieldOverseerName", type: sql.VarChar, value: fieldOverseerName || null },
            { name: "cropType", type: sql.VarChar, value: cropType },
            { name: "cropCategory", type: sql.VarChar, value: cropCategory },
            { name: "cropHealth", type: sql.VarChar, value: cropHealth || null },
            { name: "cropStage", type: sql.VarChar, value: cropStage || null },
            { name: "totalAreaInHectare", type: sql.Float, value: totalAreaInHectare },
            { name: "totalAreaInAcre", type: sql.Float, value: totalAreaInAcre },
            { name: "totalAreaInGunta", type: sql.Float, value: totalAreaInGunta },
            { name: "gatNumber", type: sql.VarChar, value: gatNumber },
            { name: "expectedWeight", type: sql.VarChar, value: expectedWeight },
            { name: "factoryMember", type: sql.VarChar, value: factoryMember },
        ];
        const result = await executeQuery(query, params);

        if (!result) {
            throw new Error("No rows were inserted into LandDetails.");
        }

        return result; // Return the count of affected rows to the caller
    },

    updateArea: async (landID, totalAreaInHectare,
        totalAreaInAcre, totalAreaInGunta, coordinatesString) => {

        const query = `UPDATE LandDetails 
         SET TotalAreaInHectare = @totalAreaInHectare, 
             TotalAreaInAcre = @totalAreaInAcre, TotalAreaInGunta = @totalAreaInGunta, Coordinates = @coordinatesString
         WHERE LandID = @landID`;

        const params = [
            { name: "landID", type: sql.Int, value: landID },
            { name: "totalAreaInHectare", type: sql.Float, value: totalAreaInHectare },
            { name: "totalAreaInAcre", type: sql.Float, value: totalAreaInAcre },
            { name: "totalAreaInGunta", type: sql.Float, value: totalAreaInGunta },
            { name: "coordinatesString", type: sql.VarChar, value: coordinatesString },
        ];
        const result = await executeQuery(query, params);

        if (!result) {
            throw new Error("No rows were inserted into LandArea.");
        }

        return result; // Return the count of affected rows to the caller
    },

    findLandIds: async (growerID) => {
        const query = `SELECT LandID FROM LandDetails WHERE GrowerID = @growerID`;

        const params = [{ name: "growerID", type: sql.Int, value: growerID }];
        const result = executeQuery(query, params);

        if (!result) {
            throw new Error("No rows were inserted into LandDetails.");
        }

        return result;
    },

    findLandDetails: async (growerID, landID) => {
        const query = `SELECT * FROM LandDetails WHERE GrowerID = @growerID AND LandID = @landID`;

        const params = [
            { name: "growerID", type: sql.Int, value: growerID },
            { name: "landID", type: sql.Int, value: landID }
        ];
        const result = executeQuery(query, params);

        if (!result) {
            throw new Error("No rows were inserted into LandDetails.");
        }

        return result;
    },


};

module.exports = LandDetails;