import mongoose from "mongoose";
import  { esquemaMusica } from "./cancion.model.js";

const esquemaPlaylist = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "El nombre de la playlist es obligatorio"],
        unique: true
    },
    Musica: [esquemaMusica] 
}, { timestamps: true });

const Playlist = mongoose.model('playlist', esquemaPlaylist);
export default Playlist;
