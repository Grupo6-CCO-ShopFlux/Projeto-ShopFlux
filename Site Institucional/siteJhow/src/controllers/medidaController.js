var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {

    const limite_linhas = 7;

    var idGrafico = req.params.idGrafico;
    if(idGrafico == 'tempo real') {
        var tipoGrafico = idGrafico;
        idGrafico = 1;
    } else if(idGrafico == 'diário') {
        var tipoGrafico = idGrafico;
        idGrafico = 2;
    }  else if(idGrafico == 'semanal') {
        var tipoGrafico = idGrafico;
        idGrafico = 3;
    } else if(idGrafico == 'mensal') {
        var tipoGrafico = idGrafico;
        idGrafico = 4;
    } else if(idGrafico == 'anual') {
        var tipoGrafico = idGrafico;
        idGrafico = 5;
    }
    

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas(idGrafico, limite_linhas, tipoGrafico).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoReal(req, res) {

    var idGrafico = req.params.idGrafico;
    if(idGrafico == 'tempo real') {
        var tipoGrafico = idGrafico;
        idGrafico = 1;
    } else if(idGrafico == 'diário') {
        var tipoGrafico = idGrafico;
        idGrafico = 1;
    } else if(idGrafico == 'semanal') {
        var tipoGrafico = idGrafico;
        idGrafico = 1;
    } else if(idGrafico == 'mensal') {
        var tipoGrafico = idGrafico;
        idGrafico = 1;
    } else if(idGrafico == 'anual') {
        var tipoGrafico = idGrafico;
        idGrafico = 1;
    }

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(idGrafico, tipoGrafico).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal

}