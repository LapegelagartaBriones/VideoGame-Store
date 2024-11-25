

const mostrarCarrito = (req, res)=>{
    res.render("carrito/carrito",{
        user: req.session.user
    });
}
export {mostrarCarrito};