import { useContext, useEffect } from "react";
import AppContext from "../contexto/AppContexto";
import axios from "axios";
import { Link } from "react-router-dom";

const ListaCanciones =  ({cerraSesion}) => {
  const { estado, dispatch } = useContext(AppContext);

  const getCanciones = () => {
    const URL = "http://localhost:8000/api/canciones"
    axios(URL, {headers : {token_user : localStorage.getItem("token")}}).then((res)=>{
      dispatch({ type: "LISTA_CANCIONES", payload: res.data });
    }).catch 
    (e =>{
      dispatch({ type: "ERRORES", payload: e.response ? e.response.data : e.message });
      if(e.status === 406){
        cerraSesion()
      }
    }
  ) 
};

const buscarCanciones = (consulta = "") => {
  const URL = `http://localhost:8000/api/canciones/buscarMusica?consulta=${consulta}`
    axios(URL, {headers : {token_user : localStorage.getItem("token")}}).then((res)=>{
      dispatch({ type: "LISTA_CANCIONES", payload: res.data });
    })
  .catch (
    e=>{
    dispatch({ type: "ERRORES", payload: e.response ? e.response.data : e.message });
    if(e.status === 406){
      cerraSesion()
    }  
  }
  )
};


  useEffect(() => {
    getCanciones();
    buscarCanciones()
  }, []);

  return (
    <div>

      <h2>Lista de Canciones</h2>

      <input type="search" 
        placeholder="Buscar por título, artista o género"
        onChange={(e)=> buscarCanciones (e.target.value)}
      />
      

      <ol>
        {estado.listaDeCancion.map((cancion) => (
          <li key={cancion._id}>
            <span><Link to={`/canciones/${cancion._id}`}>{cancion.titulo} </Link> de {cancion.artista} ({cancion.genero})</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ListaCanciones