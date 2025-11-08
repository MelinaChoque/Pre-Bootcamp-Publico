import Playlist from "../models/playlist.model.js";
import { Musica } from "../models/cancion.model.js";


const PlaylistController = {
    obtenerTodos: async (req, res) => {
        try {
            const playlists = await Playlist.find();
            return res.status(200).json(playlists);
        } catch (e) {
            return res.status(400).json({ message: "Error al obtener playlists", error: e });
        }
    },
    crearPlaylist: async (req, res) => {
        const { nombre, canciones } = req.body;

        try {
            const cancionesBusqueda = await Musica.find({ _id: { $in: canciones } });

            if (cancionesBusqueda.length !== canciones.length) {
                return res.status(400).json({ message: "Alguna canción no se encontró" });
            }

            const nuevaPlaylist = {
                nombre,
                Musica: cancionesBusqueda
            };

            const savedPlaylist = await Playlist.create(nuevaPlaylist);
            res.status(201).json(savedPlaylist);

        } catch (error) {
            res.status(500).json({ message: "Error al crear playlist", error });
        }
    },
    obtenerPlaylist: async (req, res) => {
        const id = req.params.id;

        try {
            const unaPlaylist = await Playlist.findById(id)
            if (!unaPlaylist) {
                return res.status(404).json({ message: "El id no existe" })
            }
            res.status(201).json(unaPlaylist)
        } catch (e) {
            return res.status(400).json(e)
        }
    },

    eliminarPlaylist: async (req, res) => {
        const id = req.params.id;
        try {
            const eliminarPlaylist = await Playlist.findByIdAndDelete(id)
            if (!eliminarPlaylist) {
                return res.status(404).json({ message: "El id no existe" })
            }
            res.status(201).json({ message: "La cancion fue borrada con exito" })
        } catch (e) {
            return res.status(400).json(e)
        }
    },
actualizar: async (req, res) => {
  const id = req.params.id;
  const { nombre, canciones } = req.body;

  try {
    const datosActualizar = {};

     if (nombre !== undefined) datosActualizar.nombre = nombre;

    if (canciones !== undefined) {
      const cancionesBusqueda = await Musica.find({ _id: { $in: canciones } });
      if (canciones.length && cancionesBusqueda.length !== canciones.length) {
        return res.status(400).json({ message: "No se encontraron canciones" });
      }
      datosActualizar.Musica = cancionesBusqueda; 
    }

    const playlistActualizada = await Playlist.findByIdAndUpdate(
      id,
      datosActualizar,
      { new: true, runValidators: true }
    );

    if (!playlistActualizada) {
      return res.status(404).json({ message: "El id no existe" });
    }

    res.status(200).json(playlistActualizada);

  } catch (e) {
    console.error("❌ Error al actualizar playlist:", e);
    const messages = {};
    if (e.name === "ValidationError") {
      Object.keys(e.errors).forEach((key) => {
        messages[key] = e.errors[key].message;
      });
    }
    res.status(400).json({ errors: { ...messages } });
  }
},

    buscarPlaylist: async (req, res) => {

        try {
            const { nombre = "" } = req.query;

            const filtro = {};

            if (nombre) {
                filtro.nombre = { $regex: nombre, $options: "i" };
            }
            const playlist = await Playlist.find(filtro);
            res.status(200).json(playlist);
        } catch (error) {
            res.status(500).json({ message: "Error al buscar playlist", error });
        }

    }
}


export default PlaylistController;