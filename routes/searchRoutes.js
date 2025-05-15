const express = require("express");
const router = express.Router();

const searchController = require("../controllers/searchController");

// La ruta específica debe ir antes que la genérica para evitar que /:q capture /doctor/:id
router.get("/doctor/:id", searchController.getDoctorById);
router.get("/:q", searchController.search);

module.exports = (app) => app.use("/search", router); 