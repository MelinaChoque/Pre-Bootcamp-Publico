import { useContext, useEffect } from "react";
import AppContext from "../contexto/AppContexto";
import axios from "axios";
import { Link } from "react-router-dom";

const ListaPlaylist = ({cerraSesion}) => {
  const { estado, dispatch } = useContext(AppContext);

  const obtenerPlaylist =  () => {
    const URL = "http://localhost:8000/api/playlist"
    axios(URL,{headers : {token_user : localStorage.getItem("token")}}).then((res)=>{
      dispatch({ type: "LISTA_PLAYLIST", payload: res.data });
      
    }).catch (err => {
      if (err.response?.data?.errors) {
        dispatch({ type: "ERRORES", payload: err.response.data.errors });
      } else {
        dispatch({
          type: "ERRORES",
          payload: { general: "Error al obtener playlist" },
        });
      }
      if(e.status === 406){
        cerraSesion()
      }
    }
  )
  };
const buscarPlaylist = (nombre = "") => {
    const URL = `http://localhost:8000/api/playlist/buscarPlaylist?nombre=${nombre}`
axios(URL, {headers : {token_user : localStorage.getItem("token")}}).then((res)=>{
    dispatch({ type: "LISTA_PLAYLIST", payload: res.data });
  }).catch(e=>{
      dispatch({type:"ERRORES",payload: res.data})
      if(e.status === 406){
        cerraSesion()
      }
    }
  )
};
  useEffect(() => {
    obtenerPlaylist();
    buscarPlaylist()
  }, []);

  return (
    <div>
      <h2>Lista de Playlist</h2>
      <input type="search" 
        placeholder="Buscar por título, artista o género"
        onChange={(e)=> buscarPlaylist (e.target.value)}
      />
      

      <ol>
        {estado.listaPlaylist.map((playlist) => (
          <li key={playlist._id}>
            <span><Link to={`/playlist/${playlist._id}`}>{playlist.nombre} </Link> </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ListaPlaylist