import { useState } from 'react'
import './App.css'
import FormSuper from './components/formularioSuper'
import ListaSuperheroe from './components/listaSuperHeroe'
import CambiarHeader from './components/navHeader'

function App() {
  const [listaSuperheroes, setListaSuperheroes] = useState([])
  const [agregarHeroe, setAgregarHeroe] = useState(false)

  return (
    <>
      <div className='container-fluid'>
        <div className='row justify-content-center align-items-center'>
          <h1 className='mb-5'>Bienvenido a la Liga de Superhéroes</h1>
          <CambiarHeader setAgregarHeroe={agregarHeroe}/>
        
        </div>
        <FormSuper setListaSuperheroes={setListaSuperheroes} listaSuperheroes={listaSuperheroes} setAgregarHeroe={setAgregarHeroe} />
        <ListaSuperheroe listaSuperheroe={listaSuperheroes}/>
        
      </div>


    </>
  )
}

export default App
