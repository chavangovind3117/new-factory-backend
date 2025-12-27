const User = require("../models/User");

exports.login = async (req, res) => {
    const { username, password, role } = req.body;

    try {
        const result = await User.findByUsernameAndRole(username, password, role);
        // console.log(result)
        if (result.recordset.length === 0) {
            return res.status(401).json({
                message: "Invalid credentials or role."
            });
        }

        const user = result.recordset[0];
        if (user.Password !== password) {
            return res.status(401).json({
                message: "Invalid password."
            });
        }

        res.status(200).json({
            message: "Login successful!",
            user
        });
    } catch (error) {
        res.status(500).json({
            message: "Server error.",
            error
        });
    }
};


