const express = require('express');
const router = express.Router();

// ✅ Importa ambas funciones una sola vez
const { crearUsuario, loginUsuario } = require('../controllers/authController');

// ✅ Rutas correctas
router.post('/registro', crearUsuario);
router.post('/login', loginUsuario);

module.exports = router;
