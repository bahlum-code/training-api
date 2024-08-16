// routes/doctorAvailabilityRoutes.js
const express = require("express");
const router = express.Router();
const doctorAvailabilityController = require("../controllers/doctorAvailabilityController");

router.post("/", doctorAvailabilityController.create);
router.get("/", doctorAvailabilityController.fetchAll);
router.get("/:id", doctorAvailabilityController.fetch);
router.put("/:id", doctorAvailabilityController.update);
router.delete("/:id", doctorAvailabilityController.delete);

module.exports = (app) => app.use("/doctor-availabilities", router);
