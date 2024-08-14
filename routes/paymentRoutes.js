// routes/paymentRoutes.js
const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");

router.post("/", paymentController.create);
router.get("/", paymentController.fetchAll);
router.get("/:id", paymentController.fetch);
router.put("/:id", paymentController.update);
router.delete("/:id", paymentController.delete);

module.exports = router;
