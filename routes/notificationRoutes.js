// routes/notificationRoutes.js
const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/notificationController");

router.post("/", notificationController.create);
router.get("/", notificationController.fetchAll);
router.get("/:id", notificationController.fetch);
router.put("/:id", notificationController.update);
router.delete("/:id", notificationController.delete);

module.exports = (app) => app.use("/notifications", router);
