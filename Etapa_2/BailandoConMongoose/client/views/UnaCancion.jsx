import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState, useContext  } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../contexto/AppContexto";

const UnaCancion = ({cerrarSesion}) => {
  const { dispatch } = useContext(AppContext);
  const [dataCancion, setDataCancion] = useState({});
  const { id } = useParams();

  const URL = `http://localhost:8000/api/canciones/${id}`;
  const navigate = useNavigate()

  const getData = () => {
    axios(URL, {headers : {token_user : localStorage.getItem("token")}})
      .then((res) => setDataCancion(res.data))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getData();
  }, []);

  const eliminarCancion = () => {
    axios
      .delete(URL,{headers : {token_user : localStorage.getItem("token")}})
      .then((response) => {
      dispatch({
          type: "ELIMINAR_CANCION",
          payload: id,
        });
        navigate("/");
      }).catch(
        e => {
          console.log(e)
          if(e.status === 406){
            cerrarSesion()
          }
        }
      )
    };

  const editarCancion = () =>{
    navigate(`/editarCancion/${id}`)
  }

  return (
    <>
      <div className="w-100 ">
        <h2>Detalles de cancion</h2>
        <p>
          <strong>Titulo:</strong> {dataCancion.titulo}
        </p>
        <p>
          <strong>Artista:</strong> {dataCancion.artista}
        </p>
        <p>
          <strong>Año de lanzamiento: </strong> {dataCancion.anioLanzamiento}
        </p>
        <p>
          <strong>Genero:</strong> {dataCancion.genero}
        </p>

        <div className="w-100 d-flex justify-content-evenly">
          <button onClick={eliminarCancion} className="btn btn-danger">
            Eliminar cancion
          </button>
          <button onClick={editarCancion} 
          className="btn btn-primary">Editar cancion</button>
        </div>
      </div>
    </>
  );
};

export default UnaCancion;
