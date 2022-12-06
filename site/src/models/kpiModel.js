var database = require("../database/config");

// Modal ${idSensor}

function buscarKpi(idSensor) {
    var instrucao = `select max(temperatura) as max from leitura where leitura.fkSensor = ${idSensor};`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function buscarKpi2(idSensor) {
    var instrucao = `select max(umidade) as max from leitura where leitura.fkSensor = ${idSensor};`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function buscarKpi3(idSensor) {
    var instrucao = `select min(temperatura) as min from leitura where leitura.fkSensor = ${idSensor};`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function buscarKpi4(idSensor) {
    var instrucao = `select min(umidade) as min from leitura where leitura.fkSensor = ${idSensor};`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function buscarKpi5(idSensor) {
    var instrucao = `select top 2 leitura.temperatura as temp from leitura where leitura.fksensor = ${idSensor} order by data_horario DESC;`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function buscarKpi6(idSensor) {
    var instrucao = `select top 2 leitura.umidade as umi from leitura where leitura.fksensor = ${idSensor} order by data_horario DESC;`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    buscarKpi,
    buscarKpi2,
    buscarKpi3,
    buscarKpi4,
    buscarKpi5,
    buscarKpi6
}