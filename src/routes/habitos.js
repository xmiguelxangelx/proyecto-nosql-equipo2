// src/routes/habitos.js
const express = require('express');
const router = express.Router();

// Importar el controlador de hábitos
const habitoController = require('../controllers/habitoController');

// Middleware de debug (temporal)
router.use((req, res, next) => {
  console.log('🛰  Router hábitos ->', req.method, req.path);
  next();
});

// GET /api/habitos  -> listar con filtros y paginación
router.get('/', habitoController.obtenerHabitos);

// GET /api/habitos/filtrar -> alias de filtrado (para la guía del Sprint)
router.get('/filtrar', habitoController.obtenerHabitos);

// POST /api/habitos -> crear nuevo hábito
router.post('/', habitoController.crearHabito);

// PUT /api/habitos/:id -> actualizar hábito
router.put('/:id', habitoController.actualizarHabito);

// DELETE /api/habitos/:id -> eliminar hábito
router.delete('/:id', habitoController.eliminarHabito);

// Ruta de prueba opcional
router.get('/ping', (req, res) => {
  res.json({ ok: true, mensaje: 'Router de hábitos funcionando' });
});

module.exports = router;
