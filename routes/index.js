const express = require("express");
const controllers = require("../controllers/index.js");

const router = express.Router();

router.get("/api", controllers.testing);

module.exports = router;
