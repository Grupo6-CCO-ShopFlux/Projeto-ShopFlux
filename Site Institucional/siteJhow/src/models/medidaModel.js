var database = require("../database/config");

function buscarUltimasMedidas(idSetor, limite_linhas) {
    
    instrucaoSql = ''
    
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
                        chave as setor1, 
                        chave as setor2,
                        chave as setor3,
                        chave as setor4,
                        momento,
                        CONVERT(varchar, momento, 108) as momento_grafico
                    from medida
                    where fk_setor = ${idSetor}
                    order by idMedida desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
                        (chave + 15000) as setor1, 
                        (chave + 25000) as setor2,
                        (chave + 30000) as setor3,
                        (chave + 8000) as setor4,
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    from medida
                    where fk_setor = ${idSetor}
                    order by idMedida desc limit ${limite_linhas}`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idSetor) {
    
    instrucaoSql = ''
    
    if (process.env.AMBIENTE_PROCESSO == "producao") {       
        instrucaoSql = `select top 1
                        chave as setor1, 
                        chave as setor2,
                        chave as setor3,
                        chave as setor4,
                        CONVERT(varchar, momento, 108) as momento_grafico, 
                        fk_Setor
                        from medida where fk_setor = ${idSetor} 
                    order by idMedida desc`;
        
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
                        (chave + 15532) as setor1, 
                        (chave + 25721) as setor2,
                        (chave + 30391) as setor3,
                        (chave + 8429) as setor4,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_Setor
                        from medida where fk_setor = ${idSetor} 
                    order by idMedida desc limit 1`;
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
