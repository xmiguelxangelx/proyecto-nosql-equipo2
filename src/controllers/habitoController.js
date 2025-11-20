const Habito = require('../models/habito');

// GET /api/habitos  (con filtros + paginación)
const obtenerHabitos = async (req, res) => {
  try {
    const { categoria, completado, minDuracion, maxDuracion, page = 1, limit = 10 } = req.query;

    const filtros = {};

    if (categoria) filtros.categoria = categoria;
    if (completado !== undefined) filtros.completado = completado === 'true';
    if (minDuracion) filtros.duracionMinutos = { $gte: Number(minDuracion) };
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

// POST /api/habitos
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

module.exports = {
  obtenerHabitos,
  crearHabito,
};
