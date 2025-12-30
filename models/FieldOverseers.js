const { executeQuery } = require("./db.js");
const { sql } = require("../config/database.js");

const FieldOverseers = {
  getAllFieldOverseers: async () => {
    const query = "SELECT * FROM FieldOverseers";
    const result = await executeQuery(query);

    if (!result || result.length === 0) {
      throw new Error("No factories found in FieldOverseers.");
    }

    return result;
  },

  createFieldSurvey: async (
    userID,
    fieldOverseerName,
    circleID,
    gutCode,
    villageCode,
    growerCode,
    cropType,
    cropCategory,
    expectedWeight,
    factoryMember,
    totalAreaInHectare,
    coordinates
  ) => {
    const query = `
    INSERT INTO FieldSurvey (
      CreatedBy,
      FieldOverseerName,
      CircleID,
      GutCode,
      VillageCode,
      GrowerCode,
      CropType,
      CropCategory,
      ExpectedWeight,
      FactoryMember,
      TotalAreaInHectare,
      Coordinates
    )
    OUTPUT INSERTED.FieldSurveyID
    VALUES (
      @CreatedBy,
      @FieldOverseerName,
      @CircleID,
      @GutCode,
      @VillageCode,
      @GrowerCode,
      @CropType,
      @CropCategory,
      @ExpectedWeight,
      @FactoryMember,
      @TotalAreaInHectare,
      @Coordinates
    );
  `;

    const params = [
      { name: "CreatedBy", type: sql.Int, value: userID },
      {
        name: "FieldOverseerName",
        type: sql.NVarChar(100),
        value: fieldOverseerName,
      },
      { name: "CircleID", type: sql.Int, value: circleID },
      { name: "GutCode", type: sql.NVarChar(50), value: String(gutCode) },
      { name: "VillageCode", type: sql.Int, value: villageCode },
      { name: "GrowerCode", type: sql.Int, value: growerCode },
      { name: "CropType", type: sql.NVarChar(100), value: cropType },
      { name: "CropCategory", type: sql.NVarChar(100), value: cropCategory },

      // keep STRING (as discussed)
      { name: "ExpectedWeight", type: sql.NVarChar(50), value: expectedWeight },

      { name: "FactoryMember", type: sql.NVarChar(10), value: factoryMember },

      {
        name: "TotalAreaInHectare",
        type: sql.Decimal(12, 6),
        value: totalAreaInHectare,
      },

      {
        name: "Coordinates",
        type: sql.NVarChar(sql.MAX),
        value: JSON.stringify(coordinates),
      },
    ];

    const result = await executeQuery(query, params);

    if (!result || !result.recordset || result.recordset.length === 0) {
      throw new Error("No rows were inserted into FieldSurvey.");
    }

    return result; // contains INSERTED.FieldSurveyID
  },
};

module.exports = FieldOverseers;
