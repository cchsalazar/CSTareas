// controllers/tareasController.js

const tareas = [];

// Función de utilidad para buscar una tarea por ID
function findTareaById(id) {
    return tareas.find((t) => t.id === parseInt(id));
}

// Función de utilidad para encontrar el índice de una tarea por ID
function findIndexTareaById(id) {
    return tareas.findIndex((t) => t.id === parseInt(id));
}

// Función para obtener todas las tareas
function getTareas(req, res) {
    res.json(tareas);
}

// Función para obtener una tarea por Id
function getTareaPorId(req, res) {
    const tarea = findTareaById(req.params.id);
    if (!tarea) {
        return res.status(404).send('Tarea no encontrada');
    }
    res.json(tarea);
}

// Función para crear una nueva tarea
function crearTarea(req, res) {
    const nuevaTarea = {
        id: tareas.length + 1,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        fechaCreacion: new Date(),
        completada: false
    }
    tareas.push(nuevaTarea);
    res.status(201).json(nuevaTarea);
}

// Función para modificar una tarea por Id
function modificarTarea(req, res) {
    const tarea = findTareaById(req.params.id);
    if (!tarea) {
        return res.status(404).send('Tarea no encontrada');
    }
    tarea.nombre = req.body.nombre;
    tarea.descripcion = req.body.descripcion;
    tarea.completada = req.body.completada;
    res.json(tarea);
}

function eliminarTarea(req, res) {
    const index = findIndexTareaById(req.params.id);
    if (index === -1) {
        return res.status(404).send('Tarea no encontrada');
    }
    tareas.splice(index, 1);
    res.status(204).send();
}

module.exports = {
    getTareas,
    getTareaPorId,
    crearTarea,
    modificarTarea,
    eliminarTarea
};
