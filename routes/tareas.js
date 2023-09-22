// routes/tareas.js

const express = require('express');
const router = express.Router();
const tareasController = require('../controllers/tareasController');
const { validarCamposPrincipales, validarCampoCompletada } = require('../middleware/validaciones');

// Ruta para obtener todas las tareas
router.get('/tareas', tareasController.getTareas);

// Ruta para obtener una tarea por Id
router.get('/tareas/:id', tareasController.getTareaPorId);

// Ruta para crear una nueva tarea
router.post('/tareas', validarCamposPrincipales, tareasController.crearTarea);

// Ruta para modificar una tarea por Id
router.put('/tareas/:id', validarCamposPrincipales, validarCampoCompletada, tareasController.modificarTarea)

// Ruta para eliminar una tarea por Id
router.delete('/tareas/:id', tareasController.eliminarTarea)

module.exports = router;
