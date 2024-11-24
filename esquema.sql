SET NAMES 'utf8mb4';
DROP DATABASE IF EXISTS enebo;

CREATE DATABASE IF NOT EXISTS enebo DEFAULT CHARACTER SET utf8mb4;

USE enebo;


CREATE TABLE roles(
	id_rol		INTEGER NOT NULL AUTO_INCREMENT,
    nombre		VARCHAR(40) NOT NULL,
    PRIMARY KEY(id_rol)
)DEFAULT CHARACTER SET UTF8MB4;

CREATE TABLE usuarios(
	id_usuario	 INTEGER NOT NULL AUTO_INCREMENT,
    username	 VARCHAR(40) NOT NULL UNIQUE,
    email		 VARCHAR(100) NOT NULL UNIQUE,
    password	 VARCHAR(100) NOT NULL UNIQUE,
    confirmado	 BOOLEAN DEFAULT FALSE,
    token		 VARCHAR(50) NOT NULL, 
    id_rol		 INTEGER NOT NULL,
    PRIMARY KEY(id_usuario),
    FOREIGN KEY(id_rol) REFERENCES roles(id_rol)
)DEFAULT CHARACTER SET UTF8MB4;

CREATE TABLE plataformas(
	id_plataforma INTEGER NOT NULL AUTO_INCREMENT,
    nombre		  VARCHAR(15) NOT NULL,
    PRIMARY KEY(id_plataforma)
)DEFAULT CHARACTER SET UTF8MB4;

CREATE TABLE juegos(
	id_juego INTEGER NOT NULL AUTO_INCREMENT,
    nombre	 VARCHAR(50) NOT NULL, 
    portada  VARCHAR(50) NOT NULL,
    id_plataforma INTEGER NOT NULL, 
	trailer		  VARCHAR(20) NOT NULL,
    descripcion	  VARCHAR(200) NOT NULL,
    PRIMARY KEY(id_juego),
    FOREIGN KEY(id_plataforma) REFERENCES plataformas(id_plataforma)
)DEFAULT CHARACTER SET UTF8MB4;

CREATE TABLE carrito(
	id_carrito INTEGER NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id_carrito)
)DEFAULT CHARACTER SET UTF8MB4;


CREATE TABLE juegosCarrito(
	id_juegosCarrito INTEGER NOT NULL AUTO_INCREMENT,
    id_juego INTEGER NOT NULL,
    id_carrito INTEGER NOT NULL,
    PRIMARY KEY(id_juegosCarrito),
    FOREIGN KEY(id_juego)REFERENCES juegos(id_juego),
    FOREIGN KEY(id_carrito)REFERENCES carrito(id_carrito)
)DEFAULT CHARACTER SET UTF8MB4;


CREATE TABLE usuarioCarrito(
	id_usuarioCarrito		INTEGER NOT NULL AUTO_INCREMENT,
    id_usuario				INTEGER NOT NULL,
    id_carrito				INTEGER NOT NULL,
    PRIMARY KEY(id_usuarioCarrito),
    FOREIGN KEY(id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY(id_carrito) REFERENCES carrito(id_carrito)
)DEFAULT CHARACTER SET UTF8MB4;

DELETE FROM roles;
DELETE FROM usuarios WHERE id_usuario=2;
DELETE FROM plataformas;
DELETE FROM juegos;
DELETE FROM carrito;
DELETE FROM juegosCarrito;
DELETE FROM usuarioCarrito;

INSERT INTO roles(nombre) VALUES('administrador');
INSERT INTO roles(nombre) VALUES('cliente');
