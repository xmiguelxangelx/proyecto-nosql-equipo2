const express = require('express');
const router = express.Router();

// Importar el controlador
const habitoController = require('../controllers/habitoController');

// GET /api/habitos  -> listar con filtros y paginación
router.get('/', habitoController.obtenerHabitos);

// POST /api/habitos -> crear nuevo hábito
router.post('/', habitoController.crearHabito);

// (opcional) ruta de prueba
router.get('/ping', (req, res) => {
  res.json({ ok: true, mensaje: 'Router de hábitos funcionando' });
});
// PUT
router.put('/:id', habitoController.actualizarHabito);
module.exports = router;
