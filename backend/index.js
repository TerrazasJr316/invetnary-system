//importaciones
import express from "express"

const express = require("express")
const cros = require("cors")

const PORT = 3000

// declara la instacia de express
const app = express()

//Middleware
app.use(express.json()) //interprete de json
//app.use("/ruta".express.json())
app.use(cors()); //permite o niega el acceso de l IPs

app.get("/", (req, res)=>{
    res.json(
        {
            mensaje: "Hola desde el vervidor"
        }
    )
})

app.get("/:nombre", (req, res)=>{
    const {nombre} = req.params
    res.json({
        mansaje: "Hola usando url personal de "+ nombre
    })
})

app.get("/:n1/:n2", (req, res) =>{
    console.log(resquest.params)
    const {n1, n2} = req.params
    if (isNaN(parseFloat(n1)) || isNaN(parseFloat(n2))){
        res.status(400).json({message: "No todos los parametros son numeros"})
    } else {
        const suma = parseInt(n1) + parseFloat(n2)
    }
    res.json({suma})
})

app.post("/", (req, res)=>{
    const {username, password} = req.body
    res.status(201).json({username, password})
})

//corriendo el servidor
app.listen(3000, ()=>{console.log("Server running in http://localhost:"+PORT)}) //app.listen(PORT)
