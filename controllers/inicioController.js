import Juegos from "../models/Juegos.js";
import Plataformas from "../models/Plataformas.js";
import JuegosCarrito from "../models/JuegosCarrito.js"
import Carrito from "../models/Carrito.js";
const inicio = async (req, res)=>{
    try {
        const juegos = await Juegos.findAll({
            include:[{
                model:Plataformas,
                attributes:['nombre']
            }],
        });
        //console.log(JSON.stringify(juegos, null, 2));
        res.render("index",{
            juegos,
            user: req.session.user
        });
    } catch (error) {
        console.error('Error al obtener los juegos: ',error);
    }
};

const juegoSeleccionado = async (req, res)=>{
    const {id} = req.params;
    const juego = await Juegos.findByPk(id,{
        include:[{
            model:Plataformas,
            attributes:['nombre']
        }]
    });
    if (!juego) {
        console.log("Juego no encontrado")
    }
    req.session.juegoSeleccionado = juego;
    res.render("indox",{
        juegoSeleccionado:req.session.juegoSeleccionado || null,
        user: req.session.user
    });
};
const juegoSeleccionadoPlataforma = async (req, res)=>{
    const {id_plataforma} = req.params;
    try {
        const juegos = await Juegos.findAll({
            where:{ id_plataforma },
            include:[{
                model:Plataformas,
                attributes:['nombre']
            }]
        });
        //console.log(JSON.stringify(juegos,null,2));
        res.render("index",{
            juegos,
            user: req.session.user
        });
    } catch (error) {
        console.error("Error al obtener los juegos: ", error);
    }
};

// Controlador para manejar el carrito de un juego




export {inicio, juegoSeleccionado, juegoSeleccionadoPlataforma};