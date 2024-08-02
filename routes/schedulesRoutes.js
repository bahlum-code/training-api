const express = require("express");
const router = express.Router();

const scheduleController = require("../controllers/scheduleController");

router.post("/", scheduleController.create);
router.get("/:userId", scheduleController.fetch);
router.put("/citas/:id", scheduleController.update);
router.delete("/citas/:id", scheduleController.delete);

module.exports = router;





