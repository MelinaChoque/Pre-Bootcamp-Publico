import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({setLogin}) => {
  const [errors, setErrors] = useState({});
  const [estado, setEstado] = useState({
    email: "",
    contra: "",
  });

  const ActualizarEstado = (e) => {
    setEstado({ ...estado, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const procesoLogin = (e) => {
    e.preventDefault();
    const URL = "http://localhost:8000/api/users/login";
    axios
      .post(URL, estado)
      .then(
        response => {
        localStorage.setItem("token", response.data.token);
        setLogin(true);
        setErrors({});
        navigate("/");
      })
      .catch(e => setErrors(e.response.data.errors));
  };
  return (
    <>

      <div className="d-flex justify-content-center align-items-center">
        <form action="" onSubmit={(e) => procesoLogin(e)} className="content bg-light w-75 p-4 rounded text-center">
          <h3>Loguearme</h3>
          <div className="input-container mb-3">
            <label className="w-75 text-start" htmlFor="Email">Email:</label>
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
            { errors.email  && (
              <span className="tooltip-error">{ errors.email }</span>
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
            { errors.contra  && (
              <span className="tooltip-error">{ errors.contra }</span>
            )}
            
          </div>
          <button className="btn btn-primary">Ingresar</button>
        </form>
      </div>
    </>
  );
};

export default Login;
