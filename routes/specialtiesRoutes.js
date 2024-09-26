const express = require("express");
const router = express.Router();
const specialtiesController = require("../controllers/specialtiesController");

router.post("/", specialtiesController.create);
router.get("/", specialtiesController.fetchAll);
router.get("/:id", specialtiesController.fetch);
router.put("/:id", specialtiesController.update);
router.delete("/:id", specialtiesController.delete);

module.exports = (app) => app.use("/specialties", router);