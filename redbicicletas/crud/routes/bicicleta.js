const express = require("express");
const router = express.Router();
const bicicletaController = require("../controllers/bicicleta");

router.get("/api/list", bicicletaController.list);
router.post("/api/create", bicicletaController.create);
router.get("/api/:id/show", bicicletaController.show);
router.put("/api/:id/update", bicicletaController.update);
router.delete("/api/:id/delete", bicicletaController.delete);

module.exports = router;