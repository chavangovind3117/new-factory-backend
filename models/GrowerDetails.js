const { executeQuery } = require("./db.js");
const { sql } = require("../config/database.js");

const GrowerDetails = {
  create: async (
    GrowerNameD,
    address,
    village,
    taluka,
    district,
    state,
    pinCode,
    photo,
    season,
    seasonStart,
    seasonEnd,
  ) => {
    const query = `INSERT INTO GrowerDetails (FullName, Grower_Address, Village, Taluka, District, State, PinCode, PhotoUrl,season,seasonStart,seasonEnd,createdDate)
        OUTPUT INSERTED.GrowerID
        VALUES (@fullName, @address, @village, @taluka, @district, @state, @pinCode, @photo, @season, @seasonStart, @seasonEnd,GETDATE())`;

    const params = [
      { name: "fullName", type: sql.VarChar, value: fullName },
      { name: "address", type: sql.VarChar, value: address },
      { name: "village", type: sql.VarChar, value: village },
      { name: "taluka", type: sql.VarChar, value: taluka },
      { name: "district", type: sql.VarChar, value: district },
      { name: "state", type: sql.VarChar, value: state },
      { name: "pinCode", type: sql.Int, value: pinCode },
      { name: "photo", type: sql.VarChar, value: photo },
      { name: "season", type: sql.VarChar, value: season },
      { name: "seasonStart", type: sql.Date, value: seasonStart },
      { name: "seasonEnd", type: sql.Date, value: seasonEnd },
    ];
    const result = await executeQuery(query, params);

    if (!result) {
      throw new Error("No rows were inserted into GrowerDetails.");
    }

    return result; // Return the count of affected rows to the caller
  },

  getAllGrowers: async () => {
    const query = `select GrowerCode,GrowerName from growermaster`;
    const result = await sql.query(query);

    if (result.recordset.length === 0) {
      throw new Error("No rows in growermaster.");
    }

    return result; // Return the count of affected rows to the caller
  },

  getGrowerDetails: async (GrowerCode) => {
    const query = `SELECT * FROM growermaster WHERE GrowerCode = @GrowerCode`;

    const params = [{ name: "GrowerCode", type: sql.Int, value: GrowerCode }];
    const result = await executeQuery(query, params);

    if (result.recordset.length === 0) {
      throw new Error("No rows in Growermaster.");
    }

    return result; // Return the count of affected rows to the caller
  },

  getGrowersByVillageCode: async (VillageCode) => {
    const query = `SELECT Distinct GrowerCode, GrowerName, GrowerNameD FROM growermaster WHERE fkvillagecode = @VillageCode`;

    const params = [{ name: "VillageCode", type: sql.Int, value: VillageCode }];
    const result = await executeQuery(query, params);

    if (result.recordset.length === 0) {
      throw new Error("No rows in GrowermasterByVillageCode.");
    }

    return result; // Return the count of affected rows to the caller
  },

  update: async (
    growerID,
    fullName,
    address,
    village,
    taluka,
    district,
    state,
    pinCode,
    photo,
    season,
    seasonStart,
    seasonEnd,
  ) => {
    const query = `UPDATE GrowerDetails 
         SET FullName = @fullName, Grower_Address = @address, Village = @village, Taluka = @taluka, 
             District = @district, State = @state, PinCode = @pinCode, PhotoUrl = @photo, season = @season, seasonStart = @seasonStart, seasonEnd = @seasonEnd,modifiedDate = GETDATE()
         WHERE GrowerID = @growerID`;

    const params = [
      { name: "growerID", type: sql.Int, value: growerID },
      { name: "fullName", type: sql.VarChar, value: fullName },
      { name: "address", type: sql.VarChar, value: address },
      { name: "village", type: sql.VarChar, value: village },
      { name: "taluka", type: sql.VarChar, value: taluka },
      { name: "district", type: sql.VarChar, value: district },
      { name: "state", type: sql.VarChar, value: state },
      { name: "pinCode", type: sql.Int, value: pinCode },
      { name: "photo", type: sql.VarChar, value: photo },
      { name: "season", type: sql.VarChar, value: season },
      { name: "seasonStart", type: sql.Date, value: seasonStart },
      { name: "seasonEnd", type: sql.Date, value: seasonEnd },
    ];
    const result = await executeQuery(query, params);

    if (!result) {
      throw new Error("No rows were updated into GrowerDetails.");
    }

    return result; // Return the count of affected rows to the caller
  },
};

module.exports = GrowerDetails;
