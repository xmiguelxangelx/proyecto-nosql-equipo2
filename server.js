
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// 👉 IMPORTAR LAS RUTAS DE HÁBITOS
const habitosRoutes = require('./src/routes/habitos');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// 👉 NUEVO: servir la carpeta "public"
app.use(express.static('public'));

// Conexión a MongoDB
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/tracker_habitos';

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => console.error('❌ Error conectando a MongoDB:', err.message));

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ ok: true, mensaje: 'API Hábitos & Tareas funcionando' });
});

// 👉 USAR LAS RUTAS CON EL PREFIJO /api/habitos
app.use('/api/habitos', habitosRoutes);

// Puerto (SOLO AQUÍ)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});
