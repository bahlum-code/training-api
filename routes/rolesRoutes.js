const express = require("express");
const router = express.Router();

const rolesContoller = require("../controllers/rolesController");

router.post("/", rolesContoller.create);
router.get("/", rolesContoller.fetchAll);
router.get("/:id", rolesContoller.fetch);
router.put("/:id", rolesContoller.update);
router.delete("/:id", rolesContoller.delete);

module.exports = router;
