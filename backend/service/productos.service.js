const {productos } = require("../data/db")

class ProductosService {
    getAll() {
        return productos
    }

    getOneById() {
        const productos = productos.filter((pt) => pt.id === id)
        return productos
    }

    create(nombre, precio, stock) {
        const nuevoProducto = {
            nombre:nombre,
            precio: precio,
            stock:stock
        }
        productos.push(nuevoProducto)
        return nuevoProducto
    }
    update(id, objeto) {
            //ALL: usar el id para ubicar el producto a cambiar
            //objeto -> para obtener los datos a cambiar {stock: 99}
            const producoActualizado = []
            return producoActualizado
    }
    delete (id) {
            const producoEliminado={}
            return producoEliminado
    }
}

module.exports = { ProductosService: new ProductosService() }
