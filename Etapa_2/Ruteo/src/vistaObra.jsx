import { useParams, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import obras from "../src/js/obras"

const VistaObra = () => {

  const { id } = useParams(); 
  const obra = obras.find((e) => e.id === parseInt(id));
  const navigate = useNavigate()
  const lastId = obras[obras.length - 1].id;

  let id_mod = parseInt(id)

  console.log(id_mod+1)

  return (
    <div className="d-flex flex-column align-items-center w-100">
       <h2>{obra.titulo}</h2>
      <p><strong>Autor:</strong> {obra.autor}</p>
        <div className="w-100" style={{ maxWidth: "800px" }}>
            <img
            className="w-100 h-auto border-0 object-fit-contain"
            src={obra.imagen}
            alt={obra.titulo}
            style={{ maxHeight: "80vh" }}
            />
        </div>

      <div>
        <button className="btn btn-success mx-3 mt-5" onClick={() => navigate(`/obra/${id_mod - 1}`)} disabled={id_mod <= 1}>Volver</button>
        <Link to="/" className="btn btn-success mx-3 mt-5">Volver a la galería</Link> 
        <button className="btn btn-success mx-3 mt-5" 
        onClick={() => navigate(`/obra/${id_mod + 1}`)}
        disabled={id_mod == lastId}
        >Adelante</button>   
      </div>

    </div>
  )
}

export default VistaObra