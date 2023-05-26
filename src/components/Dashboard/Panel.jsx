import axios from "axios"
import { useEffect, useState } from "react"

const managements = [
    { name: 'clients', href: '/dashboard/', icon: "fa-solid fa-user" },
    { name: 'employees', href: '/dashboard/employees', icon: "fa-solid fa-helmet-safety" },
    { name: 'products', href: '/dashboard/products', icon: "fa-solid fa-mug-saucer" },
    { name: 'categories', href: '/dashboard/categories', icon: "fa-solid fa-tag" },
]

const clients = [
    { name: 'orders', href: '/dashboard/orders', icon: "fa-solid fa-cart-shopping" },
    { name: 'contact', href: '/dashboard/contact', icon: "fa-solid fa-phone" },
]

const documents = [
    { name: 'documents', href: '/dashboard/documents', icon: "fa-solid fa-folder-open" },
    { name: 'jobApplications', href: '/dashboard/jobapplication', icon: "fa-solid fa-plus" },
]

const Panel = () => {

    const [tienePermisos, setPermisos] = useState(true)

    useEffect(() => {
        axios.get("http://localhost:4000/API/sesiones/buscar?token=" + localStorage.getItem("token")).then(response => {
            if (response.data[0]) {
                axios.get("http://localhost:4000/API/usuarios/buscar?id=" + response.data[0]["id_usuario"]).then(response2 => {
                    if (response2.data[0]["permisos"] == 0) {
                        setPermisos(false)
                    }
                })
            }
        })
    })

    if (!tienePermisos) {
        location.replace("http://localhost:5173")
    }

    return (
        <div className="barraDashboard">
            <h1><a href="/">The Coffee Tub</a></h1>
            <div className="dashboardDashboard">
                <h2>Dashboard</h2>
            </div>
            <div className="managementDashboard">
                <h3>Management</h3>
                {managements.map((item) => (
                    <div key={item.name} className={"secondDashboard"}>
                        <i className={item.icon}></i>
                        <h4><a key={item.name} href={item.href}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</a></h4>
                    </div>
                ))}
            </div>
            <div className="clientsDashboard">
                <h3>Clients</h3>
                {clients.map((item) => (
                    <div key={item.name} className={"secondDashboard"}>
                        <i className={item.icon}></i>
                        <h4><a key={item.name} href={item.href}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</a></h4>
                    </div>
                ))}
            </div>
            <div className="documentDashboard">
                <h3>Documents</h3>
                {documents.map((item) => (
                    <div key={item.name} className={"secondDashboard"}>
                        <i className={item.icon}></i>
                        <h4><a key={item.name} href={item.href}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</a></h4>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Panel;