import Usuario from "../../models/Usuarios.js";
import idGenerated from "../../helpers/token.js";
const mostrarRegistro = (req, res)=>{
    res.render("inicioSesion/registro")
}

const registroUser = async (req, res)=>{
    const{username, email, password, confirmPassword}=req.body;
    console.log({username, email, password, confirmPassword});
    try {
        //Validemos las contraseñas
        if (password!==confirmPassword) {
            return res.render('inicioSesion/registro', {error:'Las contraseñas no coinciden'});
        }
        const token = idGenerated();
        const usuario = await Usuario.create({
            username: username,
            email: email,
            password: password,
            id_rol:2,
            token: token
        });

        //redirigir o responder al cliente
        await usuario.save();
        res.render('inicioSesion/login', {
            mensaje: 'Se ha registrado con éxito, por favor verifique su crorreo para confirmar su cuenta.'
        });
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.render('inicioSesion/registro', {
                error: 'El usuario o correo ya estan registrados'
            });
        }
        res.render('inicioSesion/registro',{
            error: 'Ocurrio un error. Intenta nuevamente', error
        });
    }
};



export {registroUser, mostrarRegistro};