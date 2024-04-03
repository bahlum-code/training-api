const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cartController");

router.post("/", cartController.create);
router.post("/:id", cartController.addItem);
router.get("/", cartController.fetch);
router.delete("/:id", cartController.deleteItem);
router.delete("/", cartController.delete);
router.put("/:id", cartController.update);

module.exports = router;
