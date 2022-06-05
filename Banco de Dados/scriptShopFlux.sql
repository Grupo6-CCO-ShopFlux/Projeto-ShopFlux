create database ShopFlux;

use ShopFlux;

create table telefone (
	idTelefone int primary key auto_increment,
    telefone char(11),
    fkFuncionario int,
    foreign key(fkFuncionario) references funcionario(idFuncionario)
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
	fkSensor int,
    foreign key(fkSensor) references sensor(idSensor),
    idDados int,
	primary key(fkSensor, idDados),
    momento datetime,
    chave int
);

create table sensor (
	idSensor int primary key auto_increment,
    modeloSensor varchar(45),
    fkSetor int,
    foreign key(fkSetor) references setor(idSetor)
);

create table setor (
	idSetor int primary key auto_increment,
    qtdLojasSetor int,
    fkShopping int,
    foreign key (fkShopping) references shopping(idShopping)
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