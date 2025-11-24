📝 1. Descripción del Proyecto

La App de Hábitos y Rutina Diaria es una aplicación web desarrollada con Node.js + Express + MongoDB, cuyo objetivo es permitir a los usuarios registrar sus hábitos, hacer seguimiento diario y visualizar un progreso general.

El proyecto se desarrolla bajo la metodología Scrum, aplicando buenas prácticas de trabajo colaborativo, gestión de versiones y construcción iterativa por Sprints.

🎯 2. Objetivo del Proyecto

Como usuario, quiero registrar mis hábitos y hacer seguimiento de mi progreso, para mejorar mi disciplina personal y tener una rutina más organizada.

👥 3. Equipo de Trabajo y Roles
🧩 Product Owner – Miguel Ángel González

Define la visión del producto.

Prioriza el Product Backlog.

Aprueba HU y entregables.

Supervisa que la solución cumpla los objetivos del usuario final.

🔧 Scrum Master / DevOps – Steven Borda

Facilita la metodología Scrum.

Remueve impedimentos técnicos del equipo.

Gestiona el flujo de trabajo en Git (ramas, merges, PR).

Supervisa la configuración del entorno (Node, MongoDB, .env).

💻 Desarrollador Backend – Miguel Ángel González

Desarrolla la API REST (modelos, controladores, rutas).

Implementa la lógica CRUD y filtros.

Integra MongoDB usando Mongoose.

Prueba endpoints con Postman / Thunder Client.

🎨 Desarrolladora Frontend / Tester – Zharit Feo

Valida visualización correcta de endpoints en la UI.

Prueba rutas, validaciones y estados del servidor.

Reporta errores o mejoras.

Verifica criterios de aceptación de cada HU.

🚀 4. Logros del Sprint 1 (Completados)

Este Sprint se centró en habilitar la base del proyecto para iniciar el CRUD.

✔ 4.1 Integración correcta de MongoDB

Conexión configurada con Mongoose.

Archivo .env funcional.

Prueba de conexión exitosa.

✔ 4.2 Creación del modelo inicial de hábitos

Estructura del documento en MongoDB.

Validaciones básicas.

✔ 4.3 Inicialización y configuración del servidor Express

express.json()

cors()

Ruta de prueba GET / funcionando.

✔ 4.4 Repositorio GitHub operativo

Ramas organizadas (main y ramas feature/).

Issues creados.

Colaboradores con permisos.

✔ 4.5 Historias de Usuario estructuradas

Incluyen descripción, criterios, escenarios y responsable.

🚀 5. Logros del Sprint 2 (Completados)

Este Sprint se centró en implementar la API completa, agregar filtros y paginación y construir una interfaz web funcional.

🧩 5.1 CRUD completo de Hábitos (Backend)

Se implementó el módulo completo con Express:

✔ Crear hábito

POST /api/habitos

✔ Listar hábitos con filtros y paginación

GET /api/habitos

Filtros disponibles:

categoria

completado

minDuracion

maxDuracion

page y limit

✔ Ruta alias para filtrado (requisito del Sprint)

GET /api/habitos/filtrar

✔ Actualizar hábito

PUT /api/habitos/:id
Permite:

editar título, descripción, categoría, duración

marcar completado/pendiente

✔ Eliminar hábito

DELETE /api/habitos/:id

🧩 5.2 Controlador avanzado con filtros + paginación

El controlador incorpora:

Construcción dinámica de filtros.

Conversión de tipos desde query params.

Paginación con skip y limit.

Ordenamiento por fecha.

Retorno de información estructurada:

data

total

page

totalPages

limit

Esto cumple exactamente con los puntos 3.1 a 3.3 del Sprint.

🧩 5.3 Servir interfaz web desde Express (carpeta public/)

Se añadió:

app.use(express.static('public'));


Esto permite acceder a la UI en:
👉 http://localhost:3000/index.html

🧩 5.4 Interfaz Web CRUD (HTML + JavaScript puro – Fetch API)

La interfaz incluye:

✔ Formulario para crear hábitos

Campos: título, descripción, categoría, duración.

✔ Filtros dinámicos

Categoría

Estado (completado/pendiente)

Rango de duración

✔ Listado dinámico

Cada hábito muestra:

título

categoría

duración

estado con etiqueta

botón completado/pendiente

botón eliminar

✔ Funcionalidades completas del CRUD desde la UI

Crear

Listar

Filtrar

Actualizar estado

Eliminar

Todo funcionando con Fetch API.

🧩 5.5 Pruebas del Sprint
✔ Pruebas en Postman / Thunder Client

CRUD completo

Filtros

Paginación

Validación de errores

✔ Pruebas en MongoDB Compass

Documentos insertados correctamente

Actualizaciones reflejadas

Eliminación funcionando

✔ Pruebas en la consola del servidor

Conexión exitosa

Rutas reconocidas

Sin errores de CORS o JSON

✔ Pruebas en la interfaz web

Render correcto

Acciones activas (crear, listar, actualizar, eliminar)

Filtros operacionales

📚 6. Tecnologías utilizadas

Node.js

Express

MongoDB + Mongoose

JavaScript (ES6)

HTML + CSS básico

dotenv

Postman / Thunder Client

Git & GitHub

🛠️ 7. Instalación y configuración
7.1 Clonar repositorio
git clone https://github.com/xmiguelxangelx/proyecto-nosql-equipo2.git
cd proyecto-nosql-equipo2

7.2 Instalar dependencias
npm install

7.3 Configurar variables de entorno

Crear .env basado en .env.example:

MONGO_URI=mongodb://127.0.0.1:27017/tracker_habitos
PORT=3000

7.4 Ejecutar servidor
node server.js

7.5 Abrir la interfaz web
http://localhost:3000/index.html

🎯 8. Conclusión del Sprint 2

El equipo completó con éxito:

✔ API REST con CRUD completo
✔ Controlador con filtros avanzados
✔ Paginación implementada correctamente
✔ Interfaz web funcional conectada al backend
✔ Botones de acción (completar/eliminar)
✔ Pruebas en Postman, Compass y navegador
✔ Uso correcto de variables de entorno
✔ Publicación del Sprint en GitHub

El proyecto está listo para avanzar al Sprint 3, donde se mejorará la experiencia de usuario, el diseño de la interfaz y se continuará afinando la lógica del sistema.