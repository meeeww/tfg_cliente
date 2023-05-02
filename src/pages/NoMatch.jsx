import { NavLink } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import '../estilos/estilos.css'
//import Carrusel from '../components/Carousel.jsx'

function NoMatch() {

    const mainColor = "#ad974f"
    const nombrePagina = "Inicio"

    return (
        <MainLayout laPagina={nombrePagina}>
            <div className="mainBread">
                <div className="titularBread">
                    <div className="tituloBread">
                        <h1>The &<h1 style={{ color: mainColor }}>C</h1>offee Tub</h1>
                    </div>
                    <div className="subtituloBread">
                        <h2>Oh no. The 404 Page!</h2>
                    </div>
                </div>
                <div className="botonesBread">
                    <NavLink to={"/"}><div>Take Me Back</div></NavLink>
                    <div className="sobreNosotrosBread">
                        <NavLink to={"/aboutus"}><div>About Us</div></NavLink>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default NoMatch
