import { NavLink } from "react-router-dom";

const Footer = () => (
    <footer className="footerBody">
        <div className="containerFooter">
            <div className="footer_rowFooter">
                <div className="footer_linksFooter">
                    <h4>Company</h4>
                    <div className="linksOrganizerFooter">
                        <NavLink to={"/aboutus"}>About Us</NavLink>
                        <NavLink to={"/services"}>Our Services</NavLink>
                        <NavLink to={"/privacy"}>Privacy Policy</NavLink>
                    </div>
                </div>
                <div className="footer_linksFooter">
                    <h4>Find Us</h4>
                    <div className="linksOrganizerFooter">
                        <NavLink to={"/establishments"}>Establishments</NavLink>
                        <NavLink to={"/delivery"}>Delivery</NavLink>
                    </div>

                </div>
                <div className="footer_linksFooter">
                    <h4>Follow Us</h4>
                    <div className="social_linksFooter">
                        <NavLink to={"https://www.facebook.com"} className="fab fa-facebook-f"></NavLink>
                        <NavLink to={"https://www.instagram.com"} className="fab fa-instagram"></NavLink>
                        <NavLink to={"https://www.twitter.com"} className="fab fa-twitter"></NavLink>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer