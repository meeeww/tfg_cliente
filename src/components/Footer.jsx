import { Link } from "react-router-dom"

const Footer = () => (
    <footer class="footerBody">
        <div class="containerFooter">
            <div class="footer-row">
                <div class="footer-links">
                    <h4>Compañia</h4>
                    <ul>
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="#">Nuestros servicios</a></li>
                        <li><a href="#">Politica de privacidad</a></li>
                        <li><a href="#">Afiliate</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h4>Encuentranos</h4>
                    <ul>
                        <li><a href="#">Pide en nuestra aplicacion</a></li>
                        <li><a href="#">Uber</a></li>
                        <li><a href="#">Establecimientos</a></li>

                    </ul>
                </div>
                <div class="footer-links">
                    <h4>Siguenos</h4>
                    <div class="social-links">

                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer