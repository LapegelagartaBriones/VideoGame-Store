import Carrito from "../../models/Carrito.js";
import UsuarioCarrito from "../../models/usuarioCarrito.js";
import JuegosCarrito from "../../models/JuegosCarrito.js";
import Juegos from "../../models/Juegos.js";

const alfabetoGriego = ["Alfa", "Beta", "Gamma", "Delta", "Épsilon"];

const crearCarrito = async (req, res)=>{
    const {id_usuario} = req.session;
    try {
        const carritosExistentes = await UsuarioCarrito.findAll({
            where:{id_usuario}
        });
        if (carritosExistentes.length >= alfabetoGriego.length) {
            console.log("Límite de carritos alcanzado");
        }
        //Asignar el siguiente nombre del alfabeto griego
        const nombre = alfabetoGriego[carritosExistentes.length];
        //Crear el carrito
        const nuevoCarrito = await Carrito.create({ nombre });
        //Asociamos el carrito al usuario
        await UsuarioCarrito.create({
            id_usuario,
            id_carrito:nuevoCarrito.id_carrito
        });
        console.log(`Carrito '${nombre}' creado exitosamente`);
    } catch (error) {
        console.error("Error al crear el carrito:", error)
    }
};

const seleccionarCarrito = async (req, res)=>{
    const{id_usuario}=req.session;
    const{id_carrito}=req.params;
    try {
        const carritoUsuario = await UsuarioCarrito.findOne({
            where:{id_usuario, id_carrito}
        });
        if (!carritoUsuario) {
            console.log("Carrito no encontrado o no autorizado");            
        }
        req.session.carritoSeleccionado=id_carrito;
        console.log("Carrito seleccionado correctamente");
        
    } catch (error) {
        console.error("Error al seleccionar el carrito: ", error);
        
    }
};
const agregarCarrito = async (req, res)=>{
    const {id_juego}=req.params;
    const {carritoSeleccionado}=req.session;
    if (!carritoSeleccionado) {
        console.log("No hay un carrito seleccionado");
    }
    try {
        const existe = await JuegosCarrito.findOne({
            where:{
                id_juego,
                id_carrito:carritoSeleccionado
            },
        });
        if (existe) {
            console.log("El juego ya está en el carrito seleccionado")
        }
        await JuegosCarrito.create({
            id_juego,
            id_carrito:carritoSeleccionado
        });
        console.log("Juego agregado al carrito");
    } catch (error) {
        console.error("Error al agregar el juego al carrito", error);
    }
};
const mostrarCarrito = async (req, res)=>{
    const {carritoSeleccionado}=req.session;
    if (!carritoSeleccionado) {
        console.log("No hay un carrito seleccionado");
    }
    try {
        const juegos = await JuegosCarrito.findAll({
            where:{id_carrito:carritoSeleccionado},
            include:[Juegos],
        });
        res.render("carrito/carrito",{
            juegos
        })
    } catch (error) {
        console.error("Error al mostrar el carrito: ", error);
    }
};

export {mostrarCarrito, seleccionarCarrito, crearCarrito, agregarCarrito};