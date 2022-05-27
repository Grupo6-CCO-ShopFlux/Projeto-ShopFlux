var database = require("../database/config");

function buscarUltimasMedidas(idGrafico, limite_linhas, tipoGrafico) {
    
    instrucaoSql = ''

    if(tipoGrafico == 'tempo real'){
        if (process.env.AMBIENTE_PROCESSO == "producao") {
            instrucaoSql = `select top ${limite_linhas}
                            chave as setor1, 
                            chave as setor2,
                            chave as setor3,
                            chave as setor4,
                            momento,
                            CONVERT(varchar, momento, 108) as momento_grafico
                        from medida
                        where fkGrafico = ${idGrafico}
                        order by idMedida desc`;
        } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
            instrucaoSql = `select 
                            (chave - 1) as setor1, 
                            (chave + 1) as setor2,
                            (chave - 1) as setor3,
                            (chave + 1) as setor4,
                            momento,
                            DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                        from medida
                        where fkGrafico = ${idGrafico}
                        order by idMedida desc limit ${limite_linhas}`;
        } else {
            console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
            return
        }
    } else if(tipoGrafico == 'diário') {
        if (process.env.AMBIENTE_PROCESSO == "producao") {
            instrucaoSql = `select top ${limite_linhas}
                            chave as setor1, 
                            chave as setor2,
                            chave as setor3,
                            chave as setor4,
                            momento,
                            CONVERT(varchar, momento, 108) as momento_grafico
                        from medida
                        where fkGrafico = ${idGrafico}
                        order by idMedida desc`;
        } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
            instrucaoSql = `select 
                            sum(chave + 15000) as setor1, 
                            sum(chave + 25000) as setor2,
                            sum(chave + 30000) as setor3,
                            sum(chave + 8000) as setor4,
                            momento,
                            DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                        from medida
                        where fkGrafico = ${idGrafico} and
                        momento >= '2022-06-08 10:00:00' and
                        momento <= '2022-06-08 22h:00:00'
                        order by idMedida desc limit ${limite_linhas}`;
        } else {
            console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
            return
        }
    } else if(tipoGrafico == 'semanal') {
        if (process.env.AMBIENTE_PROCESSO == "producao") {
            instrucaoSql = `select top ${limite_linhas}
                            chave as setor1, 
                            chave as setor2,
                            chave as setor3,
                            chave as setor4,
                            momento,
                            CONVERT(varchar, momento, 108) as momento_grafico
                        from medida
                        where fkGrafico = ${idGrafico}
                        order by idMedida desc`;
        } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
            instrucaoSql = `select 
                            sum(chave + 15000) as setor1, 
                            sum(chave + 25000) as setor2,
                            sum(chave + 30000) as setor3,
                            sum(chave + 8000) as setor4,
                            momento,
                            DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                        from medida
                        where fkGrafico = ${idGrafico} and
                        momento >= '2022-06-05 10:00:00' and
                        momento <= '2022-06-11 22:00:00'
                        order by idMedida desc limit ${limite_linhas}`;
        } else {
            console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
            return
        }
    } else if(tipoGrafico == 'mensal') {
        if (process.env.AMBIENTE_PROCESSO == "producao") {
            instrucaoSql = `select top ${limite_linhas}
                            chave as setor1, 
                            chave as setor2,
                            chave as setor3,
                            chave as setor4,
                            momento,
                            CONVERT(varchar, momento, 108) as momento_grafico
                        from medida
                        where fkGrafico = ${idGrafico}
                        order by idMedida desc`;
        } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
            instrucaoSql = `select 
                            sum(chave + 15000) as setor1, 
                            sum(chave + 25000) as setor2,
                            sum(chave + 30000) as setor3,
                            sum(chave + 8000) as setor4,
                            momento,
                            DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                        from medida
                        where fkGrafico = ${idGrafico} and
                        momento >= '2022-06-01 10:00:00' and
                        momento <= '2022-06-30 22:00:00'
                        order by idMedida desc limit ${limite_linhas}`;
        } else {
            console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
            return
        }
    } else if(tipoGrafico == 'anual') {
        if (process.env.AMBIENTE_PROCESSO == "producao") {
            instrucaoSql = `select top ${limite_linhas}
                            chave as setor1, 
                            chave as setor2,
                            chave as setor3,
                            chave as setor4,
                            momento,
                            CONVERT(varchar, momento, 108) as momento_grafico
                        from medida
                        where fkGrafico = ${idGrafico}
                        order by idMedida desc`;
        } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
            instrucaoSql = `select 
                            sum(chave + 15000) as setor1, 
                            sum(chave + 25000) as setor2,
                            sum(chave + 30000) as setor3,
                            sum(chave + 8000) as setor4,
                            momento,
                            DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                        from medida
                        where fkGrafico = ${idGrafico} and
                        momento >= '2022-01-01 10:00:00' and
                        momento <= '2022-12-31 22:00:00'
                        order by idMedida desc limit ${limite_linhas}`;
        } else {
            console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
            return
        }
    }
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idGrafico, tipoGrafico) {
    
    instrucaoSql = ''
        if(tipoGrafico == 'tempo real') {
            if (process.env.AMBIENTE_PROCESSO == "producao") {       
                instrucaoSql = `select top 1
                                chave as setor1, 
                                chave as setor2,
                                chave as setor3,
                                chave as setor4,
                                CONVERT(varchar, momento, 108) as momento_grafico, 
                                fkGrafico
                                from medida where fkGrafico = ${idGrafico} 
                            order by idMedida desc`;
                
            } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
                instrucaoSql = `select 
                                chave as setor1, 
                                chave as setor2,
                                chave as setor3,
                                chave as setor4,
                                DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                                fkGrafico
                                from medida where fkGrafico = ${idGrafico} 
                            order by idMedida desc limit 1`;
            } else {
                console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
                return
            }
        } else if(tipoGrafico == 'diário') {
            if (process.env.AMBIENTE_PROCESSO == "producao") {       
                instrucaoSql = `select top 1
                                chave as setor1, 
                                chave as setor2,
                                chave as setor3,
                                chave as setor4,
                                CONVERT(varchar, momento, 108) as momento_grafico, 
                                fkGrafico
                                from medida where fkGrafico = ${idGrafico} 
                            order by idMedida desc`;
                
            } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
                instrucaoSql = `select 
                                (chave + 15532) as setor1, 
                                (chave + 25721) as setor2,
                                (chave + 30391) as setor3,
                                (chave + 8429) as setor4,
                                DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                                fkGrafico
                                from medida where fkGrafico = ${idGrafico} 
                            order by idMedida desc limit 1`;
            } else {
                console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
                return
            }
        } else if(tipoGrafico == 'semanal') {
            if (process.env.AMBIENTE_PROCESSO == "producao") {       
                instrucaoSql = `select top 1
                                chave as setor1, 
                                chave as setor2,
                                chave as setor3,
                                chave as setor4,
                                CONVERT(varchar, momento, 108) as momento_grafico, 
                                fkGrafico
                                from medida where fkGrafico = ${idGrafico} 
                            order by idMedida desc`;
                
            } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
                instrucaoSql = `select 
                                (chave + 15532) as setor1, 
                                (chave + 25721) as setor2,
                                (chave + 30391) as setor3,
                                (chave + 8429) as setor4,
                                DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                                fkGrafico
                                from medida where fkGrafico = ${idGrafico} 
                            order by idMedida desc limit 1`;
            } else {
                console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
                return
            }
        }
    

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
