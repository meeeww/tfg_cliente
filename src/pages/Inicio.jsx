import MainLayout from "../layout/MainLayout";
import '../estilos/estilos.css'
//import Carrusel from '../components/Carousel.jsx'
import Informacion from "../components/Informacion";
import Breadcumb from "../components/Breadcumb";

function Inicio() {

  const nombrePagina = "Inicio"

  return (
    <MainLayout laPagina={nombrePagina}>
      <Breadcumb></Breadcumb>
      <div className="mainBodyInicio">
        <Informacion />
      </div>
    </MainLayout>
  )
}

export default Inicio
