var express = require("express");
var {authenticate} = require("../middlewares/authenticate");
var {postRegister,postLogin, postCreateSticky} = require("../controllers/postController");

var router = express.Router();

router.post("/register", postRegister);

router.post("/login", postLogin);

router.post("/create-sticky", postCreateSticky);


module.exports = router;
