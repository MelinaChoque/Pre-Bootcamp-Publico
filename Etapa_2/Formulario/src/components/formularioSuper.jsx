import { useState } from "react";


const FormSuper = ({listaSuperheroes, setListaSuperheroes, setAgregarHeroe}) => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    contra: "",
    contraVerf: "",
  });

  const [errorFormulario, setErrorFormulario] = useState({});

        console.log(listaSuperheroes)
  const manejarEnvio = (e) => {
    e.preventDefault();

    const errores = {};

    if (formulario.nombre.length < 4 ) {
      errores.nombre = "El nombre debe tener al menos 4 caracteres";
    }
    if (formulario.apellido.length < 4 ) {
      errores.apellido = "El apellido debe tener al menos 4 caracteres";
    }
    if (!formulario.correo.includes("@")) {
    errores.correo = "El correo debe contener @";
    } else if (formulario.correo.length < 13) {
    errores.correo = "El correo debe tener al menos 12 caracteres";
    }
    if (formulario.contra.length < 6) {
      errores.contra = "La contraseña debe tener al menos 6 caracteres";
    }
    if (formulario.contraVerf.length < 6) {
      errores.contraVerf = "La contraseña debe tener al menos 6 caracteres";
    }
    if (formulario.contraVerf !== formulario.contra) {
      errores.contraVerf = "Las contraseñas no coinciden";
    }

    if (Object.keys(errores).length > 0) {
      setErrorFormulario(errores);
      console.log(errores)
      return;
    }

    setListaSuperheroes([...listaSuperheroes, formulario]);


    setErrorFormulario({});
    setFormulario({
      nombre: "",
      apellido: "",
      correo: "",
      contra: "",
      contraVerf: "",
    });


  };

  return (
    <div className="d-flex justify-content-center align-items-center w-100 ">
      <form onSubmit={manejarEnvio} className="d-flex flex-column p-5 w-25 gap-2 ">
        <label htmlFor="nombre">Nombre:</label>
          <input
            
            type="text"
            value={formulario.nombre}
            onChange={(e) => setFormulario({ ...formulario, nombre: e.target.value })}
            className={errorFormulario.nombre ? 'form-control is-invalid' : ''}

            />
            {errorFormulario.nombre && (
            <p className="invalid-feedback ">{errorFormulario.nombre}</p>
            )}
        <label htmlFor="apellido">Apellido:</label>
        <input
          type="text"
          value={formulario.apellido}
          onChange={(e) => setFormulario({ ...formulario, apellido: e.target.value })}
          className={errorFormulario.apellido ? "form-control is-invalid" : '' }/>
          {errorFormulario.apellido && (
            <p className="invalid-feedback">{errorFormulario.apellido}</p>
          )}

        <label htmlFor="correo">Correo electronico:</label>
        <input
          type="text"
          value={formulario.correo}
          onChange={(e) => setFormulario({ ...formulario, correo: e.target.value })}
            className={errorFormulario.correo ? "form-control is-invalid" : ""}

                />
                {errorFormulario.correo && (
                <p className="invalid-feedback">{errorFormulario.correo}</p>
                )}         
        

        <label htmlFor="contra">Contraseña</label>
        <input
          type="password"
          value={formulario.contra}
          onChange={(e) => setFormulario({ ...formulario, contra: e.target.value })}
          className={errorFormulario.contra ? "form-control is-invalid" : " "}
        />
            {
            errorFormulario.contra &&(
            <p className="invalid-feedback"> {errorFormulario.contra} </p>
            )}

        <label htmlFor="correoVerf">Confirmar contraseña:</label>
        <input
          type="password"
          value={formulario.contraVerf}
          onChange={(e) => setFormulario({ ...formulario, contraVerf: e.target.value })}
          className={errorFormulario.contraVerf ? "form-control is-invalid" : ""}
        />
        {errorFormulario.contraVerf && (<p className="invalid-feedback">{errorFormulario.contraVerf} </p> )}

        <button type="submit" className="btn btn-primary mx-auto mt-3 w-50" onClick={() => setAgregarHeroe(true)}>Crear Superhéroe</button>
      </form>
    </div>
  );
};

export default FormSuper;


