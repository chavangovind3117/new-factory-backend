const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const { connectToDatabase } = require("./config/database.js");
const authRoutes = require("./routes/User.js");
const growerRoutes = require("./routes/Profile.js");
const landDetails = require("./routes/LandDetails.js");
const factoryDetails = require("./routes/FactoryDetails.js");
const circleRoutes = require("./routes/circleRoutes.js");
const gutRoutes = require("./routes/gutRoutes");
const villageRoutes = require("./routes/villageRoutes.js");
const slipRoutes = require("./routes/SlipDetails.js");
const cropRoutes = require("./routes/Crops.js");
const regionRoutes = require("./routes/RegionDetails.js");
const fieldRoutes = require("./routes/FieldOverseer.js");
const factoryRoutes = require("./routes/FactoryDetails.js");
const adminRoutes = require("./routes/AdminRotes.js");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: "*" }));

// Increase request size limit
app.use(express.json({ limit: "50mb" })); // Increase JSON payload limit
app.use(express.urlencoded({ limit: "50mb", extended: true })); // Increase URL-encoded payload limit

// Middleware
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/grower", growerRoutes); // Grower routes
app.use("/api/land-details", landDetails); // LandDetails routes
app.use("/api/factories", factoryDetails);
app.use("/api/slip-details", slipRoutes);
app.use("/api/crop", cropRoutes);
app.use("/api/region", regionRoutes);
app.use("/api/field", fieldRoutes);
app.use("/api/factory", factoryRoutes);
app.use("/api/admin", adminRoutes);
// app.use("/api/circles", require("./routes/circleRoutes"));

app.use("/api/circles", circleRoutes);
app.use("/api", gutRoutes);
app.use("/api", villageRoutes);

// Start Server and Connect to Database
app.listen(PORT, "0.0.0.0", async () => {
  console.log(`Server is running on 192.168.0.191:${PORT}`);
  await connectToDatabase();
});
