// src/controllers/habitoController.js
const Habito = require('../models/habito');

// GET /api/habitos  (con filtros + paginación)
const obtenerHabitos = async (req, res) => {
  try {
    const { categoria, completado, minDuracion, maxDuracion, page = 1, limit = 10 } = req.query;

    const filtros = {};

    if (categoria) filtros.categoria = categoria;
    if (completado !== undefined && completado !== '') {
      filtros.completado = completado === 'true';
    }
    if (minDuracion) {
      filtros.duracionMinutos = { $gte: Number(minDuracion) };
    }
    if (maxDuracion) {
      filtros.duracionMinutos = {
        ...(filtros.duracionMinutos || {}),
        $lte: Number(maxDuracion),
      };
    }

    const pageNumber = Number(page) || 1;
    const limitNumber = Number(limit) || 10;
    const skip = (pageNumber - 1) * limitNumber;

    const [habitos, total] = await Promise.all([
      Habito.find(filtros)
        .sort({ fechaRegistro: -1 })
        .skip(skip)
        .limit(limitNumber),
      Habito.countDocuments(filtros),
    ]);

    const totalPages = Math.ceil(total / limitNumber);

    res.json({
      data: habitos,
      total,
      page: pageNumber,
      totalPages,
      limit: limitNumber,
    });
  } catch (error) {
    console.error('Error obteniendo hábitos:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};

// POST /api/habitos  (crear nuevo hábito)
const crearHabito = async (req, res) => {
  try {
    const { titulo, descripcion, categoria, duracionMinutos } = req.body;

    const nuevoHabito = new Habito({
      titulo,
      descripcion,
      categoria,
      duracionMinutos,
    });

    const habitoGuardado = await nuevoHabito.save();
    res.status(201).json(habitoGuardado);
  } catch (error) {
    console.error('Error creando hábito:', error);

    if (error.name === 'ValidationError') {
      const errores = Object.values(error.errors).map(e => e.message);
      return res.status(400).json({
        message: 'Datos inválidos',
        errors: errores,
      });
    }

    res.status(500).json({ message: 'Error del servidor' });
  }
};

// PUT /api/habitos/:id (actualizar un hábito)
const actualizarHabito = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, descripcion, categoria, duracionMinutos, completado } = req.body;

    const habitoActualizado = await Habito.findByIdAndUpdate(
      id,
      {
        titulo,
        descripcion,
        categoria,
        duracionMinutos,
        completado
      },
      { new: true, runValidators: true }
    );

    if (!habitoActualizado) {
      return res.status(404).json({ message: 'Hábito no encontrado' });
    }

    res.json(habitoActualizado);
  } catch (error) {
    console.error('Error actualizando hábito:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};

// DELETE /api/habitos/:id (eliminar un hábito)
const eliminarHabito = async (req, res) => {
  try {
    const { id } = req.params;

    const habitoEliminado = await Habito.findByIdAndDelete(id);

    if (!habitoEliminado) {
      return res.status(404).json({ message: 'Hábito no encontrado' });
    }

    res.json({ message: 'Hábito eliminado correctamente' });
  } catch (error) {
    console.error('Error eliminando hábito:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};

module.exports = {
  obtenerHabitos,
  crearHabito,
  actualizarHabito,
  eliminarHabito
};
