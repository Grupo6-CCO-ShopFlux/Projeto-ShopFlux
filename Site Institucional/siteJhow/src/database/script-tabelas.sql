-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!
/* para workbench - local - desenvolvimento */
CREATE DATABASE shopfluxTeste;

USE shopfluxTeste;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	telefone CHAR(11),
	cpf CHAR(11)
);

create table tipoGrafico (
/* em nossa regra de negócio, um aquario tem apenas um sensor */
	idGrafico INT PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(300)
);

/* altere esta tabela de acordo com o que está em INSERT de sua API do arduino */

create table medida (
	idMedida INT PRIMARY KEY AUTO_INCREMENT,
	dht11_umidade DECIMAL,
	dht11_temperatura DECIMAL,
	luminosidade DECIMAL,
	lm35_temperatura DECIMAL,
	chave TINYINT,
	momento DATETIME,
	fkGrafico INT,
	FOREIGN KEY (fkGrafico) REFERENCES tipoGrafico(idGrafico)
);

insert into tipoGrafico values
	(1, 'Tempo real'),
    (2, 'diario'),
    (3, 'semanal'),
    (4, 'mensal'),
    (5, 'anual');
    
insert into medida values 
	(null, 0, 0, 0, 0, 1, '2022-06-08 10:00:00', 2),
	(null, 0, 0, 0, 0, 1, '2022-06-08 11:00:00', 2),
	(null, 0, 0, 0, 0, 1, '2022-06-08 12:00:00', 2),
	(null, 0, 0, 0, 0, 1, '2022-06-08 13:00:00', 2),
	(null, 0, 0, 0, 0, 1, '2022-06-08 14:00:00', 2),
	(null, 0, 0, 0, 0, 1, '2022-06-08 15:00:00', 2),
	(null, 0, 0, 0, 0, 1, '2022-06-08 16:00:00', 2),
	(null, 0, 0, 0, 0, 1, '2022-06-08 17:00:00', 2),
	(null, 0, 0, 0, 0, 1, '2022-06-08 18:00:00', 2),
	(null, 0, 0, 0, 0, 1, '2022-06-08 19:00:00', 2),
	(null, 0, 0, 0, 0, 1, '2022-06-08 20:00:00', 2),
	(null, 0, 0, 0, 0, 1, '2022-06-08 21:00:00', 2),
	(null, 0, 0, 0, 0, 1, '2022-06-08 22:00:00', 2);
    
insert into medida values 
	(null, 0, 0, 0, 0, 1, '2022-06-05 10:00:00', 3),
	(null, 0, 0, 0, 0, 1, '2022-06-06 11:00:00', 3),
	(null, 0, 0, 0, 0, 1, '2022-06-07 12:00:00', 3),
	(null, 0, 0, 0, 0, 1, '2022-06-08 13:00:00', 3),
	(null, 0, 0, 0, 0, 1, '2022-06-09 14:00:00', 3),
	(null, 0, 0, 0, 0, 1, '2022-06-10 15:00:00', 3),
	(null, 0, 0, 0, 0, 1, '2022-06-11 16:00:00', 3);
    
insert into medida values 
	(null, 0, 0, 0, 0, 1, '2022-01-05 10:00:00', 4),
	(null, 0, 0, 0, 0, 1, '2022-02-06 11:00:00', 4),
	(null, 0, 0, 0, 0, 1, '2022-03-07 12:00:00', 4),
	(null, 0, 0, 0, 0, 1, '2022-04-08 13:00:00', 4),
	(null, 0, 0, 0, 0, 1, '2022-05-09 14:00:00', 4),
	(null, 0, 0, 0, 0, 1, '2022-06-10 15:00:00', 4),
	(null, 0, 0, 0, 0, 1, '2022-07-11 16:00:00', 4),
    (null, 0, 0, 0, 0, 1, '2022-08-05 10:00:00', 4),
	(null, 0, 0, 0, 0, 1, '2022-09-06 11:00:00', 4),
	(null, 0, 0, 0, 0, 1, '2022-10-07 12:00:00', 4),
	(null, 0, 0, 0, 0, 1, '2022-11-08 13:00:00', 4),
	(null, 0, 0, 0, 0, 1, '2022-12-09 14:00:00', 4);

insert into medida values 
	(null, 0, 0, 0, 0, 1, '2017-01-05 10:00:00', 5),
	(null, 0, 0, 0, 0, 1, '2018-02-06 11:00:00', 5),
	(null, 0, 0, 0, 0, 1, '2019-03-07 12:00:00', 5),
	(null, 0, 0, 0, 0, 1, '2020-04-08 13:00:00', 5),
	(null, 0, 0, 0, 0, 1, '2021-05-09 14:00:00', 5),
	(null, 0, 0, 0, 0, 1, '2022-06-10 15:00:00', 5);


/* para sql server - remoto - produção */
CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY IDENTITY(1,1),
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
);

create table tipoGrafico (
/* em nossa regra de negócio, um aquario tem apenas um sensor */
	idGrafico INT PRIMARY KEY IDENTITY(1,1),
	descricao VARCHAR(300)
);

/* altere esta tabela de acordo com o que está em INSERT de sua API do arduino */

CREATE TABLE medida (
	idMedida INT PRIMARY KEY IDENTITY(1,1),
	dht11_umidade DECIMAL,
	dht11_temperatura DECIMAL,
	luminosidade DECIMAL,
	lm35_temperatura DECIMAL,
	chave TINYINT,
	momento DATETIME,
	fkGrafico INT FOREIGN KEY REFERENCES tipoGrafico(idGrafico)
);