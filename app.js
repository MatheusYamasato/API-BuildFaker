const express = require("express");
const app = express();
const gerarPessoas = require("./script.js")

app.get('/', (req, res) => {
    res.send(gerarPessoas(20))
})

app.listen(3000, () => {
    console.log("Funcionando na porta 3000");
})