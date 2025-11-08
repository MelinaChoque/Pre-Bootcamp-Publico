import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import AppContext from "../contexto/AppContexto";
import { useNavigate } from "react-router-dom";

const CrearCancion = ({cerraSesion}) => {
  const { estado, dispatch } = useContext(AppContext);
  const navigate = useNavigate()
  const [nuevaCancion, setNuevaCancion] = useState({
    titulo: "",
    artista: "",
    anioLanzamiento: 0,
    genero: "",
  });
  const actualizarEstado = (e) => {
    const { name, value } = e.target;
    setNuevaCancion({ ...nuevaCancion, [name]: value });
  };

const crearCancion = (e) => { 
  e.preventDefault();
  const URL = "http://localhost:8000/api/canciones/crearCancion";

  axios.post(URL, nuevaCancion, {
    headers: { token_user: localStorage.getItem("token") }
  })
  .then(response => {
    dispatch({
      type: "AGREGAR_CANCION",
      payload: response.data,
    });
    navigate('/')
  })
  .catch(e => {
    if (e.response?.status === 406) {
      cerraSesion();
    }
    dispatch({
      type: "ERRORES",
      payload: e.response?.data?.errors,
    });
  });
};

  return (
    <>
      <h2>¡Agrega una canción!</h2>
      <div className="d-flex justify-content-center align-items-center">
        <form
          onSubmit={(e) => crearCancion(e)}
          className="content bg-primary text-white w-75 p-4 rounded text-center"
        >
          <div className="input-container">
            <label className="w-100 text-start ms-5 ps-5 mb-3"   htmlFor="titulo">
              <strong >Titulo:</strong>
            </label>
            <input
              type="text"
              name="titulo"
              value={nuevaCancion.titulo}
              onChange={actualizarEstado}
              className={`form-control w-75  ${
                estado.errores ?.titulo ? "is-invalid" : ""
              }`}
            />
            {estado.errores ?.titulo && (
              <span className="tooltip-error">{estado.errores ?.titulo}</span>
            )}
          </div>
          <div className="input-container">
            <label  className="w-100 text-start ms-5 ps-5 mb-3"    htmlFor="artista">
              <strong>Artista:</strong>
            </label>
            <input
              type="text"
              value={nuevaCancion.artista}
              name="artista"
              onChange={actualizarEstado}
              className={`form-control w-75 rounded-1  ${
                estado.errores ?.artista ? "form-control is-invalid" : ""
              }`}
            />
            {estado.errores ?.artista && (
              <span className="tooltip-error">{estado.errores ?.artista}</span>
            )}
          </div>
          <div className="input-container">
            <label  className="w-100 text-start ms-5 ps-5 mb-3"    htmlFor="AnioLanzamiento">
              <strong>Año de lanzamiento:</strong>
            </label>
            <input
              type="number"
              name="anioLanzamiento"
              value={nuevaCancion.anioLanzamiento}
              onChange={actualizarEstado}
              className={`form-control w-75 rounded-1  ${
                estado.errores ?.anioLanzamiento ? "form-control is-invalid" : ""
              }`}
            />
            {estado.errores ?.anioLanzamiento && (
              <span className="tooltip-error">
                {estado.errores ?.anioLanzamiento}
              </span>
            )}
          </div>
          <div className="input-container">
            <label  className="w-100 text-start ms-5 ps-5 mb-3"    htmlFor="Genero">
              <strong>Genero:</strong>
            </label>
            <input
              type="text"
              name="genero"
              value={nuevaCancion.genero}
              onChange={actualizarEstado}
              className={`form-control w-75 rounded-1  ${
                estado.errores ?.genero ? "form-control is-invalid" : ""
              }`}
            />
            {estado.errores ?.genero && (
              <span className="tooltip-error">{estado.errores ?.genero}</span>
            )}
          </div>
          <button type="submit">Agregar canción</button>
        </form>
      </div>
    </>
  );
};

export default CrearCancion;
