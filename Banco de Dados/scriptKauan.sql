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

create table gestor (
	idGestor int primary key auto_increment,
    nomeGestor varchar(45),
    cpfGestor char(11),
    emailGestor varchar(45),
    fkTelefone int,
    foreign key (fkTelefone) references telefone (idTelefone)
)auto_increment = 100;

create table shopping (
	idShopping int primary key auto_increment,
    cnpjShopping char(14),
    nomeShopping varchar(60),
    qtdLojasTotal int,
    fkGestor int,
    foreign key (fkGestor) references gestor(idGestor),
    fkEndereco int,
    foreign key (fkEndereco) references endereco(idEndereco)
)auto_increment = 1000;

create table sensor (
	idSensor int primary key auto_increment,
    modeloSensor varchar(45),
    fluxoMedio varchar(45) check(fluxoMedio = 'muito baixo' and fluxoMedio = 'baixo' and fluxoMedio = 'normal' 
    and fluxoMedio = 'alto' and fluxoMedio = 'muito alto')
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

    
    

