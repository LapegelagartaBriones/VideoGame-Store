import  Sequelize  from "sequelize";
import Carrito from "./Carrito.js";
import Usuario from "./Usuarios.js";
import db from "../config/db.js";

const UsuarioCarrito = db.define('usuarioCarrito',{
    id_usuarioCarrito:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    id_usuario:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    id_carrito:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
},{
    timestamps:false
});

Usuario.belongsToMany(Carrito,{
    through: UsuarioCarrito,
    foreignKey: "id_usuario",
    otherKey: "id_carrito",
});
Carrito.belongsToMany(Usuario,{
    through: UsuarioCarrito,
    foreignKey: "id_carrito",
    otherKey: "id_usuario"
});

export default UsuarioCarrito;

