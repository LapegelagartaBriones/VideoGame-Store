import Carrito from "../../models/Carrito.js";
import UsuarioCarrito from "../../models/usuarioCarrito.js";
import JuegosCarrito from "../../models/JuegosCarrito.js";
import Juegos from "../../models/Juegos.js";

const CarritoConfig =  (req, res)=>{
    res.render("carrito/carritoConfig",{
        user: req.session.user,
        csrf:req.csrfToken()
    })
};
const seleccionarCarrito = async (req,res)=>{
    const {carrito, defaultCarrito} = req.body;
    
    try {
        const carritoSeleccionado = carrito || defaultCarrito;

        const carritoUsuario = await UsuarioCarrito.findOne({
            where: { id_usuario:req.session.user, id_carrito:carritoSeleccionado},
        });
        if (!carritoUsuario) {
            console.log("Carrito no autorizado o inexistente");
        }
        req.session.carritoSeleccionado=carritoSeleccionado;
        console.log(`Carrito seleccionado: ${carritoSeleccionado}`);
        res.redirect("/");
    } catch (error) {
        console.error("No se pudo obtener el carrito: ", error);
    }
}

const alfabetoGriego = ["Alfa", "Beta", "Gamma", "Delta", "Épsilon"];

//const crearCarrito = async (req, res)=>{
//    const {id_usuario} = req.session;
//    try {
        //const carritosExistentes = await UsuarioCarrito.findAll({
          //  where:{id_usuario}
        //});
        //if (carritosExistentes.length >= alfabetoGriego.length) {
            //console.log("Límite de carritos alcanzado");
        //}
        //Asignar el siguiente nombre del alfabeto griego
        //const nombre = alfabetoGriego[carritosExistentes.length];
        //Crear el carrito
        //const nuevoCarrito = await Carrito.create({ nombre });
        //Asociamos el carrito al usuario
        //await UsuarioCarrito.create({
          //  id_usuario,
            //id_carrito:nuevoCarrito.id_carrito
        //});

//        console.log(`Carrito '${nombre}' creado exitosamente`);
  //  } catch (error) {
    //    console.error("Error al crear el carrito:", error)
    //}
//};

//const seleccionarCarrito = async (req, res)=>{
  //  const{id_usuario}=req.session;
    //const{id_carrito}=req.params;
    //try {
        //const carritoUsuario = await UsuarioCarrito.findOne({
          //  where:{id_usuario, id_carrito}
       // });
        //if (!carritoUsuario) {
          //  console.log("Carrito no encontrado o no autorizado");            
        //}
        //req.session.carritoSeleccionado=id_carrito;
        //console.log("Carrito seleccionado correctamente");
        
    //} catch (error) {
      //  console.error("Error al seleccionar el carrito: ", error);
        
    //}
//};
const agregarCarrito = async (req, res)=>{
    const {id_juego}=req.params;
    const {carritoSeleccionado}=req.session;
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
            id_carrito:1
        });
        const juegos = await Juegos.findAll({
            include:[{
                model:Plataformas,
                attributes:['nombre']
            }],
        });
        console.log("Juego agregado al carrito: ", id_juego);
        redirect("/")
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
            where:{id_carrito:1},
            include:[Juegos],
        });
        res.render("carrito/carrito",{
            juegos,
            carrito: 1
        })
    } catch (error) {
        console.error("Error al mostrar el carrito: ", error);
    }
};

export {mostrarCarrito, seleccionarCarrito, agregarCarrito, CarritoConfig};