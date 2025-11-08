import { Musica }from "../models/cancion.model.js";


const musicaController = {
    obtenerTodos : async  (req, res)=> {
        try{
            const musica = await Musica.find();
            return res.status(201).json(musica)
        }catch(e){
            return res.status(400).json(e)
        }
    },
    crearMusica : async (req, res)=> {
        const {titulo, artista, anioLanzamiento, genero } = req.body;
        const nuevoArreglo = {titulo, artista,anioLanzamiento,genero} 
        try{
            const nuevaMusica = await Musica.create(nuevoArreglo)
            res.status(201).json(nuevaMusica)
        }catch(e){

            const messages = {};
            if(e.name === "ValidationError"){
                Object.keys(e.errors).forEach(key => {
                    messages[key] = e.errors[key].message;
                })
                
            }

            return res.status(400).json({errors : {...messages}})
        }
    },
    obtenerMusica: async (req, res)=> {
        const id = req.params.id;

        try{
            const unaCancion = await Musica.findById(id)
            if(!unaCancion){
                return res.status(404).json({message: "El id no existe"})
            }
            res.status(201).json(unaCancion)
        }catch(e){
            return res.status(400).json(e)
        }
    },
    eliminarMusica: async (req,res)=> {
        const id = req.params.id;
        try{
            const eliminarCancion = await Musica.findByIdAndDelete(id)
            if(!eliminarCancion){
                return res.status(404).json({message: "El id no existe"})
            }
            res.status(201).json({message: "La cancion fue borrada con exito"})
        }catch(e){
            return res.status(400).json(e)
        }
    },
    actualizar: async (req, res)=> {
        const id = req.params.id;
        const {titulo, artista, anioLanzamiento, genero } = req.body;
        const datosActualizar = {};
        if(titulo){
            datosActualizar.titulo = titulo
        }
        if(artista){
            datosActualizar.artista = artista
        }
        if(anioLanzamiento){
            datosActualizar.anioLanzamiento = anioLanzamiento
        }
        if(genero){
            datosActualizar.genero = genero
        }
        try{
            const actualizar = await Musica.findByIdAndUpdate(id, datosActualizar, {new: true, runValidators: true})
            if(!actualizar){
                return res.status(404).json({message: "El id no existe"})
            }
            res.status(201).json(actualizar)
        }catch(e){
            const messages = {};
            if(e.name === "ValidationError"){
                Object.keys(e.errors).forEach(key => {
                    messages[key] = e.errors[key].message;
                })
            }
            return res.status(400).json({errors : {...messages}})
        }
    },
    buscarMusica: async (req, res) =>{
        const { consulta } = req.query
        try{
            const buscarCancion = await Musica.find({
                $or:[
                    {titulo: { $regex : consulta, $options: "i"}},
                    {artista: { $regex : consulta, $options: "i"}},
                    {genero: { $regex : consulta, $options: "i"}},
                ]
              
            
            })
        res.status(200).json(buscarCancion);
        } catch (error) {
            res.status(500).json({ message: "Error al buscar canciones", error });
        }

    }
}


export default musicaController;