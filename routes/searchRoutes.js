const express = require("express");
const router = express.Router();
const searchController = require("../controllers/searchController");

router.get("/search/:q", searchController.search);

module.exports = (app) => app.use("/doctors", router);
