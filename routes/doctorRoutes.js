const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctorController");

router.post("/", doctorController.create);
router.get("/", doctorController.fetchAll);
router.get("/:id", doctorController.fetch);
router.put("/:id", doctorController.update);
router.delete("/:id", doctorController.delete);

module.exports = (app) => app.use("/doctors", router);
