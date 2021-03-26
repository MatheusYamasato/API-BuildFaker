
const faker = require("faker");
const moment = require("moment");

faker.locale = 'pt_BR';

function gerarPessoas(parametro) {
    
    const pessoas = [];
    for(let i = 0; i < parametro; i++) {
        let nome = faker.name.findName()
        let email = faker.internet.email(nome)
        let dataNasc = moment(faker.date.past("20", "1980")).format("DD/MM/YYYY")
        let ultimoNome = faker.name.lastName()
        let genero = faker.name.gender()
        let nomeUsuario = faker.internet.userName()
        let senha = faker.internet.password()

        const pessoa = {
            nome,
            ultimoNome,
            genero,
            dataNasc,
            email,
            nomeUsuario,
            senha
        };

        pessoas.push(pessoa)
    }
    return pessoas;
}

module.exports = gerarPessoas