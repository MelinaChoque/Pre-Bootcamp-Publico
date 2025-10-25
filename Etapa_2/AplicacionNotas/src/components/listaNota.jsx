import { useEffect } from "react";
import AppContext from "../contexto/AppContexto";
import { useContext } from "react";

const ListaNota = () => {

  const { estado, dispatch } = useContext(AppContext);
   
  const eliminarNota = (id) => {
    dispatch({ tipo: "ELIMINAR_NOTA", id });
  };

  useEffect(() => {
    dispatch({ tipo: "FILTRAR", filtro: estado.filtroActual });
  }, [estado.listaNota, estado.filtroActual, dispatch]);

  console.log(estado.filtroNota)
   console.log(estado.filtroActual)

  return (
    <div className="card gap-3 border-0 h-auto">
      {estado.filtroNota.length === 0 ? (
        <p className="text-danger">No hay notas encontradas.</p>
      ) : (
        estado.filtroNota.map((item, i) => (
          <div
            key={i}
            className="card-body d-flex justify-content-between align-items-center border rounded-1 bg-light"
          >
            <div className="card-title">
              {item.nota} - {item.importancia}
            </div>
            <button
              type="button"
              className="btn btn-danger btn-sm px-3"
              onClick={() => eliminarNota(item.id)}
            >
              Eliminar
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default ListaNota;
