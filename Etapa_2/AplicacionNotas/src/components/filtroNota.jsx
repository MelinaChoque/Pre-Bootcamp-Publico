import AppContext from "../contexto/AppContexto";
import { useContext } from "react";
const FiltroNota = () => {
  const { estado, dispatch } = useContext(AppContext);

  return (
    
    <select
      className="form-select w-50 rounded-1 "
      value={estado.filtroActual}
      onChange={(e) => 
        dispatch({
          tipo : "FILTRAR",
          filtro: e.target.value,
        })
      }
      name=""
      id=""
    >
        
      <option value="todas">Todas</option>
      <option value="baja">Baja</option>
      <option value="media">Media</option>
      <option value="alta">Alta</option>
    </select>


  );
};

export default FiltroNota;
