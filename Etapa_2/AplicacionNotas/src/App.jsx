import { useState, useReducer } from "react";
import "./App.css";
import FormNota from "./components/formNota";
import ListaNota from "./components/listaNota";
import FiltroNota from "./components/filtroNota";
import { appReducer, estadoInicial } from "./reducers/AppReducer";
import AppContext from "./contexto/AppContexto";

function App() {

  const [estado, dispatch] = useReducer(appReducer, estadoInicial);

  return (
    <>
      <AppContext.Provider value={{ estado, dispatch }}>
        <div className="container d-flex justify-content-center align-items-center h-100">
          <div className="card w-50 h-auto text-center">
            <div className=" card-body justify-content-center row mx-auto  gap-3 ">
              <div className="card-title">Notas</div>
              <FormNota>
                <button className="btn btn-primary w-50">Agregar nota</button>
              </FormNota>

              {estado.listaNota.length === 0 ? (
                <p>No se ingresó ninguna nota aún</p>
              ) : (
                <>
                  <FiltroNota />
                  <ListaNota />
                </>
              )}
            </div>
          </div>
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
