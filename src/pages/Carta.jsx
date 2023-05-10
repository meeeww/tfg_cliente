import MainLayout from "../layout/MainLayout";
import '../estilos/estilos.css'
//import Carrusel from '../components/Carousel.jsx'
import CartaInformacion from "../components/Carta";
import Breadcumb from "../components/Breadcumb";

function Carta() {

  const nombrePagina = "Inicio"

  return (
    <MainLayout laPagina={nombrePagina}>
      <Breadcumb></Breadcumb>
        <CartaInformacion />
    </MainLayout>
  )
}

export default Carta
