
import { useState, useEffect } from "react";
import axios from "axios";

const Imagen = () => {

    const [imagen, setImagen] = useState("");

    
    const obtenerFoto = () => {
      try {
        const URL = `https://api.thecatapi.com/v1/images/search`
        axios(URL)
            .then(response => {
                setImagen(response.data[0].url); 
            })
      } catch (error) {
        console.log("Error al obtener una imagen");
      }
    };


  useEffect(() => {
    obtenerFoto(); 
  }, []);


    return(
        <div className="aling-items-center justify-content-center ">
            <img className="object-fit-contain border rounded "
            style={{ height: "300px" }}
            src={imagen} alt="Imagen random" />
            <div className="d-flex justify-content-start ">
                <button className="btn btn-primary rounded-1 mt-3" onClick={obtenerFoto} > Fetch New Random Image</button>
            </div>

        </div>
    )
}

export default Imagen