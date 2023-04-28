import { Link } from "react-router-dom"

const Header = () => (
    <header className="headerHeader">
        <div class="logoHeader">
            <img src={""} alt="Logo"></img>
        </div>
        <div class="nav-linksHeader">
            <nav className="navHeader">
                <a href="" class="nav-linkHeader">Inicio</a>
                <a href="" class="nav-linkHeader">Carta</a>
                <a href="" class="nav-linkHeader">Café</a>
                <a href="" class="nav-linkHeader">Contacto</a>
            </nav>
            <div class="register-loginHeader">
                <nav className="navHeader">
                    <a href="" class="nav-linkHeader">Registrate</a>
                    <a href="" class="nav-linkHeader">Inicia sesion</a>
                </nav>
            </div>
        </div>
    </header>
);

export default Header