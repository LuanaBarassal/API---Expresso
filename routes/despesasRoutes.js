const express = require('express');
const router = express.Router();
const despesasController = require('../controllers/despesasController');

router.post('/', despesasController.criarDespesa);
router.get('/', despesasController.listarDespesas);

module.exports = router;