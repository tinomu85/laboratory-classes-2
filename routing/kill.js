const express = require("express");
const logger = require("../utils/logger");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(logger.getProcessLog("Kill Process"));
  process.exit(0);
});

module.exports = router;
