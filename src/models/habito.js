const mongoose = require('mongoose');

const HabitoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,      // El hábito debe tener un título
    trim: true,          // Quita espacios al inicio y al final
    minlength: 3         // Mínimo 3 caracteres
  },
  descripcion: {
    type: String,
    trim: true,
    minlength: 5         // Opcional, pero si la escriben que tenga al menos 5 caracteres
  },
  categoria: {
    type: String,
    required: true,      // Ej: "Salud", "Productividad", "Estudio"
    trim: true
  },
  duracionMinutos: {
    type: Number,
    required: true,      // Cuánto tiempo se quiere dedicar al hábito
    min: 0               // No permite valores negativos
  },
  completado: {
    type: Boolean,
    default: false       // Por defecto el hábito se crea como no completado
  },
  fechaRegistro: {
    type: Date,
    default: Date.now    // Se asigna automáticamente la fecha actual
  }
});

module.exports = mongoose.model('Habito', HabitoSchema);
