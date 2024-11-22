import express from "express";
import dotenv from "dotenv";
import db from "./database/db.js";
import { render } from "pug";



//Creamos nuestra aplicación express (framework de node.js)
const app = express();

dotenv.config({path: '.env'});

//Verificacamos nuestra conexión con la base de datos
try {
    await db.authenticate();
    db.sync();
    console.log("Conexion exitosa a la base de datos");
} catch (error) {
    console.log("Error en la conexion con la base de datos: ", error)
}

//Esto convierte a las solicitudes http en un modo mas complejo para recopilación de formularios (Util para el formulario de inicio de sesión)
app.use(express.urlencoded({ extended: true }));

//Creacion de las vistas al servidor con el uso de Pug
app.set("view engine", "pug");
app.set("views", "./views");

//Definimos la carpeta estatica, en donde guardaremos los js, css y pug de nuestra pagina
app.use(express.static("public"));

//Enrutamiento (de momento solamente utilizaremos index traduciendo de html a pug)
app.use("/", (req, res)=>{
    res.render("index");
});


//Definimos el puerto de escucha de nuestro servidor. 
const port = process.env.PORT_LISTEN || 3000;
app.listen(port, ()=>{
    console.log(`Servidor escuchando en puerto: ${port}`)
});