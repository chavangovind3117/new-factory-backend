// const getAllcircles = require("../models/circlemodel");

// exports.getAllcircles = async (req, res) => {
//   try {
//     const circles = await getAllcircles.getAllcircles();

//     console.log("circle in controler : ", circles);

//     res.status(200).json({
//       success: true,
//       count: circles.length,
//       data: circles.recordset,
//       message: "Circles fetched successfully.",
//     });
//   } catch (error) {
//     console.error("Error fetching circles details:", error);

//     res.status(500).json({
//       success: false,
//       message: "Unable to fetch circles details.",
//     });
//   }
// };

const circleModel = require("../models/circlemodel.js");

exports.getAllcircles = async (req, res) => {
  try {
    const result = await circleModel.getAllcircles();

    const circles = result.recordset;

    res.status(200).json(circles);
  } catch (error) {
    console.error("Error fetching circles details:", error);

    res.status(500).json({
      success: false,
      message: "Unable to fetch circles details.",
    });
  }
};
