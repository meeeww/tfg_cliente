import { NavLink } from "react-router-dom";
import Logo from '../assets/Logo.png'

const linksLeft = [
    { name: 'Main', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Coffee', href: '/coffee' },
    { name: 'Contact Us', href: '/contactus' },
]

const linksRight = [
    { name: 'Sign In', href: '/signin', clase: "signin" },
    { name: 'Sign Up', href: '/signup', clase: "signup" },
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
                <nav className="navHeader">
                    {linksRight.map((item) => (
                        <NavLink to={item.href} id={item.clase} key={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>{item.name}</NavLink>
                    ))}
                </nav>
            </div>
        </div>
    </header>
);

export default Header