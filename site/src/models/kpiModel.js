var database = require("../database/config");

// Modal 1

function buscarKpi1() {
    var instrucao = `select max(temperatura) as max from leitura;`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function buscarKpi2() {
    var instrucao = `select max(umidade) as min from leitura;`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function buscarKpi3() {
    var instrucao = `select min(temperatura) as max from leitura;`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function buscarKpi4() {
    var instrucao = `select min(umidade) as max from leitura;`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function buscarKpi5() {
    var instrucao = `select max(temperatura) as max from leitura;`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function buscarKpi6() {
    var instrucao = `select max(umidade) as max from leitura;`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Modal 2

function buscarKpi7() {
    var instrucao = `select max(temperatura) as max from leitura;`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function buscarKpi8() {
    var instrucao = `select max(umidade) as max from leitura;`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function buscarKpi9() {
    var instrucao = `select min(temperatura) as max from leitura;`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function buscarKpi10() {
    var instrucao = `select min(umidade) as max from leitura;`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function buscarKpi11() {
    var instrucao = `select max(temperatura) as max from leitura;`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function buscarKpi12() {
    var instrucao = `select max(umidade) as max from leitura;`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Modal 3

function buscarKpi13() {
    var instrucao = `select max(temperatura) as max from leitura;`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function buscarKpi14() {
    var instrucao = `select max(umidade) as max from leitura;`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function buscarKpi15() {
    var instrucao = `select min(temperatura) as max from leitura;`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function buscarKpi16() {
    var instrucao = `select min(umidade) as max from leitura;`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function buscarKpi17() {
    var instrucao = `select max(temperatura) as max from leitura;`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function buscarKpi18() {
    var instrucao = `select max(umidade) as max from leitura;`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Modal 4

function buscarKpi19() {
    var instrucao = `select max(temperatura) as max from leitura;`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function buscarKpi20() {
    var instrucao = `select max(umidade) as max from leitura;`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function buscarKpi21() {
    var instrucao = `select min(temperatura) as max from leitura;`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function buscarKpi22() {
    var instrucao = `select min(umidade) as max from leitura;`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function buscarKpi23() {
    var instrucao = `select max(temperatura) as max from leitura;`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function buscarKpi24() {
    var instrucao = `select max(umidade) as max from leitura;`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    buscarKpi1,
    buscarKpi2,
    buscarKpi3,
    buscarKpi4,
    buscarKpi5,
    buscarKpi6,
    buscarKpi7,
    buscarKpi8,
    buscarKpi9,
    buscarKpi10,
    buscarKpi11,
    buscarKpi12,
    buscarKpi13,
    buscarKpi14,
    buscarKpi15,
    buscarKpi16,
    buscarKpi17,
    buscarKpi18,
    buscarKpi19,
    buscarKpi20,
    buscarKpi21,
    buscarKpi22,
    buscarKpi23,
    buscarKpi24
}