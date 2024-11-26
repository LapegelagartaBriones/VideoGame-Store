

const rutaProteger = async (req, res, next)=>{
    if (!req.session.user) {
        return res.redirect('/login/iniciarSesion')
    }
    next();
};

export default rutaProteger;