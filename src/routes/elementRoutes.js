const express = require("express");
const router = express.Router();
const { getAllElements, createElement } = require("@controllers/elementController"); // Alterado de testController para elementController

// Rota para buscar todos os elementos
router.get("/elements", getAllElements); // Alterado de tests para elements

// Rota para criar um novo elemento
router.post("/elements", createElement); // Alterado de tests para elements

module.exports = router;
