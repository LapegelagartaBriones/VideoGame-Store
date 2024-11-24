import express from "express";
import dotenv from "dotenv";
import csrf from "csurf";
import cookieParser from "cookie-parser";
import db from "./config/db.js"
import inicioRouter from "./routes/inicioRouter.js";
import loginRouter from "./routes/loginRouter.js";
import routerCarrito from "./routes/carritoRouter.js";

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

//habilitar cookie parser
app.use(cookieParser());

//CSRF, forma global para la aplicacion
app.use(csrf({
    cookie:true
}));

//Creacion de las vistas al servidor con el uso de Pug
app.set("view engine", "pug");
app.set("views", "./views");

//Definimos la carpeta estatica, en donde guardaremos los js, css y pug de nuestra pagina
app.use(express.static("public"));

//Enrutamiento (de momento solamente utilizaremos index traduciendo de html a pug)
app.use("/", inicioRouter);
app.use("/login", loginRouter);
app.use("/carrito", routerCarrito);

//Definimos el puerto de escucha de nuestro servidor. 
const port = process.env.PORT_LISTEN || 3000;
app.listen(port, ()=>{
    console.log(`Servidor escuchando en puerto: ${port}`)
});