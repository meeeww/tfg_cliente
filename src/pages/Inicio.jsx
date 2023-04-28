import { useState } from 'react'
import MainLayout from "../layout/MainLayout";
import '../estilos/estilos.css'
import Carrusel from '../components/Carousel.jsx'

function Inicio() {

  const nombrePagina = "Inicio"

  return (
    <MainLayout laPagina={nombrePagina}>
      <div className="mainBodyInicio">
          <Carrusel/>
          
      </div>
    </MainLayout>
  )
}

export default Inicio
