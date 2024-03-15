const express = require('express');
const router = express.Router();
const usuariosControllers = require('../controllers/usuarios.c')

// Registrar Usuarios
router.post('/registrar', function(req, res, next) {
    usuariosControllers.registrar(req.body)
    .then((resultado) => {
        res.status(201).json({"usuario_registrado": resultado, "mensaje": "Registrado con exito"})
    })
    .catch((error) => {
        res.status(400).json({"error": error})
    })
});

// Iniciar Sesion
router.post('/acceder', function(req, res, next) {
    usuariosControllers.acceder(req.body)
    .then((resultado) => {
        res.status(200).json({"inicio_sesion": resultado, "mensaje": "Has iniciado sesion con exito"})
    })
    .catch((error) => {
        res.status(400).json({mensaje: error})
    })
});

module.exports = router;
