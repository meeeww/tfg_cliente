import MainLayout from "../layout/MainLayout";
import '../estilos/estilos.css'
import Carrusel from '../components/Carousel.jsx'
import Informacion from "../components/Informacion";

function Inicio() {

  const nombrePagina = "Inicio"

  return (
    <MainLayout laPagina={nombrePagina}>
      <div className="mainBodyInicio">
          <Carrusel/>
      </div>
      <div>
          <Informacion/>
      </div>
    </MainLayout>
  )
}

export default Inicio
