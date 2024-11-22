//Importamos la ROM para manejo y conexión con la base de datos
import { Sequelize } from "sequelize";
//Importamos dotenv para el uso de variables de entorno
import  dotenv  from "dotenv";

//Definimos la ruta de nuestro archivo donde están las variables de entorno
dotenv.config({path:'.env'});

//Definimos nuestra instancia de Sequelize (Sequelize(nombreBD, nombreUsuario, contraseña, configuración))
const db=new Sequelize(process.env.BD_NOMBRE, process.env.BD_USUARIO, process.env.BD_CLAVE,{    
    dialect: 'mariadb',
    dialectOptions:{
    host:process.env.BD_HOST,
    port: process.env.BD_PORT,
    timestamps:false,
    underscore:false,
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    },
    operatorAlies:false
    }
});

export default db;