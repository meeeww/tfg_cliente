import { NavLink } from "react-router-dom";
import Logo from '../assets/Logo.png'

const linksLeft = [
    { name: 'Main', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Coffee', href: '/coffee' },
    { name: 'Contact Us', href: '/contactus' },
]

const linksRight = [
    { name: 'Shopping Cart', href: '/cart', icono: "fa-solid fa-cart-shopping" },
    { name: 'User Page', href: '/user', icono: "fa-solid fa-circle-user" },
]

const Header = () => (
    <header className="headerHeader">
        <div className="logoHeader">
            <NavLink to={"/"} ><img src={Logo} alt="Logo"></img></NavLink>
        </div>
        <div className="nav-linksHeader">
            <nav className="navHeader">
                {linksLeft.map((item) => (
                    <NavLink to={item.href} key={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>{item.name}</NavLink>
                ))}
            </nav>
            <div className="register-loginHeader">
                <nav className="navHeaderDerecha">
                    {linksRight.map((item) => (
                        <a key={item.name} href={item.href}><i className={item.icono}></i></a>
                    ))}
                </nav>
            </div>
        </div>
    </header>
);

export default Header