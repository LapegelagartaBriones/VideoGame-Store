const inicio = (req, res)=>{
    res.render("index",{
        user: req.session.user
    });
}

export {inicio}