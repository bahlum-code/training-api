const express = require("express");
const router = express.Router();

const billingController = require("../controllers/billingController");

router.post("/", billingController.create);
router.get("/", billingController.fetchAll);
router.get("/:id", billingController.fetch);

module.exports = router;
