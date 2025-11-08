import axios from "axios";
import { useEffect, useState, useContext } from "react";
import AppContext from "../contexto/AppContexto";
import { useNavigate } from "react-router-dom";

const CrearPlaylist = ({cerraSesion}) => {
  const { estado, dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const [nuevaPlaylist, setNuevaPlaylist] = useState({
    nombre: "",
    canciones:[]
  });

  const actualizarEstado = (e,id) => {
    if (id) {
    setNuevaPlaylist((nuevaPlaylist) => ({
      ...nuevaPlaylist,
      canciones: nuevaPlaylist.canciones.includes(id)
        ? nuevaPlaylist.canciones.filter((c) => c !== id) 
        : [...nuevaPlaylist.canciones, id] 
    }));
  }else if(e){
      const { name, value } = e.target;
      setNuevaPlaylist(nuevaPlaylist => ({ ...nuevaPlaylist, [name]: value }));
    }

  };

  const getCanciones = () => {
    const URL="http://localhost:8000/api/canciones"

     axios(URL,  {headers : {token_user : localStorage.getItem("token")}})
      .then((res)=> {
          dispatch({ type: "LISTA_CANCIONES", payload: res.data })
      }).catch (
        e =>{
        dispatch({
          type: "ERRORES",
          payload: e.response ? e.response.data : e.message,
        })
          if(e.status === 406){
            cerraSesion()
          }
        }
    )
  };

   const crearPlaylist =  (e) => {
    e.preventDefault();
    const URL = "http://localhost:8000/api/playlist/crearPlaylist";
    
    axios.post(URL, nuevaPlaylist, {headers : {token_user : localStorage.getItem("token")}})
      .then((response) =>{
      dispatch({
        type: "AGREGAR_PLAYLIST",
        payload: response.data,
      });
      navigate('/playlist')

    }).catch ((error) => {
      dispatch({
        type: "ERRORES",
        payload: error.response?.data?.errors
      });
      if(e.status === 406){
        cerraSesion()
      }
    })
  };


  useEffect(() => {
    getCanciones();
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <form onSubmit={(e) => crearPlaylist(e)} className="content bg-primary text-white w-75 p-4 rounded text-center">
        <h2>¡Crea tu propia playlist!</h2>

        <div className="input-container mb-3">
          <label htmlFor="nombre">
            <strong>Nombre:</strong>
          </label>
          <input
            type="text"
            name="nombre"
            value={nuevaPlaylist.nombre}
            onChange={actualizarEstado}
            className={`form-control ${estado.errores?.nombre ? "is-invalid" : ""}`}
          />
          {estado.errores?.nombre && <span className="tooltip-error">{estado.errores.nombre}</span>}
        </div>

        <div className="mb-3">
          {estado.listaDeCancion.map((cancion) => (
            <label key={cancion._id} className="d-flex align-items-center p-2">
              <input
                type="checkbox"
                value={cancion._id} 
                checked={nuevaPlaylist.canciones.includes(cancion._id)}
                onChange={() => actualizarEstado(null, cancion._id)} 
              />
              {cancion.titulo} - {cancion.artista}
            </label>
          ))}
        </div>

        <button type="submit" className="btn btn-light mt-2">Agregar Playlist</button>
      </form>
    </div>
  );
};

export default CrearPlaylist;
