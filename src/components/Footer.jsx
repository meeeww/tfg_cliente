import { NavLink } from "react-router-dom";

const linksLeft = [
    { title: 'About Us', href: '/aboutus' },
    { title: 'Menu', href: '/menu' },
    { title: 'Privary Policy', href: '/privacy' },
    { title: 'Cookies Policy', href: '/cookies' },
]

const linksCenter = [
    { title: 'Work With Us', href: '/Workwithus' },
    { title: 'Contact Us', href: '/contactus' },
]

const linksRight = [
    { icon: 'fab fa-facebook-f', href: 'https://www.facebook.com' },
    { icon: 'fab fa-instagram', href: 'https://www.instagram.com' },
    { icon: 'fab fa-twitter', href: 'https://www.twitter.com' },
]

const Footer = () => (
    <footer className="footerBody">
        <div className="containerFooter">
            <div className="footer_rowFooter">
                <div className="footer_linksFooter">
                    <h4>Company</h4>
                    <div className="linksOrganizerFooter">
                        {linksLeft.map((item) => (
                            <NavLink key={item.title} to={item.href}>{item.title}</NavLink>
                        ))}
                    </div>
                </div>
                <div className="footer_linksFooter">
                    <h4>Find Us</h4>
                    <div className="linksOrganizerFooter">
                        {linksCenter.map((item) => (
                            <NavLink key={item.title} to={item.href}>{item.title}</NavLink>
                        ))}
                    </div>

                </div>
                <div className="footer_linksFooter">
                    <h4>Follow Us</h4>
                    <div className="social_linksFooter">
                        {linksRight.map((item) => (
                            <NavLink key={item.href} to={item.href} className={item.icon}></NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer