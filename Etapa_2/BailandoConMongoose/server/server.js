import express from 'express';
import dotenv from 'dotenv';
import connectToDb from './config/base_de_datos.js'
import rutaMusica from './routes/musica.routes.js';
import playlistRuta from "./routes/playlist.routes.js";
import usersRutas from './routes/users.route.js';
import cors from 'cors'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())



connectToDb();

app.use('/api/canciones', rutaMusica)
app.use('/api/playlist', playlistRuta)
app.use('/api/users', usersRutas)


app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});