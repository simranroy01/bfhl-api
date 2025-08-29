require("dotenv").config();
const path = require("path");
const express = require("express");
const app = require("./src/app");

const PORT = process.env.PORT || 3000;

// Serve static frontend files (index.html inside public)
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
