import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "axios";
import Logo from '../assets/Logo.png'

const linksLeft = [
    { name: 'Main', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'About Us', href: '/aboutus' },
    { name: 'Contact Us', href: '/contactus' },
    { name: 'Work With Us', href: '/workwithus'},
]

const linksRightAdmin = [
    { name: 'Shopping Cart', href: '/cart', icono: "fa-solid fa-cart-shopping" },
    { name: 'Admin Panel', href: '/dashboard', icono: "fa-solid fa-hammer" },
    { name: 'User Page', href: '/signin', icono: "fa-solid fa-circle-user" },
]

const linksRight = [
    { name: 'Shopping Cart', href: '/cart', icono: "fa-solid fa-cart-shopping" },
    { name: 'User Page', href: '/signin', icono: "fa-solid fa-circle-user" },
]

function Header() {

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem("token") != null || localStorage.getItem("token") == "") {
            Axios.get("http://localhost:4000/API/sesiones/buscar?token=" + localStorage.getItem("token")).then(response => {
                if (response.data[0]) {
                    Axios.get("http://localhost:4000/API/usuarios/buscar?id=" + response.data[0]["id_usuario"]).then(response2 => {
                        if (response2.data[0]["permisos"] >= 1) {
                            setLoading(false)
                        }
                    })
                }
            })
        }
    }, [])

    if (isLoading) {
        return (
            <header className="headerHeader">
                <div className="logoHeader">
                    <NavLink to={"/"} ><img src={Logo} alt="Logo"></img></NavLink>
                </div>
                <div className="nav-linksHeader">
                    <nav className="navHeader">
                        {linksLeft.map((item) => (
                            <NavLink to={item.href} key={item.name} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>{item.name}</NavLink>
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
        )
    }

    return (
        <header className="headerHeader">
            <div className="logoHeader">
                <NavLink to={"/"} ><img src={Logo} alt="Logo"></img></NavLink>
            </div>
            <div className="nav-linksHeader">
                <nav className="navHeader">
                    {linksLeft.map((item) => (
                        <NavLink to={item.href} key={item.name} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>{item.name}</NavLink>
                    ))}
                </nav>
                <div className="register-loginHeader">
                    <nav className="navHeaderDerecha">
                        {linksRightAdmin.map((item) => (
                            <a key={item.name} href={item.href}><i className={item.icono}></i></a>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header