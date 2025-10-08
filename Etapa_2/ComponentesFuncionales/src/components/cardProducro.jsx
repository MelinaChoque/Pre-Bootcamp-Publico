import { useState } from "react"
const CardProducto = ({name, price, descripcion,stock} ) => {
    const [contadorStock, setContadorStock] = useState(stock)
    return (
        <div className="card h-100 w-100 shadow" >
        <div className="card-body d-flex flex-column justify-content-between align-items-center">
            <h5 className="card-title "><strong>{name}</strong></h5>
            <h6 className="card-subtitle mb-2 text-muted">${price}</h6>
            <p className="card-text">{descripcion}</p>
            <p className={`card-text ${contadorStock > 0 ? ' fw-bold text-success' : ' fw-bold text-danger' }`}>
                {contadorStock > 0 ? `Stock : ${contadorStock}` : 'Agotado'}
            </p>
            <button onClick={() => setContadorStock (contadorStock - 1)} className={`btn w-50 d-flex justify-content-center ${contadorStock > 0 ? 'btn-primary' : 'btn-secondary'}`}  disabled={contadorStock === 0}>
                Comprar
            </button>
        </div>
    </div>
    )
}

export default CardProducto