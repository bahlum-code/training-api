const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');

router.get('/', searchController.fetchAll);
// Ruta para la búsqueda, usando el parámetro `q`
router.get('/:q', searchController.fetch);

module.exports = (app) => app.use("/search", router);

