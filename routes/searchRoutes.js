const express = require("express");
const router = express.Router();
const searchController = require("../controllers/searchController");

router.get("/:q", searchController.search);

module.exports = (app) => app.use("/searches", router);
