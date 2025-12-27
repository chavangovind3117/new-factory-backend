const { executeQuery } = require("./db.js");
const { sql } = require("../config/database.js");

const User = {
    findByUsernameAndRole: async (username, password, role) => {
        // console.log("username", username, "password", password, "role", role);
        const query = `SELECT * FROM Users WHERE Username = @username AND Password = @password AND Role LIKE '%' + @role + '%'`;
        const params = [
            { name: "username", type: sql.NVarChar, value: username },
            { name: "password", type: sql.NVarChar, value: password },
            { name: "role", type: sql.NVarChar, value: role },
        ];
        const result = await executeQuery(query, params);
        if (!result || result.length === 0) {
            throw new Error("No user found in userDetails.");
        }

        return result;
    },

    // findById: async (userId) => {
    //     const query = `SELECT * FROM Users WHERE UserID = @userId`;

    //     const params = [{ name: "userId", type: sql.Int, value: userId }];
    //     return await executeQuery(query, params);
    // },


};

module.exports = User;