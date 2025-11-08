import { Router } from 'express'
import playlistController from '../controllers/playlist.controller.js'
import validarToken from '../middleware/validarToken.js';

const playlistRuta = Router();

playlistRuta.get('/buscarPlaylist',validarToken ,  playlistController.buscarPlaylist);
playlistRuta.get('/',validarToken, playlistController.obtenerTodos)
playlistRuta.post('/crearPlaylist', playlistController.crearPlaylist)
playlistRuta.get('/:id', validarToken,playlistController.obtenerPlaylist)
playlistRuta.delete('/:id', validarToken, playlistController.eliminarPlaylist)
playlistRuta.put('/:id',validarToken, playlistController.actualizar)

export default playlistRuta;