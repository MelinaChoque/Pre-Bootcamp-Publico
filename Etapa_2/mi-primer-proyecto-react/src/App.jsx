import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>¡Bienvenido a mi aplicación de React!</h1>
      <h2>Lista de cosas por hacer:</h2>
      <ul>
        <li>Aprender React</li>
        <li>Construir una aplicación</li>
        <li>Desplegar la aplicación</li>
      </ul>

    </>
  )
}

export default App
