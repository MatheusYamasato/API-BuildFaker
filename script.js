const faker = require("faker");
const express = require("express");
const app = express();

faker.locale = 'pt_BR';


function gerarPessoas(parametro) {

    const pessoas = [];

    for(let i = 0; i < parametro; i++) {
        const pessoa = {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            gender: faker.name.gender(),
            birthDay: faker.date.past(),
            email: faker.internet.email(),
            userName: faker.internet.userName(),
            password: faker.internet.password(),
        };
        pessoas.push(pessoa)
    }
    return pessoas;
}

app.get('/', (req, res) => {
    res.send(gerarPessoas(50))
})

app.listen(3000, () => {
    console.log("Funcionando na porta 3000");
})