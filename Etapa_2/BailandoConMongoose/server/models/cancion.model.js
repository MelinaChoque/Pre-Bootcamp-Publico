import mongoose from "mongoose";

const esquemaMusica = mongoose.Schema(
    {
        titulo : {
            type : String,
            minlength : [6, "El titulo debe tener 6 caracteres"],
            maxlength : [255, "En titulo no puede ser tan largo"],
            required : [true, "El titulo es obligatorio"]
        },
        artista : {
            type: String,
            required : [true, "Tenes que agregar un artista"],
            minlength : [10, "El nombre del artista debe tener al menos 10 caracteres"],
            maxlength : [255, "Ese artista no me suena!, proba con uno mas corto"]
        },
        anioLanzamiento :  {
            type : Number,
            required : [true, "El año de lanzamiento es obligatorio"],
            min : [1900, "Proba con una más actual"],
            max : [2025, "¿Viajaste al futuro?, trata con una del pasasdo"]
        },
        genero : {
            type: String,
            required : [true, "El año es obligatorio"]
        }
    },
    {timestamps : true}
)


const Musica = mongoose.model('canciones',esquemaMusica)

export {Musica,esquemaMusica } ;