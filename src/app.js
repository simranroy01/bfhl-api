const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const bfhlRoute = require("./routes/bfhl");

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());

// Default root route
app.get("/", (req, res) => {
  res.json({
    message: "🚀 Welcome to BFHL API",
    usage: {
      test_api: "/bfhl (POST)",
      example_payload: { data: ["a", "1", "334", "4", "R", "$"] }
    },
    note: "You can also visit the frontend at / (served from public/index.html)"
  });
});

// Routes
app.use("/bfhl", bfhlRoute);

// Error handler (catch-all)
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

module.exports = app;

