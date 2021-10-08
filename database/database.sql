begin;
create schema breakfast;
use breakfast;

create table colaborador(
	nome varchar(20) not null,
    cpf varchar(14) not null,
    primary key(cpf));

create table alimento(
	comida varchar (100) not null,
    cpf varchar(14) not null,
    primary key(comida));
 
 
alter table alimento add foreign key(cpf) references colaborador(cpf) ON UPDATE cascade on delete cascade;