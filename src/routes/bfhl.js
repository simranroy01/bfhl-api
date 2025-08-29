const express = require("express");
const router = express.Router();

const { processData } = require("../controllers/bfhlController");

// POST /bfhl
router.post("/", processData);

module.exports = router;
