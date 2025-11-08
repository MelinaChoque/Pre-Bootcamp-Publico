import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../contexto/AppContexto";

const EditarPlaylist = ({ cerraSesion }) => {
  const { estado, dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [nuevaPlaylist, setNuevaPlaylist] = useState({
    nombre: "",
    canciones: [],
  });
  const getCanciones = () => {
    const URL = "http://localhost:8000/api/canciones";
    axios(URL, { headers: { token_user: localStorage.getItem("token") } })
      .then((res) => {
        dispatch({ type: "LISTA_CANCIONES", payload: res.data });
      })
      .catch((e) => {
        dispatch({
          type: "ERRORES",
          payload: e.res.data,
        });
        if (e.status === 406) {
          cerraSesion();
        }
      });
  };

  const actualizarEstado = (e, id) => {
    if (id) {
      setNuevaPlaylist((nuevaPlaylist) => {
        const nuevaMusica = nuevaPlaylist.canciones
          .map(String)
          .includes(String(id))
          ? nuevaPlaylist.canciones.filter((c) => {
              return String(c) !== String(id);
            })
          : [...nuevaPlaylist.canciones, String(id)];
        return {
          ...nuevaPlaylist,
          canciones: nuevaMusica,
        };
      });
    } else if (e) {
      const { name, value } = e.target;
      setNuevaPlaylist((nuevaPlaylist) => ({
        ...nuevaPlaylist,
        [name]: value,
      }));
      dispatch({
        type: "ERRORES",
        payload: { ...estado.errores, [name]: null },
      });
    }
  };

  useEffect(() => {
    const URL = `http://localhost:8000/api/playlist/${id}`;
    axios(URL, { headers: { token_user: localStorage.getItem("token") } })
      .then((res) => {
        const data = res.data;
        console.log(res.data);
        setNuevaPlaylist({
          nombre: data.nombre,
          canciones: data.Musica?.map((c) => String(c._id)),
        });
      })
      .catch((e) => {
        if (e.status === 406) {
          cerraSesion();
        }
      });
  }, [id]);

  const editarPlaylist = (e) => {
    e.preventDefault();

    axios
      .put(
        `http://localhost:8000/api/playlist/${id}`,
        {
          nombre: nuevaPlaylist.nombre,
          canciones: nuevaPlaylist.canciones,
        },
        {
          headers: {
            token_user: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        dispatch({
          type: "EDITAR_PLAYLIST",
          payload: res.data,
        });
        navigate(`/playlist/${id}`);
      })
      .catch((error) => {
        if (e.status === 406) {
          cerraSesion();
        }
        console.log("Errores del backend:", error.response?.data?.errors);
        dispatch({
          type: "ERRORES",
          payload: error.response?.data?.errors,
        });
      });
  };

  useEffect(() => {
    getCanciones();
  }, []);

  return (
    <>
      <h2>Editar Playlist</h2>

      <div className="d-flex justify-content-center align-items-center">
        <form
          onSubmit={(e) => editarPlaylist(e)}
          className="content bg-primary text-white w-75 p-4 rounded text-center"
        >
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
              className={`form-control ${
                estado.errores?.nombre ? "is-invalid" : ""
              }`}
            />
            {estado.errores?.nombre && (
              <span className="tooltip-error">{estado.errores.nombre}</span>
            )}
          </div>

          <div className="mb-3">
            {estado.listaDeCancion.map((cancion) => (
              <label
                key={cancion._id}
                className="d-flex align-items-center p-2"
              >
                <input
                  type="checkbox"
                  value={cancion._id}
                  checked={nuevaPlaylist.canciones
                    .map(String)
                    .includes(String(cancion._id))}
                  onChange={() => actualizarEstado(null, cancion._id)}
                />
                {cancion.titulo} - {cancion.artista}
              </label>
            ))}
          </div>

          <button type="submit" className="btn btn-light mt-2">
            Actualizar Playlist
          </button>
        </form>
      </div>
    </>
  );
};
export default EditarPlaylist;
