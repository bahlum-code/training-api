const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.post("/", userController.create);
router.get("/", userController.fetchAll);
router.get("/:id", userController.fetch);
router.put("/:id", userController.update);
router.delete("/:id", userController.delete);

module.exports = (app) => app.use("/users", router);
