import { Router } from "express"
import musicaController from "../controllers/musica.controller.js"
import validarToken from "../middleware/validarToken.js"
const rutaMusica = Router()

rutaMusica.get('/buscarMusica', validarToken, musicaController.buscarMusica)
rutaMusica.get('/',validarToken, musicaController.obtenerTodos)
rutaMusica.post('/crearCancion',validarToken, musicaController.crearMusica)
rutaMusica.get('/:id',validarToken, musicaController.obtenerMusica)
rutaMusica.delete('/:id',validarToken, musicaController.eliminarMusica)
rutaMusica.put('/:id', validarToken,musicaController.actualizar)


export default rutaMusica