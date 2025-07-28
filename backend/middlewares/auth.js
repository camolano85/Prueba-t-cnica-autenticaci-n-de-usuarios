const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
  let token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ msg: 'Acceso denegado. Token no enviado' });
  }

  // Permite formato "Bearer token"
  if (token.startsWith('Bearer ')) {
    token = token.slice(7); // Remueve "Bearer "
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ msg: 'Token inválido o expirado' });
  }
};

module.exports = verificarToken;

