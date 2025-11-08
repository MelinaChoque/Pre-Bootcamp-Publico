import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import App from './App.jsx'
import VistaObra from './vistaObra.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
    
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/obra/:id" element={<VistaObra />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
