const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('🟢 Conectado a MongoDB'))
  .catch((err) => console.error('❌ Error conectando a MongoDB:', err));

// Rutas
const authRoutes = require('./routes/auth');
const rutaProtegida = require('./routes/protegida'); // Ruta con middleware
const userRoutes = require('./routes/user');   // 🔹 NUEVA ruta para el CRUD

app.use('/api/auth', authRoutes);
app.use('/api', rutaProtegida);        // ejemplo: /api/privado
app.use('/api/usuarios', userRoutes);  // 🔹 ejemplo: /api/usuarios/:id

// Ruta base de prueba
app.get('/', (req, res) => {
  res.send('✅ API de autenticación funcionando');
});

// Arrancar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});


