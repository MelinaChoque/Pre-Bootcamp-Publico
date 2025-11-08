import Router from "express"
import userController from "../controllers/user.controller.js"


const usersRutas = Router()

usersRutas.get("/",userController.obtenerUsuarios)
usersRutas.post("/nuevoUsuario",userController.crearUsuario)
usersRutas.post("/login",userController.login)
export default usersRutas