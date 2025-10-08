import { useState } from 'react'
import './App.css'
import CardProducto from './components/cardProducro'

function App() {
  const products =[
    {
      name: "Laptop",
      price :1500,
      descripcion: "Una potente para trabajar y jugar.",
      stock: 10, 
    },
    {
      name: "Smartphone",
      price :800,
      descripcion: "Un smartphone de última genereción con una de las mejores cámaras.",
      stock: 0, 
    },
    {
      name: "Auriculares",
      price :1500,
      descripcion: "Auriculares con cancelación de ruido. No escucharas nada a tu alrededor",
      stock: 6, 
    },
    {
      name: "Monitor",
      price :1500,
      descripcion: "Monitor 4K para una experiencia visual increible",
      stock: 7, 
    },
  ];  
  const [productos, setProductos] = useState(products)

  const contadorProducto = () =>{
    setContador((valorPrevio) => valorPrevio + 1);

  }

  return (
    <>  
      <h1 className="tituloTech p-5">TechStore - Tu Destino para la Mejor Tecnología</h1>
      <div className='container mt-3 w-100 h-auto'>
        <div className='row p-3 '>
          {productos.map((product,index) => (
            <div className="col-md-3 " key={index} >
              <CardProducto name= {product.name} price = {product.price}  descripcion= {product.descripcion} stock= {product.stock} />
            </div>
          ))}    
        </div>
      
      </div>

    </>
  )
}

export default App
