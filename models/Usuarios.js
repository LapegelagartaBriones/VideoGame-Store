import Sequelize from "sequelize";
import { DataTypes } from "sequelize";
import bcrypt from "bcrypt"
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
    confirmado:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    },
    token:DataTypes.STRING
},{
    timestamps:false,
    hooks:{
        beforeCreate:async function(usuario){
            const rep= await bcrypt.genSalt(10);
            usuario.password=await bcrypt.hash(usuario.password,rep);
        }
    }
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

//Metodo prototype
Usuario.prototype.verificandoClave=function (password) {
    return bcrypt.compareSync(password, this.password);
}

export default Usuario;