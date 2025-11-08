import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AppContext from "../contexto/AppContexto";
import axios from "axios";

const UnaPlaylist = ({cerraSesion}) => {
  const { dispatch } = useContext(AppContext);
  const [dataPlaylist, setDataPlaylist] = useState([]);
  const { id } = useParams();

  
  const URL = `http://localhost:8000/api/playlist/${id}`;
  const navigate = useNavigate()

  
  const getData = () => {
  axios(URL,{headers : {token_user : localStorage.getItem("token")}})
    .then((res) => {
      setDataPlaylist(res.data);
    })
    .catch(e =>{  
      if(e.status === 406){
        cerraSesion()
      }
    }
    );
  };

  useEffect(() => {
    getData();
  }, []);

  const eliminarPlaylist = () => {
    axios
      .delete(URL, {headers : {token_user : localStorage.getItem("token")}})
      .then((response) => {
      dispatch({
          type: "ELIMINAR_PLAYLIST",
          payload: id,
        });
        navigate("/playlist");
      })
      
      .catch(e =>{  
      if(e.status === 406){
        cerraSesion()
      }
    }
    );
  };

  const editarPlaylist = () =>{
    navigate(`/editarPlaylist/${id}`)
  }
  return (
    <>
      <h2>Detalles de la Playlist</h2>
      <p>
        <strong>Nombre:</strong> {dataPlaylist.nombre}
      </p>
      <div className="mb-3">
        {dataPlaylist.Musica?.map((c) => (
          <li key={c._id}>
            <span>
              {" "}
              {c.artista} - ({c.genero})
            </span>
          </li>
        ))}
      </div>
          <div className="w-100 d-flex justify-content-evenly">
          <button onClick={eliminarPlaylist} className="btn btn-danger">
            Eliminar Playlist
          </button>
          <button onClick={editarPlaylist} 
          className="btn btn-primary">Editar PLaylist</button>
        </div>
    </>
  );
};

export default UnaPlaylist;
