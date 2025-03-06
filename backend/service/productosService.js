const { productos } = require("../data/db")

const {productos} = requite("../data/db.js")

class ProductosService {
    getAll() {
        return productos
    }

    getOneById() {
        const productos = productos.filter((pt) => pt.id === id)
        return 
    }
}
