// public/app.js
const API_BASE = 'http://localhost:3000/api/habitos';

// --------------- UTIL ----------------
function buildQuery(params) {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => {
    if (v !== '' && v !== null && v !== undefined) {
      query.append(k, v);
    }
  });
  const qStr = query.toString();
  return qStr ? '?' + qStr : '';
}

// --------------- LISTAR + FILTROS ---------------
async function cargarHabitos() {
  try {
    const categoria = document.getElementById('filtro-categoria').value.trim();
    const completado = document.getElementById('filtro-completado').value;
    const minDuracion = document.getElementById('filtro-min').value;
    const maxDuracion = document.getElementById('filtro-max').value;

    const query = buildQuery({ categoria, completado, minDuracion, maxDuracion, limit: 100 });

    const respuesta = await fetch(`${API_BASE}${query}`);
    if (!respuesta.ok) throw new Error('Error en la respuesta de la API');

    const json = await respuesta.json();
    const habitos = json.data || [];

    const lista = document.getElementById('lista-habitos');
    const resumen = document.getElementById('resumen');
    lista.innerHTML = '';

    resumen.textContent = `Total: ${json.total ?? habitos.length}`;

    if (habitos.length === 0) {
      const li = document.createElement('li');
      li.textContent = 'No hay hábitos que coincidan con el filtro.';
      lista.appendChild(li);
      return;
    }

    habitos.forEach(h => {
      const li = document.createElement('li');

      const titulo = h.titulo ?? '(Sin título)';
      const categoriaTxt = h.categoria ?? 'Sin categoría';
      const duracion = h.duracionMinutos ?? 0;
      const tag = document.createElement('span');
      tag.classList.add('tag');
      if (h.completado) {
        tag.classList.add('tag-completado');
        tag.textContent = 'Completado';
      } else {
        tag.classList.add('tag-pendiente');
        tag.textContent = 'Pendiente';
      }

      const texto = document.createElement('span');
      texto.textContent = `${titulo} - ${categoriaTxt} - ${duracion} min - `;

      const acciones = document.createElement('span');
      acciones.classList.add('acciones');

      const btnToggle = document.createElement('button');
      btnToggle.textContent = h.completado ? 'Marcar pendiente' : 'Marcar completado';
      btnToggle.onclick = () => toggleCompletado(h._id, !h.completado);

      const btnEliminar = document.createElement('button');
      btnEliminar.textContent = 'Eliminar';
      btnEliminar.onclick = () => eliminarHabito(h._id);

      acciones.appendChild(btnToggle);
      acciones.appendChild(btnEliminar);

      li.appendChild(texto);
      li.appendChild(tag);
      li.appendChild(document.createTextNode(' '));
      li.appendChild(acciones);

      lista.appendChild(li);
    });
  } catch (error) {
    console.error('Error cargando hábitos:', error);
    alert('Ocurrió un error cargando los hábitos. Revisa la consola.');
  }
}

// --------------- CREAR ---------------
async function crearHabito(event) {
  event.preventDefault();
  try {
    const titulo = document.getElementById('titulo').value.trim();
    const descripcion = document.getElementById('descripcion').value.trim();
    const categoria = document.getElementById('categoria').value.trim();
    const duracion = document.getElementById('duracion').value;

    const nuevoHabito = {
      titulo,
      descripcion,
      categoria,
      duracionMinutos: Number(duracion)
    };

    const respuesta = await fetch(API_BASE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nuevoHabito)
    });

    if (!respuesta.ok) {
      const err = await respuesta.json().catch(() => ({}));
      console.error('Error en creación:', err);
      throw new Error('Error creando hábito');
    }

    document.getElementById('form-crear').reset();
    await cargarHabitos();
  } catch (error) {
    console.error('Error creando hábito:', error);
    alert('No se pudo crear el hábito.');
  }
}

// --------------- TOGGLE COMPLETADO ---------------
async function toggleCompletado(id, nuevoEstado) {
  try {
    const respuesta = await fetch(`${API_BASE}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completado: nuevoEstado })
    });

    if (!respuesta.ok) throw new Error('Error actualizando hábito');
    await cargarHabitos();
  } catch (error) {
    console.error('Error actualizando hábito:', error);
    alert('No se pudo actualizar el hábito.');
  }
}

// --------------- ELIMINAR ---------------
async function eliminarHabito(id) {
  if (!confirm('¿Seguro que deseas eliminar este hábito?')) return;

  try {
    const respuesta = await fetch(`${API_BASE}/${id}`, {
      method: 'DELETE'
    });

    if (!respuesta.ok) throw new Error('Error eliminando hábito');
    await cargarHabitos();
  } catch (error) {
    console.error('Error eliminando hábito:', error);
    alert('No se pudo eliminar el hábito.');
  }
}

// --------------- FILTROS ---------------
function limpiarFiltros() {
  document.getElementById('form-filtros').reset();
  cargarHabitos();
}

// --------------- INIT ---------------
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('form-crear').addEventListener('submit', crearHabito);
  document.getElementById('form-filtros').addEventListener('submit', (e) => {
    e.preventDefault();
    cargarHabitos();
  });

  cargarHabitos();
});
