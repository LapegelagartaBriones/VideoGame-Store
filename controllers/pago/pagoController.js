

const mostrarPago = async(req, res)=>{
    const juegos = req.session.carrito || [];

    let total = 0;
    juegos.forEach(juego =>{
        total += parseFloat(juego.precio); 
    })
    res.render("carrito/pago",{
        user: req.session.user,
        juegos,
        total,
        csrf: req.csrfToken()
    });
};

const realizarCompra = (req, res)=>{
    req.session.carrito = [];
    res.render('carrito/pago',{
        user: req.session.user,
        juego:req.session.carrito,
        mensaje:'Compra realizada con éxito, disfrutalo!',
        csrf:req.csrfToken()
    });
};

export {mostrarPago, realizarCompra};