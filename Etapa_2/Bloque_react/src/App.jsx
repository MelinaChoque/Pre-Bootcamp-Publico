
import './App.css'
import HeaderTarjeta from './components/HeaderTarjeta';
import ContenedorPrincipal from './components/ContenedorPrincipal';
import ContenedorRosa from './components/ContenedorRosa';
import ContenedorAzul from './components/ContenedorAzul';
import ContenedorVerde from './components/ContendedorVerde';
import ContenedorCeleste from './components/ContenedorCeleste';

function App() {

  
  return (
    <>
    
    <ContenedorPrincipal>
      <HeaderTarjeta />
      <div className="d-flex flex-row">
          <ContenedorRosa>
            <div className="d-flex ">
              <ContenedorAzul/>
              <ContenedorAzul/>
              <ContenedorAzul/>
            </div>
            <ContenedorVerde/>
          </ContenedorRosa>
          <ContenedorCeleste/>
        </div>

    </ContenedorPrincipal>

    </>
  );
};

export default App
