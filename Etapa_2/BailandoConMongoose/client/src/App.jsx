import { Routes, Route, NavLink, Link, useNavigate } from "react-router-dom";
import "./App.css";
import ListaCanciones from "../views/ListaCanciones";
import UnaCancion from "../views/UnaCancion";
import { appReducer, estadoInicial } from "../reducers/cancionReducer";
import AppContext from "../contexto/AppContexto";
import { useReducer, useState } from "react";
import CrearCancion from "../views/CrearCancion";
import ListaPlaylist from "../views/ListaPlaylist";
import CrearPlaylist from "../views/CrearPlaylist";
import UnaPlaylist from "../views/UnaPlaylist";
import EditarCancion from "../views/EditarCancion";
import EditarPlaylist from "../views/EditarPlaylist";
import Login from "../views/Login";
import Registo from "../views/Registro";
import CancionApi from "../components/cancionApi";
function App() {
  const [estado, dispatch] = useReducer(appReducer, estadoInicial);
  const[login, setLogin] = useState(false)
  const navigate = useNavigate()

  const cerraSesion = () =>{
    localStorage.removeItem("token")
    setLogin(false)
    navigate('/login')

  }
  return (
    
    <AppContext.Provider value={{ estado, dispatch }}>
      
 
    {(login) ? <>
      <nav className="d-flex justify-content-between p-3 bg-light">
        <Link className="text-decoration-none" to="/">Canciones</Link>
        <Link className="text-decoration-none" to="/crearCancion">Agregar canción</Link>
        <Link className="text-decoration-none" to="/playlist">Playlists</Link>
        <Link className="text-decoration-none" to="/crearPlaylist">Agregar playlist</Link>
        <button className="btn btn-primary" onClick={cerraSesion}>Cerrar sesion</button>
      </nav>
    </> 
    :
     <>
     <nav className="w-100  d-flex justify-content-end mb-5">
      <Link className="btn btn-success text-decoration-none  mx-3" to="/login">Login</Link>
      <Link className="btn btn-warning text-decoration-none  mx-3" to="/registro">Register</Link>
     </nav>

     </>
     }
      <CancionApi setLogin={setLogin} login={login}/> 


      <Routes>
        <Route path="/" element={<ListaCanciones />} />
        <Route path="/canciones/:id" element={<UnaCancion cerraSesion={cerraSesion} />} />
        <Route path="/crearCancion" element={<CrearCancion cerraSesion={cerraSesion} />} />
        <Route path="/playlist" element={<ListaPlaylist cerraSesion={cerraSesion}  />} />
        <Route path="/playlist/:id" element={<UnaPlaylist cerraSesion={cerraSesion} />} />
        <Route path="/crearPlaylist" element={<CrearPlaylist cerraSesion={cerraSesion}  />} />
        <Route path="/editarCancion/:id" element={<EditarCancion cerraSesion={cerraSesion} />} />
        <Route path="/editarPlaylist/:id" element={<EditarPlaylist cerraSesion={cerraSesion} />} />
        <Route path="/login" element={<Login setLogin={setLogin} />} />
        <Route path="/registro" element={<Registo setLogin={setLogin}/>} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
