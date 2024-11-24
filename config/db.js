//Importamos la ROM para manejo y conexión con la base de datos
// Importamos la clase Sequelize para el manejo y conexión con la base de datos.
import { Sequelize } from "sequelize";
//Importamos dotenv para el uso de variables de entorno
import  dotenv  from "dotenv";

//Definimos la ruta de nuestro archivo donde están las variables de entorno
dotenv.config({path:'.env'});

//Definimos nuestra instancia de Sequelize (Sequelize(nombreBD, nombreUsuario, contraseña, configuración))
const db=new Sequelize(process.env.BD_NOMBRE, process.env.BD_USUARIO, process.env.BD_CLAVE,{    
    dialect: process.env.BD_DIALECT,
    dialectOptions:{ // Opciones específicas del dialecto de la base de datos.
        host:process.env.BD_HOST,// Dirección o IP del servidor donde se encuentra la base de datos.
        port: process.env.BD_PORT,// Puerto en el que está escuchando la base de datos.
        timestamps:false, // Indica si Sequelize debería agregar automáticamente marcas de tiempo (como createdAt y updatedAt) a los modelos. false para desactivarlas.
        underscore:false,// Indica si Sequelize debe transformar nombres de columnas y atributos usando snake_case. false para mantener nombres como están.
        pool:{
              // Configuración del pool de conexiones (para manejar múltiples conexiones).
            max:5,// Número máximo de conexiones simultáneas permitidas.
            min:0,// Número mínimo de conexiones que el pool debe mantener.
            acquire:30000,// Tiempo máximo (en milisegundos) que Sequelize intentará conectar antes de fallar.
            idle:10000// Tiempo (en milisegundos) que una conexión puede estar inactiva antes de ser liberada.
        },
    operatorAlies:false// Desactiva el uso de aliases para operadores. Esto es útil para evitar posibles confusiones o vulnerabilidades de seguridad al trabajar con consultas dinámicas.
    }
});

export default db;