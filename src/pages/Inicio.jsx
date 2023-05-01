import MainLayout from "../layout/MainLayout";
import '../estilos/estilos.css'
import Carrusel from '../components/Carousel.jsx'
import Breadcumb from "../components/Breadcumb";

function Inicio() {

  const nombrePagina = "Inicio"

  return (
    <MainLayout laPagina={nombrePagina}>
      <Breadcumb></Breadcumb>
      <div className="mainBodyInicio">
          <Carrusel/>
      </div>
    </MainLayout>
  )
}

export default Inicio
