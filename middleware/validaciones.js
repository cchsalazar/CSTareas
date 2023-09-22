// middleware/validaciones.js

// Validación de campos principales
function validarCamposPrincipales(req, res, next) {
    const { nombre, descripcion } = req.body;

    if (!nombre || !descripcion) {
        return res.status(400).json({ error: 'Los campos nombre y descripción son requeridos.' });
    }

    next();
}

// Validación de campo completada
function validarCampoCompletada(req, res, next) {
    const { completada } = req.body;

    if (typeof completada !== 'boolean') {
        return res.status(400).json({ error: 'El campo completada es requerido y debe ser boolean.' });
    }

    next();
}

module.exports = {
    validarCamposPrincipales,
    validarCampoCompletada,
};
