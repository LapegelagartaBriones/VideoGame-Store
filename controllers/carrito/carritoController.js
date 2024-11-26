import Carrito from "../../models/Carrito.js";
import UsuarioCarrito from "../../models/usuarioCarrito.js";
import JuegosCarrito from "../../models/JuegosCarrito.js";
import Juegos from "../../models/Juegos.js";
import Plataformas from "../../models/Plataformas.js";
import { parse } from "path";

const mostrarCarrito = (req, res) => {
    try {
        // Verificar si hay un carrito en la sesión
        if (!req.session.carrito || req.session.carrito.length === 0) {
            return res.render("carrito/carrito", { carritoVacio: true, user: req.session.user });
        }
        const juegos = req.session.carrito || [];
        let total = 0;
        juegos.forEach(juego => {
            total += parseFloat(juego.precio);
        });

        // Renderizar la página del carrito con los juegos guardados en la sesión
        res.render("carrito/carrito", {
            juegos: req.session.carrito,
            user: req.session.user,
            total,
            csrf:req.csrfToken()
        });
    } catch (error) {
        console.error("Error al mostrar el carrito: ", error);
        res.status(500).send("Error al mostrar el carrito");
    }
};

const juegoCarrito = async(req, res)=>{
    const {id}=req.params;
    try {
        const juego = await Juegos.findByPk(id,{
            include:[{
                model:Plataformas,
                attributes:['nombre']
            }]
        });
        if (!juego) {
            console.log("Juego no encontrado");
            return res.redirect('/');
        }
        if (!req.session.carrito) {
            req.session.carrito=[];
        }
        const juegoExistente = req.session.carrito.find(item=>item.id_juego === juego.id_juego);
        if (!juegoExistente) {
            req.session.carrito.push(juego);
        }
        console.log("Carrito actualizado: ", JSON.stringify(req.session.carrito, null, 2));
        res.redirect('/carrito/mostrar');
    } catch (error) {
        
    }
};
const eliminarDelCarrito = (req, res)=>{
    const {id}=req.params;
    req.session.carrito=req.session.carrito.filter(juego=>juego.id_juego !== parseInt(id));
    console.log("juego eliminado del carrito")
    res.redirect("/carrito/mostrar")
}

export {juegoCarrito, mostrarCarrito, eliminarDelCarrito}