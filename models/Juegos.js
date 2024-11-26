import  Sequelize  from "sequelize";
import { DataTypes } from "sequelize";
import db from "../config/db.js";
import Plataformas from "./Plataformas.js";

const Juegos = db.define('juegos',{
    id_juego:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    nombre:{
        type:DataTypes.STRING,
        allowNull:false
    },
    portada:{
        type:DataTypes.STRING,
        allowNull:false
    },
    id_plataforma:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    trailer:{
        type:DataTypes.STRING,
        allowNull:false
    },
    descripcion:{
        type:DataTypes.STRING,
        allowNull:false
    },
    precio:{
        type:DataTypes.STRING,
        allowNull:false
    }
},
{
    timestamps:false
});

Plataformas.hasMany(Juegos,{
    foreignKey: 'id_plataforma'
});

Juegos.belongsTo(Plataformas,{
    foreignKey:'id_plataforma'
});

export default Juegos;