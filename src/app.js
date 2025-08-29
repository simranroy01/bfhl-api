const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const bfhlRoute = require("./routes/bfhl");

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());

// API routes
app.use("/bfhl", bfhlRoute);

// Info route (JSON welcome message)
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

// ⚠️ Remove the catch-all here
// The 404 handler should stay in index.js, *after* static middleware if needed

module.exports = app;
