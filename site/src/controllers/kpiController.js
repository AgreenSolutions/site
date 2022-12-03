var kpiModel = require('../models/kpiModel');

function buscarKpi1(req,res) {
    var idSensor = req.params.idSensor;
    kpiModel.buscarKpi(idSensor).then(function(resultado) {
        console.log(resultado);
        res.status(200).json(resultado);

    }).catch(function(erro) {
        console.log(erro);
    })

}
function buscarKpi2(req,res) {
    var idSensor = req.params.idSensor;
    kpiModel.buscarKpi2(idSensor).then(function(resultado) {
        console.log(resultado);
        res.status(200).json(resultado);

    }).catch(function(erro) {
        console.log(erro);
    })

}
function buscarKpi3(req,res) {
    var idSensor = req.params.idSensor;
    kpiModel.buscarKpi3(idSensor).then(function(resultado) {
        console.log(resultado);
        res.status(200).json(resultado);

    }).catch(function(erro) {
        console.log(erro);
    })

}
function buscarKpi4(req,res) {
    var idSensor = req.params.idSensor;
    kpiModel.buscarKpi4(idSensor).then(function(resultado) {
        console.log(resultado);
        res.status(200).json(resultado);

    }).catch(function(erro) {
        console.log(erro);
    })

}
function buscarKpi5(req,res) {
    var idSensor = req.params.idSensor;
    kpiModel.buscarKpi5(idSensor).then(function(resultado) {
        console.log(resultado);
        res.status(200).json(resultado);

    }).catch(function(erro) {
        console.log(erro);
    })

}
function buscarKpi6(req,res) {
    var idSensor = req.params.idSensor;
    kpiModel.buscarKpi6(idSensor).then(function(resultado) {
        console.log(resultado);
        res.status(200).json(resultado);

    }).catch(function(erro) {
        console.log(erro);
    })

}



module.exports = {
    buscarKpi1,
    buscarKpi2,
    buscarKpi3,
    buscarKpi4,
    buscarKpi5,
    buscarKpi6
}