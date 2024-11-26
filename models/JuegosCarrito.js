import  Sequelize  from "sequelize";
import db from "../config/db.js";
import Carrito from "./Carrito.js";
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
        allowNull:false,
        references:{
            model:Juegos,
            key:'id_juego'
        }
    },
    id_carrito:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
            model:Carrito,
            key:'id_carrito'
        }
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