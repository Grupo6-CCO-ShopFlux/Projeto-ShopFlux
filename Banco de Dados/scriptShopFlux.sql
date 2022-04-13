create database ShopFlux;

use ShopFlux;

create table telefone (
	idTelefone int primary key auto_increment,
    foneCelular char(11),
    foneFixo char(10)
);

create table endereco (
	idEndereco int primary key auto_increment,
    rua varchar(45),
    num int,
    bairro varchar(45),
    cidade char(2),
    pais varchar(45)
);

create table funcionario (
	idFuncionario int primary key auto_increment,
    nome varchar(45),
    cpf char(11),
    login varchar(45),
    senha varchar(45),
    email varchar(45),
    fkTelefone int,
    foreign key (fkTelefone) references telefone (idTelefone),
    fkShopping int,
    foreign key (fkShopping) references shopping(idShopping), 
    fkGestor int,
    foreign key (fkGestor)references funcionario(idFuncionario)
)auto_increment = 100;

create table shopping (
	idShopping int primary key auto_increment,
    cnpjShopping char(14),
    nomeShopping varchar(60),
    qtdLojasTotal int,
    fkEndereco int,
    foreign key (fkEndereco) references endereco(idEndereco)
)auto_increment = 1000;

create table dados (
	idDados int primary key auto_increment,
    fluxoMedia varchar(45) check(fluxoMedia = 'muito baixo' and fluxoMedia = 'baixo' and fluxoMedia = 'normal' 
    and fluxoMedia = 'alto' and fluxoMedia = 'muito alto'),
    fluxoDiario varchar(45) check(fluxoDiario = 'muito baixo' and fluxoDiario = 'baixo' and fluxoDiario = 'normal' 
    and fluxoDiario = 'alto' and fluxoDiario = 'muito alto'),
    fluxoSemanal varchar(45) check(fluxoSemanal = 'muito baixo' and fluxoSemanal = 'baixo' and fluxoSemanal = 'normal' 
    and fluxoSemanal = 'alto' and fluxoSemanal = 'muito alto'),
    fluxoMensal varchar(45) check(fluxoMensal = 'muito baixo' and fluxoMensal = 'baixo' and fluxoMensal = 'normal' 
    and fluxoMensal = 'alto' and fluxoMensal = 'muito alto')
)auto_increment = 100;

create table sensor (
	idSensor int primary key auto_increment,
    modeloSensor varchar(45),
    fkDados int,
    foreign key (fkDados) references dados (idDados)
);

create table setor (
	idSetor int primary key auto_increment,
    qtdLojasSetor int,
    fkShopping int,
    foreign key (fkShopping) references shopping(idShopping),
    fkSensor int,
    foreign key (fkSensor) references sensor(idSensor)
)auto_increment = 100;

create table loja (
	fkSetor int,
    foreign key (fkSetor) references setor(idSetor),
    idLoja int,
    primary key (fkSetor, idLoja),
    nomeLoja varchar(45),
    numLoja int,
    aluguel decimal(5,2) check(aluguel > 0)
);