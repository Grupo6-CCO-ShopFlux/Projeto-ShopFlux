create database sensor;

use sensor;

create table sensores (
	idDado int primary key auto_increment,
    dht11_umidade int,
    dht11_temperatura int,
    luminosidade int,
    lm35_temperatura int,
    chave int
);

select * from sensores;


