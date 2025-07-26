// routes/user.js
const express = require('express');
const router = express.Router();
const {
  obtenerUsuarios,
  obtenerUsuario,
  actualizarUsuario,
  eliminarUsuario
} = require('../controllers/userController');
const authMiddleware = require('../middlewares/auth');

// Todas las rutas están protegidas
router.get('/', authMiddleware, obtenerUsuarios);       // GET /api/usuarios
router.get('/:id', authMiddleware, obtenerUsuario);     // GET /api/usuarios/:id
router.put('/:id', authMiddleware, actualizarUsuario);  // PUT /api/usuarios/:id
router.delete('/:id', authMiddleware, eliminarUsuario); // DELETE /api/usuarios/:id

module.exports = router;
