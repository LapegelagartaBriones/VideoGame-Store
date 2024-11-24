import Usuario from "../../models/Usuarios.js";
import idGenerated from "../../helpers/token.js";
import JWTGenera from "../../helpers/token.js"
import { correoRegistro } from "../../helpers/correos.js";


const mostrarRegistro = (req, res)=>{
    res.render("inicioSesion/registro",{
        csrf:req.csrfToken()
    })
};

const mostrarLogin = (req, res)=>{
    res.render("inicioSesion/login",{
        csrf:req.csrfToken()
    });
};

const registroUser = async (req, res)=>{
    const{username, email, password, confirmPassword}=req.body;
    console.log({username, email, password, confirmPassword});
    console.log(req.csrfToken());
    try {
           //Comprobamos que todos los recuadros estén llenos
        if (!username || !email || !password || !confirmPassword) {
            return res.render('inicioSesion/registro',{
                error:'Ningún recuadro puede estar vacío',
                csrf:req.csrfToken()
            });
        }
        //Validemos las contraseñas
        if (password!==confirmPassword) {
            return res.render('inicioSesion/registro', {
                error:'Las contraseñas no coinciden',
                csrf:req.csrfToken()
            });
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
        //mandar correo
        //mandando correo
        correoRegistro({
            nombre:usuario.username,
            correo:usuario.email,
            token:usuario.token
        });
        
        //nota es muchisimo mejor redirec cuando cumplimos con un registro 
        res.render("inicioSesion/login",{
            mensaje: "Usuario registrado con exito, revisa tu correo para confirmar tu usuario.",
            csrf:req.csrfToken()
        });
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.render('inicioSesion/registro', {
                error: 'El usuario o correo ya estan registrados',
                csrf:req.csrfToken()
            });
        }
        res.render('inicioSesion/registro',{
            error: 'Ocurrio un error. Intenta nuevamente',
            csrf:req.csrfToken()
        });
    }
};

const confirmarInscripcion = async (req, res)=>{
    const {token}=req.params;
    //Token válido
    const usuario=await Usuario.findOne({
        where:{token}
    });
    if(!usuario){
        res.render("inicioSesion/confirmacion",{
            pagina:"No se pudo confirmar tu cuenta",
            mensaje: "Lo lamentamos mucho, no se ha podido confirmar la cuenta, inténtalo de nuevo",
            csrf:req.csrfToken()
        });
    }

    //Confirmar la cuenta del usuario
    //usuario.token=null;
    usuario.confirmado=true;
    await usuario.save();
    res.render("inicioSesion/confirmacion",{
        pagina: "Su cuenta se ha confirmado exitosamente",
        mensaje: "Felicidades el registro se terminó exitosamente",
        enlace: "salto",
        csrf:req.csrfToken()
    });
    
    
};

const iniciarSesion = async (req, res)=>{
    const {email, password}= req.body;

    if (!email || !password) {
        return res.render("inicioSesion/login",{
            error: 'Completa todos los recuadros',
            csrf:req.csrfToken()
        });
    }
    //Comprobamos si el usuario existe
    const usuario = await Usuario.findOne({
        where:{email}
    });
    if (!usuario) {
        return res.render("inicioSesion/login",{
            csrf:req.csrfToken(),
            error:[{msg:'El usuario no existe'}]
        });
    }
    //Comprobar si el usuario si está confirmado
    if (!usuario.confirmado) {
        return res.render("inicioSesion/login",{
            csrf:req.csrfToken(),
            errores:[{msg:'Tu cuenta no tiene confirmación, revisa tu correo'}]
        });
    }

    //Comprobando el password
    if (!usuario.verificandoClave(password)) {
        return res.render("inicioSesion/login",{
            csrf:req.csrfToken(),
            errores:[{msg:'Credenciales no válidas'}]
        })
    }
    console.log("Se ha iniciado sesion correctamente");
    //Crear jsonwebtoken
    const token=JWTGenera(usuario);
    console.log(usuario);
    console.log(token);
    return res.cookie('_token',token,{
        httpOnly:true
    }).redirect('/');
    
}



export {registroUser, mostrarRegistro, mostrarLogin, confirmarInscripcion, iniciarSesion};