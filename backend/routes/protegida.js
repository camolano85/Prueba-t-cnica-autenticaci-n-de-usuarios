const express = require('express');
const router = express.Router();
const verificarToken = require('../middlewares/auth');

router.get('/privado', verificarToken, (req, res) => {
  res.json({
    msg: 'Accediste a una ruta protegida ✔️',
    usuarioId: req.usuario.uid
  });
});

module.exports = router;
