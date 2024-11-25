import db from "../config/db.js";
import  Sequelize  from "sequelize";
import { DataTypes } from "sequelize";

const Plataformas = db.define('plataformas',{
    id_plataforma:{
        type: Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    nombre:{
        type:DataTypes.STRING,
        allowNull:false
    }
});

export default Plataformas;