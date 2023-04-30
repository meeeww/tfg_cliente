import { NavLink } from "react-router-dom";
import Logo from '../assets/Logo.png'

const Header = () => (
    <header className="headerHeader">
        <div className="logoHeader">
            <img src={Logo} alt="Logo"></img>
        </div>
        <div className="nav-linksHeader">
            <nav className="navHeader">
                <NavLink to={"/"} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Main</NavLink>
                <NavLink to={"/menu"} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Menu</NavLink>
                <NavLink to={"/coffee"} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Coffee</NavLink>
                <NavLink to={"/contact"} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Contact Us</NavLink>
            </nav>
            <div className="register-loginHeader">
                <nav className="navHeader">
                    <NavLink to={"/signup"} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Sign Up</NavLink>
                    <NavLink to={"/signin"} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Sign In</NavLink>
                </nav>
            </div>
        </div>
    </header>
);

export default Header