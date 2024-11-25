import  Sequelize  from "sequelize";
import db from "../config/db.js";
import Carrito from "./Carrito.js";
import Usuario from "./Usuarios.js";
import Juegos from "./Juegos.js";

const JuegosCarrito = db.define('juegosCarrito',{
    id_juegosCarrito:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    id_juego:{
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

Carrito.belongsToMany(Juegos,{
    through: JuegosCarrito,
    foreignKey: "id_carrito",
    otherKey: "id_juego",
});

Juegos.belongsToMany(Carrito,{
    through: JuegosCarrito,
    foreignKey: "id_juego",
    otherKey: "id_carrito",
});

export default JuegosCarrito;