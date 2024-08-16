// routes/appointmentRoutes.js
const express = require("express");
const router = express.Router();
const appointmentController = require("../controllers/appointmentController");

router.post("/", appointmentController.create);
router.get("/", appointmentController.fetchAll);
router.get("/:id", appointmentController.fetch);
router.put("/:id", appointmentController.update);
router.delete("/:id", appointmentController.delete);

module.exports = (app) => app.use("/appointments", router);
