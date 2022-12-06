var database = require("../database/config");

function buscarUltimasMedidas(idSensor, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        temperatura as temperatura, 
        umidade as umidade,  
                        data_horario,
                        FORMAT(data_horario, 'HH:mm:ss') as momento_grafico
                    from leitura
                    where fkSensor = ${idSensor}
                    order by idLeitura desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select temperatura, umidade,data_horario,DATE_FORMAT(data_horario,'%H:%i:%s') as momento_grafico
                    from leitura
                    where fkSensor = ${idSensor}
                    order by idLeitura desc limit ${limite_linhas}`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idSensor) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        temperatura as temperatura, 
        umidade as umidade,  
                        CONVERT(varchar, data_horario, 108) as momento_grafico, 
                        fkSensor
                        from leitura where fkSensor = ${idSensor} 
                    order by idLeitura desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        temperatura as temperatura, 
        umidade as umidade,
                        DATE_FORMAT(data_horario,'%H:%i:%s') as data_horario, 
                        fkSensor
                        from leitura where fkSensor = ${idSensor} 
                    order by idleitura desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
