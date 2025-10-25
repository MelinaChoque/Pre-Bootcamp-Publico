import express from "express";
import { canciones, playlist } from "./api.js";
const app = express()
const PORT = 8080

app.listen (PORT, () =>{
    console.log(`El servidor se esta activo en el puerto ${PORT}`)
})


app.get('/api/cancion' ,(req,res) => {
    return res.status(200).json(canciones);

})

app.get('/api/playlist' ,(req,res) => {
    return res.status(200).json(playlist);
})

app.get('/', (req, res) => {
  res.send('Hola mundo!');

});

