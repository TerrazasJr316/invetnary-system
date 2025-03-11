const productosService = require("../service/productos.service");

class ProductosController {
    static getAll(req, res) {
        return res.json(productosService.getAll())
    }

    static getOneById(req, res) {
        const {id} = req.params
        return res.json(productosService.getOneById(id))
    }

    static create(req, res) {
        const { nombre, precio, stock } = req.body
        return res.json(productosService.create(nombre, precio, stock))
    }

    // ALL: COLOCAR EL CONTROLLOER DE UPDATE Y DE DELETE

}

module.exports = { ProductosController }