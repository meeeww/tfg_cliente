import { useState } from 'react'
import MainLayout from "../layout/MainLayout";
import '../estilos/estilos.css'
import Slider1 from '../assets/Slider1.jpg'
import Slider2 from '../assets/Slider2.jpg'
import Slider3 from '../assets/Slider3.jpg'
import Slider4 from '../assets/Slider4.jpg'

function Inicio() {

  const nombrePagina = "Inicio"

  return (
    <MainLayout laPagina={nombrePagina}>
      <div className="mainBodyInicio">
          <div className="wrapper">
            <div className="carrusel">
                <img src={Slider1} alt="" />
                <img src={Slider2} alt="" />
                <img src={Slider3} alt="" />
                <img src={Slider4} alt="" />
            </div>
          </div>
      </div>
    </MainLayout>
  )
}

export default Inicio
