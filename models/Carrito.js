import  Sequelize  from "sequelize";
import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Carrito = db.define('carrito',{
    id_carrito:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    }
},{
    timestamps:false
});

export default Carrito;