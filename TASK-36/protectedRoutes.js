const express = require("express");

const protect = require("../middleware/authMiddleware");
const {
  getProtectedData
} = require("../controllers/protectedController");

const router = express.Router();

// Protected route
router.get("/", protect, getProtectedData);

module.exports = router;