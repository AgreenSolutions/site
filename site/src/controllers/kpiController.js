var kpiModel = require('../models/kpiModel');

function buscarKpi1(req,res) {
    kpiModel.buscarKpi1().then(function(resultado) {
        console.log(resultado);
        res.status(200).json(resultado);

    }).catch(function(erro) {
        console.log(erro);
    })

}

module.exports = {
    buscarKpi1
}