const CambiarHeader = ({setAgregarHeroe}) =>{
    console.log(setAgregarHeroe)
    return (
        <p className="text-white">
            {setAgregarHeroe === false ? (
                <h2>Registro de Superhéroes</h2>
            ) :(
                <h2 className="text-success">Felicitaciones resgistraste con exito un Superheroe </h2>
            )
            }

        </p>

    )
    
}

export default CambiarHeader