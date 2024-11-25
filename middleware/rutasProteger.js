import jwt, { decode } from "jsonwebtoken";
import Usuario from "../models/Usuarios.js";

const rutaProteger = async (req, res, next)=>{
    //Verificar si tiene un token
    const {_token}=req.cookies;
    console.log("token: " ,_token)
    if (!_token) {
        console.log("no hay token");
        return res.redirect('/');
    }

    //Verificar si es el token que se espera
    try {
        const decoded= jwt.verify(_token,process.env.SC_JWT);
        const usuario = await Usuario.scope("eliminarClave").findByPk(decoded.id)
        console.log("decoded.id: ",decoded.id);
        console.log("usuario :",usuario);
        //almacenamos el usuario req
        if (usuario) {
            console.log("se almacenó el usuario: ", usuario);
            req.usuario=usuario;
        } else {
            console.log("no sé que está pasando");
            
            return res.redirect("/");
        }
        return next();
    } catch (error) {
        console.log("erro:",error);
        
        return res.clearCookie('_token').redirect('/');
    }

}
export default rutaProteger;