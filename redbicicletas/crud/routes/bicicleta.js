const express = require("express");
const router = express.Router();
const bicicletaController = require("../controllers/bicicleta");

router.get("/api/bicicletas/list", bicicletaController.list);
router.post("/api/bicicletas/create", bicicletaController.create);
router.get("/api/bicicletas/:id/show", bicicletaController.show);
router.put("/api/bicicletas/:id/update", bicicletaController.update);
router.delete("/api/bicicletas/:id/delete", bicicletaController.delete);
router.put("/api/bicicletas/:id/alquilar", bicicletaController.alquilar);

module.exports = router;