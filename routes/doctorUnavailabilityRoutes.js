// routes/doctorUnavailabilityRoutes.js
const express = require("express");
const router = express.Router();
const doctorUnavailabilityController = require("../controllers/doctorUnavailabilityController");

router.post("/", doctorUnavailabilityController.create);
router.get("/", doctorUnavailabilityController.fetchAll);
router.get("/:id", doctorUnavailabilityController.fetch);
router.put("/:id", doctorUnavailabilityController.update);
router.delete("/:id", doctorUnavailabilityController.delete);

module.exports = router;
