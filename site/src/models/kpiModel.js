var database = require("../database/config");

function buscarKpi1() {
    var instrucao = `select max(temperatura) as max from leitura;`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    buscarKpi1
}