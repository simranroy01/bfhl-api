const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const bfhlRoutes = require("./routes/bfhl");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(morgan("dev"));

// Routes
app.use("/bfhl", bfhlRoutes);

// Error handler (unique touch)
app.use((err, req, res, next) => {
  console.error("❌ Error:", err.message);
  res.status(500).json({
    is_success: false,
    message: "Internal server error",
    details: err.message,
  });
});

module.exports = app;
