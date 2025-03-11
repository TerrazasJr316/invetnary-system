//importaciones
//import express from "express"

const ProductoRutas = require("./routes/productos.routes")
const express = require("express")
const cors = require("cors")

const PORT = 3000

// declara la instacia de express
const app = express()

//Middleware
app.use(express.json()) //interprete de json
//app.use("/ruta".express.json())
app.use(cors()); //permite o niega el acceso de l IPs

app.use("/productos", ProductoRutas)

//corriendo el servidor
app.listen(3000, ()=>{console.log("Server running in http://localhost:"+PORT)}) //app.listen(PORT)
