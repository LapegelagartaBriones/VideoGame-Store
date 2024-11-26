const mostrarSuper = (req, res)=>{
    res.render("inicioSesion/superUsuario",{
        user:req.session.superUser
    })
}

export {mostrarSuper};