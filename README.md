# 📌 Proyecto NoSQL – App de Hábitos y Rutina Diaria  
**Scrum – Sprint 1 y Sprint 2**

---

## 📝 1. Descripción del Proyecto  
La **App de Hábitos y Rutina Diaria** es una aplicación creada con **Node.js, Express y MongoDB**, que permite registrar hábitos, filtrarlos y administrarlos mediante una interfaz web sencilla.  
El proyecto se desarrolla bajo **metodología Scrum**, dividido por roles y entregables por Sprint.

---

## 👥 2. Equipo de Trabajo

### 🧩 Product Owner – Miguel Ángel González  
- Define visión del producto.  
- Prioriza el backlog.  
- Valida historias de usuario y entregables.

### 🔧 Scrum Master / DevOps – Steven Borda  
- Facilita el marco Scrum.  
- Gestiona ramas, PR y estructura del repositorio.  
- Configura entorno (Node, .env, MongoDB).

### 💻 Desarrollador Backend – Miguel Ángel González  
- Construcción de la API REST.  
- Modelos, controladores y rutas.  
- Lógica CRUD, filtros y paginación.

### 🎨 Frontend / Tester – Zharit Feo  
- Validación visual y funcional de la interfaz.  
- Pruebas de endpoints y reporte de errores.

---

# 🚀 3. Sprint 1 – Logros Principales

### ✔ 3.1 Conexión a MongoDB  
Se integró Mongoose y variables de entorno.  
**Evidencia:**  
![Conexión MongoDB](./capturas/mongo-conexion.png)

### ✔ 3.2 Estructura base del servidor  
- Configuración de Express  
- Middleware `cors` y `express.json()`  
- Ruta de prueba funcionando

### ✔ 3.3 Repositorio GitHub operativo  
- Ramas: `main` + `feature/estructura-base`  
- Issues creados  
- HU documentadas con criterio de aceptación

### ✔ 3.4 Historias de Usuario creadas  
- Registrar hábito  
- Editar hábito  
- Eliminar hábito  
- Marcar completado  
- Ver resumen semanal

---

# 🚀 4. Sprint 2 – Logros Principales

Este Sprint se enfocó en completar la API y construir una UI funcional que consuma todos los endpoints.

---

## 🎯 4.1 CRUD completo de hábitos (Backend)

### Endpoints implementados:
- **POST** `/api/habitos` → Crear  
- **GET** `/api/habitos` → Listar  
- **GET** `/api/habitos/filtrar` → Alias para filtros  
- **PUT** `/api/habitos/:id` → Actualizar  
- **DELETE** `/api/habitos/:id` → Eliminar  

Incluye filtros por:  
✔ categoría  
✔ completado  
✔ duración mínima y máxima  
✔ paginación

---

## 🎯 4.2 Controlador avanzado con filtros + paginación  
- Filtros dinámicos construidos por query params  
- Ordenamiento por fecha  
- Respuesta estructurada `{data, total, page, totalPages}`

**Evidencia:**  
![Filtros funcionando](./capturas/filtros-browser.png)

---

## 🎯 4.3 Carpeta `public/` y UI con Fetch API  
Se implementó una interfaz web ligera que permite:

- Crear hábitos  
- Listar registros  
- Filtrar  
- Marcar como completado/pendiente  
- Eliminar  
- Recargar la lista  

Todo mediante **JavaScript puro (Fetch API)**.

**Evidencia UI:**  
![Interfaz Web funcionando](./capturas/ui-principal.png)

---

## 🎯 4.4 Integración Frontend – Backend  
`server.js` fue actualizado para servir archivos estáticos:

```js
app.use(express.static('public'));
