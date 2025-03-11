
const { ProductosController } = require("../controller/productos.controller");
const router = require("express").Router();

router.get("/", ProductosController.getAll)
router.get("/:id", ProductosController.getOneById)
router.get("/", ProductosController.create)

module.exports = router

