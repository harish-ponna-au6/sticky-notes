var express = require("express");
var {authenticate} = require("../middlewares/authenticate");
var {updateSticky} = require("../controllers/udpateController");

var router = express.Router();

router.put("/update-sticky/:id", authenticate, updateSticky);

module.exports = router;
