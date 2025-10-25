import AppContext from "../contexto/AppContexto";
import { useContext } from "react";

const FormNota = ({children}) => {  
  
  const { estado, dispatch } = useContext(AppContext);

  const manejarEnvio = (e) => {
    e.preventDefault();
    dispatch({ tipo: "VALIDAR" });

    if (estado.nota.length < 1 || estado.importancia =="") return;

    const nuevaNota = {
      id: estado.id,
      nota: estado.nota,
      importancia: estado.importancia,
    };

    dispatch({ tipo: "AGREGAR_NOTA", datos: nuevaNota });
    dispatch({ tipo: "VACIAR_FORM" }); 

  };

  return (
    <form onSubmit={manejarEnvio} className="row gap-3 justify-content-center">
      <input
        tipo="text"
        value={estado.nota}
        placeholder="Escribe tu nota"
        onChange={(e) => 
        dispatch({
          tipo : "ACTUALIZAR",
          campo: "nota",
          valor: e.target.value,
        })
        }
        className={`form-control w-75 rounded-1  ${
          estado.error.nota ? "form-control is-invalid" : ""
        }`}
      />
      {estado.error.nota && (
        <p className="invalid-feedback ">{estado.error.nota}</p>
      )}
      <select
        className={`form-select w-75 rounded-1 ${
          estado.error.importancia ? "is-invalid" : ""
        }`}
        value={estado.importancia}
        onChange={(e) =>
          dispatch({
            tipo: "ACTUALIZAR",
            campo: "importancia",
            valor: e.target.value  
          })
        }
      >
        <option value="" selected>
          ---
        </option>
        <option value="baja">Baja</option>
        <option value="media">Media</option>
        <option value="alta">Alta</option>
      </select>
      {estado.error.importancia && <p className="invalid-feedback  ">{estado.error.importancia}</p>}
      {children}
    </form>
  );
};

export default FormNota;
