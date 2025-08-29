const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const bfhlRoute = require("./routes/bfhl");

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());

// Serve the BFHL API logic at /bfhl
app.use("/bfhl", bfhlRoute);

// Info route (returns JSON welcome message)
app.get("/info", (req, res) => {
  res.json({
    message: "🚀 Welcome to BFHL API",
    usage: {
      test_api: "/bfhl (POST)",
      example_payload: { data: ["a", "1", "334", "4", "R", "$"] }
    },
    note: "Visit / in your browser to use the frontend tester (index.html)"
  });
});

// Catch-all for invalid routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

module.exports = app;

