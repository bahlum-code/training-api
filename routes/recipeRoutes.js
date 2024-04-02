const express = require("express");
const router = express.Router();

const recipeController = require("../controllers/recipeController");

router.post("/", recipeController.create);
router.get("/", recipeController.fetchAll);
router.get("/:id", recipeController.fetch);
router.put("/:id", recipeController.update);
router.delete("/:id", recipeController.delete);

module.exports = router;
