import mongoose from "mongoose";
import bcrypt from 'bcrypt'
const userEsquema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: [true, "El nombre es obligatorio"],
            minlenght: [3, "El nombre tiene que tener como minimo 3 caracteres"]
        },
        apellido: {
            type: String,
            required: [true, "El apellido es obligatorio"],
            minlenght: [3, "El apellido tiene que tener como minimo 3 caracteres"]
        },
        email: {
            type: String,
            required: [true, "El email es obligatorio"],
            minlenght: [3, "El email tiene que tener como minimo 3 caracteres"]
        },
        contra: {
            type: String,
            required: [true, "La contraseña es obligatoria"],
            minlenght: [8, "La contraseña tiene que tener como minimo 8 caracteres"]
        },
    },{timestamops:true}
)

userEsquema.virtual('contraVerif').get(
    function(){
        return this._contraVerif;
    }
).set(function(value){
    this._contraVerif = value;
})

userEsquema.pre('validate',function(next){
    if(this.contra !== this.contraVerif){
        this.invalidate('contraVerif','La contraseña y la contraseña de verificaion no coinciden')
    }
    next();
})

userEsquema.pre('save',function(next){
    bcrypt.hash(this.contra, 10).then((contraEncriptada)=>{
        this.contra = contraEncriptada;
        next()
    })
})


const User = mongoose.model('users',userEsquema)

export {User, userEsquema}