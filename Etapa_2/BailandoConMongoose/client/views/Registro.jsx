import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registo = ({ setLogin, login }) => {
    const navigate = useNavigate()
    const [errors, setErrors] = useState({});
  const [estado, setEstado] = useState({
    nombre: "",
    apellido: "",
    email: "",
    contra: "",
    contraVerif: "",
  });
  const ActualizarEstado = (e) => {
    setEstado({ ...estado, [e.target.name]: e.target.value });
  };

  const registrarUsuario = (e) =>{
    e.preventDefault()
    const URL = "http://localhost:8000/api/users/nuevoUsuario";
    axios.post(URL, estado).then(
        res =>{
            localStorage.setItem("token", res.data.token)
            setLogin(true)
            setErrors({})
            navigate('/')
        }
    ).catch(e => {
            setErrors(e.response?.data?.errors );
        });

  }
  
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <form
          action=""
          onSubmit={(e) => registrarUsuario(e)}
          className="content bg-light w-75 p-4 rounded text-center"
        >
          <h3>Registrarme</h3>
          <div className="input-container mb-3">
            <label className="w-75 text-start" htmlFor="Nombre">Nombre:</label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              onChange={(e) => ActualizarEstado(e)}
              value={estado.nombre}
              className={`form-control w-75  ${
                errors.nombre ? "is-invalid" : ""
              }`}
            />
            {errors.nombre && (
              <span className="tooltip-error">{errors.nombre}</span>
            )}
          </div>
          <div className="input-container mb-3">
            <label className="w-75 text-start" htmlFor="apellido">Apellido:</label>
            <input
              type="text"
              name="apellido"
              id="apellido"
              onChange={(e) => ActualizarEstado(e)}
              value={estado.apellido}
              className={`form-control w-75  ${
                errors.apellido ? "is-invalid" : ""
              }`}
            />
            {errors.apellido && (
              <span className="tooltip-error">{errors.apellido}</span>
            )}
          </div>
          <div className="input-container mb-3">
            <label className="w-75 text-start" htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => ActualizarEstado(e)}
              value={estado.email}
              className={`form-control w-75  ${
                errors.email ? "is-invalid" : ""
              }`}
            />
            {errors.email && (
              <span className="tooltip-error">{errors.email}</span>
            )}
          </div>
          <div className="input-container mb-3">
            <label className="w-75 text-start" htmlFor="Contra">Contraseña:</label>
            <input
              type="password"
              name="contra"
              id="contra"
              value={estado.contra}
              onChange={(e) => ActualizarEstado(e)}
              className={`form-control w-75  ${
                errors.contra ? "is-invalid" : ""
              }`}
            />
            {errors.contra && (
              <span className="tooltip-error">{errors.contra}</span>
            )}
          </div>
                    <div className="input-container mb-3">
            <label className="w-75 text-start" htmlFor="ContraVerif">Verificar contraseña:</label>
            <input
              type="password"
              name="contraVerif"
              id="contraVerif"
              value={estado.contraVerif}
              onChange={(e) => ActualizarEstado(e)}
              className={`form-control w-75  ${
                errors.contraVerif ? "is-invalid" : ""
              }`}
            />
            {errors.contraVerif && (
              <span className="tooltip-error">{errors.contraVerif}</span>
            )}
          </div>
          <button className="btn btn-primary">Registarse</button>
        </form>
      </div>
    </>
  );
};

export default Registo;
