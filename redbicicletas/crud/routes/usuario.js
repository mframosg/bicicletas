const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuario");

router.get('/api/usuarios', usuarioController.list);
router.get('/api/usuarios/:id', usuarioController.show);
router.post('/api/usuarios', usuarioController.create);


module.exports = router;