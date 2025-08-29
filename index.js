require("dotenv").config();
const path = require("path");
const app = require("./src/app");

const PORT = process.env.PORT || 3000;

// Serve static frontend files from "public" folder
app.use(require("express").static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
