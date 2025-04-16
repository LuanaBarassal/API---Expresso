const express = require('express');
const router = express.Router();
const viagensController = require('../controllers/viagensController');

router.post('/', viagensController.criarViagem);
router.get('/', viagensController.listarViagens);

module.exports = router;