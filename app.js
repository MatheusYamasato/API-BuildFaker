

const express = require("express");
const chalk = require("chalk");
const app = express();
const gerarPessoas = require("./script.js")
const port = 3000;

app.get('/', (req, res) => {
    res.send(gerarPessoas(10))
})

app.listen(port, () => {
    console.log(chalk.blue("Api caseira rodando na porta 3000"));
})