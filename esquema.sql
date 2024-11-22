-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema enebo
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema enebo
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `enebo` ;
USE `enebo` ;

-- -----------------------------------------------------
-- Table `enebo`.`rol`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `enebo`.`rol` (
  `id_rol` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id_rol`))
ENGINE = InnoDB
AUTO_INCREMENT = 3;


-- -----------------------------------------------------
-- Table `enebo`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `enebo`.`usuario` (
  `id_usuario` INT(11) NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(50) NULL DEFAULT NULL,
  `correo` VARCHAR(50) NULL DEFAULT NULL,
  `pasword` VARCHAR(50) NULL DEFAULT NULL,
  `id_rol` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id_usuario`),
  INDEX `id_rol` (`id_rol` ASC) VISIBLE,
  CONSTRAINT `usuario_ibfk_1`
    FOREIGN KEY (`id_rol`)
    REFERENCES `enebo`.`rol` (`id_rol`))
ENGINE = InnoDB
AUTO_INCREMENT = 2;


-- -----------------------------------------------------
-- Table `enebo`.`carrito`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `enebo`.`carrito` (
  `id_carrito` INT(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id_carrito`),
  INDEX `id_usuario` (`id_usuario` ASC) VISIBLE,
  CONSTRAINT `carrito_ibfk_1`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `enebo`.`usuario` (`id_usuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `enebo`.`plataforma`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `enebo`.`plataforma` (
  `id_plataforma` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(10) NULL DEFAULT NULL,
  PRIMARY KEY (`id_plataforma`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `enebo`.`juego`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `enebo`.`juego` (
  `id_juego` INT(11) NOT NULL AUTO_INCREMENT,
  `imagen` VARCHAR(40) NULL DEFAULT NULL,
  `id_plataforma` INT(11) NULL DEFAULT NULL,
  `precio` VARCHAR(10) NULL DEFAULT NULL,
  `iframe` VARCHAR(40) NULL DEFAULT NULL,
  PRIMARY KEY (`id_juego`),
  INDEX `id_plataforma` (`id_plataforma` ASC) VISIBLE,
  CONSTRAINT `juego_ibfk_1`
    FOREIGN KEY (`id_plataforma`)
    REFERENCES `enebo`.`plataforma` (`id_plataforma`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `enebo`.`carrito_juego`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `enebo`.`carrito_juego` (
  `id_carrito_juego` INT(11) NOT NULL AUTO_INCREMENT,
  `id_juego` INT(11) NULL DEFAULT NULL,
  `id_carrito` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id_carrito_juego`),
  INDEX `id_juego` (`id_juego` ASC) VISIBLE,
  INDEX `id_carrito` (`id_carrito` ASC) VISIBLE,
  CONSTRAINT `carrito_juego_ibfk_1`
    FOREIGN KEY (`id_juego`)
    REFERENCES `enebo`.`juego` (`id_juego`),
  CONSTRAINT `carrito_juego_ibfk_2`
    FOREIGN KEY (`id_carrito`)
    REFERENCES `enebo`.`carrito` (`id_carrito`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
