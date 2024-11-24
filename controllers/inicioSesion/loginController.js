import Usuario from "../../models/Usuarios.js";

const mostrarlogin = (req, res)=>{
    res.render("inicioSesion/login");
};

export {mostrarlogin};