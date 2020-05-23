const express = require("express");
const router = express.Router();
const { authenticate } = require("../middlewares/authenticate")
const { logout ,deleteSticky,deleteStickyFetch} = require("../controllers/deleteController");

router.delete("/logout", authenticate, logout)
router.delete("/delete-sticky/:id", authenticate, deleteSticky)
router.delete("/delete-sticky-fetch/:id", deleteStickyFetch)

module.exports = router