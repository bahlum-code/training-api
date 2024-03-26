const express = require("express");
const router = express.Router();

const orderController = require("../controllers/orderController");

router.post("/", orderController.create);
router.delete("/:id", orderController.delete);
router.get("/:id", orderController.fetch);
router.put("/:id", orderController.update);

module.exports = router;
