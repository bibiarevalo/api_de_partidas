const express = require("express");
const router = express.Router();
const controller = require('./controller.js');

router.get("", controller.listPartidas);
router.get("/:Time", controller.getTime);

module.exports = router;