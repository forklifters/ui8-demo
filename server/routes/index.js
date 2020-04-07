const express = require("express");
const router = express.Router();

const homeController = require("../controllers/home");

/* GET home page. */
router.get("*", homeController.index);

module.exports = router;
