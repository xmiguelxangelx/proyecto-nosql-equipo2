# 📌 Proyecto NoSQL – App de Hábitos y Rutina Diaria  
**Srum 2 – Competencia NoSQL /**

---

## 📝 1. Descripción del Proyecto  
La **App de Hábitos y Rutina Diaria** es una aplicación web desarrollada con **Node.js + Express + MongoDB**, cuyo objetivo es permitir a los usuarios registrar sus hábitos, marcar su cumplimiento diario y visualizar un progreso semanal.

Este proyecto se desarrolla bajo la **metodología Scrum**, aplicando buenas prácticas de control de versiones, organización por Sprints y tareas asignadas por roles.

---

## 🎯 2. Objetivo del Proyecto  
Como usuario, quiero registrar mis hábitos y hacer seguimiento diario de mi progreso, para llevar una rutina más organizada y mejorar mi disciplina personal.

---

## 👥 3. Equipo de Trabajo y Roles  

### 🧩 **Product Owner – Miguel Ángel González**
- Define la visión del producto.
- Prioriza el Product Backlog.
- Aprueba HU y entregables.
- Se asegura de que el producto cumpla con los objetivos del usuario final.

### 🔧 **Scrum Master / DevOps – Steven Borda**
- Facilita la metodología Scrum.
- Ayuda a remover impedimentos del equipo.
- Gestiona el tablero de tareas.
- Guía el flujo Git (ramas, merges, PR).
- Supervisa la correcta ejecución técnica del entorno (configuración Node, .env, Mongo).

### 💻 **Desarrollador Backend – Miguel Ángel González**
- Desarrolla API REST con Express.
- Crea modelos y controladores.
- Configura la conexión a MongoDB con Mongoose.
- Implementa lógica CRUD.
- Levanta el servidor y hace pruebas en Postman.

### 🎨 **Desarrolladora Frontend / Tester – Zharit Feo**
- Valida correcta visualización de endpoints.
- Prueba rutas, errores y validaciones.
- Apoya en estructura inicial del frontend.
- Reporta bugs y errores al equipo.
- Verifica criterios de aceptación de cada HU.

---

## 🚀 4. Logros del Sprint 1 (Completados)

Este Sprint se centró en **habilitar todo el entorno del proyecto** para comenzar el desarrollo del CRUD.

### ✔ 4.1 Integración correcta de MongoDB  
- Conexión establecida mediante Mongoose.  
- Variables de entorno configuradas mediante `.env` y `dotenv`.  
- Prueba de conexión **exitosa**:


### ✔ 4.3 Inicialización y configuración del servidor Express  
- Servidor creado en `server.js`
- Middleware configurado:  
  - `express.json()`  
  - `cors()`  
- Ruta de prueba funcionando:  
  - `GET / → { mensaje: "API Hábitos – Sprint 1 OK" }`

### ✔ 4.4 Repositorio GitHub completamente operativo  
- URL: https://github.com/xmiguelxangelx/proyecto-nosql-equipo2  
- Ramas organizadas (main + futuras feature branches).  
- README en progreso.  
- Issues del equipo creados.

### ✔ 4.5 Historias de Usuario creadas en GitHub  
HU realizadas en el repo:
- HU-001: Registrar usuario  
- HU-002: Registrar hábito  
- HU-003: Registro de cumplimiento diario  
- HU-004: Ver resumen semanal  
- HU-005: Editar/Eliminar hábitos  

Toda HU contiene:
- Descripción  
- Criterios de aceptación  
- Escenarios  
- Estimación  
- Responsable  

---

## 📚 5. Tecnologías utilizadas
- **Node.js**  
- **Express**  
- **MongoDB + Mongoose**  
- **JavaScript (ES6)**  
- **dotenv**  
- **Git & GitHub**  
- **VS Code**  
- **Postman (testing)**

---

## 🛠️ 6. Instalación y configuración

### 6.1 Clonar repositorio  
```bash
git clone https://github.com/xmiguelxangelx/proyecto-nosql-equipo2.git
cd proyecto-nosql-equipo2
