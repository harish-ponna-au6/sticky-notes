const  express = require("express");
const  router = express.Router();
const {authenticate} = require("../middlewares/authenticate")
const  {renderDashboard,renderCreateSticky,renderViewSticky,renderUpdateSticky} = require("../controllers/getController");

router.get("/dashboard", authenticate, renderDashboard);
router.get("/create-sticky", authenticate, renderCreateSticky);
router.get("/view-sticky", authenticate, renderViewSticky)
router.get("/update-sticky", authenticate, renderUpdateSticky)

module.exports = router;
