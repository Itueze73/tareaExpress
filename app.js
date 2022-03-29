const { json } = require('body-parser')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/suma/:num1/:num2', (req, res) =>{
    let num1= Number(req.params.num1)
    let num2= Number(req.params.num2)
    let resultado=num1+num2
    res.status(200).json(resultado)
})

// con OR
app.get('/resta/:num1/:num2', (req, res) =>{
    let num1 = Number(req.params.num1)
    let num2 = Number(req.params.num2)
    if(num1 == 0 || num2 == 0) {
        res.status(400).send("No se puede restar por 0")
    }
    let resultado=num1-num2
    res.status(200).json(resultado)
})

// con doble IF
// app.get('/resta/:num1/:num2', (req, res) =>{
//     let num1= Number(req.params.num1)
//     let num2= Number(req.params.num2)
//     if(num1 == 0) {
//         res.status(400).send("No se puede restar por 0")
//     }
//     if(num2 == 0) {
//         res.status(400).send("No se puede restar por 0")
//     }
//     let resultado=num1-num2
//     res.status(200).json(resultado)
// })

app.get('/identidad', (req, res) => {
    let apellido= req.query.apellido
    let nombre= req.query.nombre
    res.status(200).send(`Mi apellido es: ${apellido} y nombre es: ${nombre}`)
})

app.listen(port, () => {
  console.log(`Example app http://localhost:${port}`)
})