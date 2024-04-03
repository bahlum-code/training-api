const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

router.post("/", productController.create);
router.get("/add-products-db", productController.addProductsToDB);
router.get("/", productController.fetchAll);
router.delete("/:id", productController.delete);
router.get("/:id", productController.fetch);
router.put("/:id", productController.update);

module.exports = router;
