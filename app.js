import express from "express";
import path from "path";
import db from "./database/db.js";
import { fileURLToPath } from "url";

// iniciamos la aplicacion exprss
const app = express();


//Porbamos la conexión con la base de datos
try {
    await db.authenticate();
    console.log("La base de datos se ha conectado satisfactoriamente");
} catch (error) {
    console.log('Hubo un error al conectar con la base de datos: ', error);
}


//con esto hacemos que se pueda renderizar (respuesta) el archivo html
//  file:///D:/Escuela/Programaci%C3%B3n_Web_2/Enebo/app.js
// __filename: D:\Escuela\Programación_Web_2\Enebo\app.js
const __filename = fileURLToPath(import.meta.url);
//  __dirname: D:\Escuela\Programación_Web_2\Enebo
const __dirname =path.dirname(__filename);

//se utilizan los archivos estaticos "css, imagenes, js" mas que nada para dar estilo al html
// path.join __dirname, public:  D:\Escuela\Programación_Web_2\Enebo\public
app.use(express.static(path.join(__dirname,'public')))
console.log('path.join __dirname, public: ',path.join(__dirname,'public'))
//cuando se haga la consulta al directorio raiz se respondera con el archivo html
app.use('/', (req, res) =>{
    // path.join: D:\Escuela\Programación_Web_2\Enebo\views\index.html
    res.sendFile(path.join(__dirname,'views', 'index.html'));
});

//iniciamos el servidor en el puerto 3000
const port = 3000;
app.listen(port, ()=>{
    console.log(`Servidor escuchanddo en puerto ${port}...`)
});