drop database if exists libreria;
create database libreria;

use libreria;

create table libros(
    id int not null auto_increment primary key, 
    titulo varchar(100),
    autor varchar(100),
    categoria varchar(50),
    descripcion varchar(200),
    imagen varchar(220),
    fecha datetime default current_timestamp
);

create table user(
    id int not null auto_increment primary key, 
    nombre varchar(100),
    pass varchar(10)
);

insert into user (nombre, pass) values ('angel@gmail.com', 'angel');
insert into user (nombre, pass) values ('maria@gmail.com', 'maria');
