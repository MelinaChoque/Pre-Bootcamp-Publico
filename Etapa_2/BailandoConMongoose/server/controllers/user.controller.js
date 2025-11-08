import { User } from '../models/users.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'


dotenv.config()
const SECRET = process.env.SECRET;

const userController = {
    obtenerUsuarios: async (req, res) => {
        try {
            const todosUsuarios = await User.find()
            return res.status(201).json(todosUsuarios)
        } catch (e) {
            return res.status(400).json(e)
        }
    },
    crearUsuario: async (req, res) => {
        const { nombre, apellido, email, contra, contraVerif } = req.body
        const nuevoArreglo = { nombre, apellido, email, contra, contraVerif }

        try {
            const nuevoUsuario = await User.create(nuevoArreglo)
            const guardarToken = {
                nombre: nuevoUsuario.nombre,
                apellido: nuevoUsuario.apellido,
                email: nuevoUsuario.email,
                id: nuevoUsuario._id,
            }
            jwt.sign(guardarToken, SECRET, { expiresIn: "1m" }, (err, token) => {
                return res.status(201).json({ token })
            })

        } catch (e) {
            const messages = {};
            if (e.name === "ValidationError") {
                Object.keys(e.errors).forEach(key => {
                    messages[key] = e.errors[key].message;
                })
            }
            return res.status(400).json({ errors: { ...messages } })
        }
    },
    login: async (req, res) => {
        const { email, contra } = req.body;
        const usuarioActual = await User.findOne({ email })

        if (!usuarioActual) {
            return res.status(404).json({ errors: { email: "El email no existe" } })
        }
        const respuestaBcrypt = await bcrypt.compare(contra, usuarioActual.contra)

        if(!respuestaBcrypt){
            return res.status(404).json({errors:{contra : "Las credenciales no coinciden"}})
        }

        const guardarToken = {
            nombre: usuarioActual.nombre,
            apellido: usuarioActual.apellido,
            email: usuarioActual.email,
            id: usuarioActual._id,
        }
        jwt.sign(guardarToken, SECRET, { expiresIn: "1m" }, (err, token) => {
            return res.status(201).json({ token })
        })

    }


}

export default userController

