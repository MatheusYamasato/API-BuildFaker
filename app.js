

const express = require("express");
const chalk = require("chalk");
const app = express();
const gerarPessoas = require("./script.js")

app.get('/', (req, res) => {
    res.send(gerarPessoas(20))
})

app.listen(3000, () => {
    console.log(chalk.green("Api caseira rodando na porta 3000"));
})