import Sequelize from "sequelize";
import { DataTypes } from "sequelize";
import db from "../config/db.js";
import Rol from "./Rol.js";

const Usuario = db.define('usuarios',{
    id_usuario: {
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    username: {
        type:DataTypes.STRING,
        allowNull:true,
        unique:true
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    confirmacion:DataTypes.BOOLEAN,
    token:DataTypes.STRING
},{
    timestamps:false
});

Rol.hasOne(Usuario,{
    foreignKey:{
        name:"id_rol",
    },
});

Usuario.belongsTo(Rol,{
    foreignKey:{
        name:"id_rol",
    },
});

export default Usuario;