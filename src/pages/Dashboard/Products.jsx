import Axios from 'axios'
import { useState, useEffect } from 'react';
import '../../estilos/estilos.css'
import imagen from '../../assets/image.png'
import circulo from '../../assets/circulo.png'

const managements = [
    { name: 'products', href: '#' },
    { name: 'orders', href: '#' },
    { name: 'contact', href: '#' },
    { name: 'customerFeedback', href: '#' },
]

const documents = [
    { name: 'documents', href: '#' },
    { name: 'jobApplications', href: '#' },
    { name: 'prospect', href: '#' },
]

function Dashboard() {

    const [productos, setProductos] = useState();

    let baseURL = "http://localhost:4000/API/productos/consultar";

    let config = {
        timeout: 10000,
    };

    useEffect(() => {
        Axios.get(baseURL, config)
            .then((res) => {
                //console.log("RESPONSE RECEIVED: ", res.data);
                setProductos(res.data)
                //localStorage.setItem("token", res.data)
                //location.replace("http://localhost:5173/login")
                return {
                    statusCode: 200,
                    body: JSON.stringify({ title: "this was a success" }),
                };
            })
    },)

    //var data = { /*nombreInicio: nombreInicio, contrasenaInicio: contrasenaInicio, agente: agente, date: date*/ };



    return (
        <>
            <div className="dashboardBody">
                <div className="barraDashboard">
                    <h1>La Tarrina</h1>
                    <div className="dashboardDashboard">
                        <h2>Dashboard</h2>
                    </div>
                    <div className="managementDashboard">
                        <h3>Management</h3>
                        {
                            managements.map((item) => (
                                <div key={item.name} className={"secondDashboard"}>
                                    <img src={imagen} style={{ width: "30px", height: "30px" }}></img>
                                    <h4><a key={item.name} href={item.href}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</a></h4>
                                </div>
                            ))}
                    </div>
                    <div className="documentDashboard">
                        <h3>Documents</h3>
                        {documents.map((item) => (
                            <div key={item.name} className={"secondDashboard"}>
                                <img src={imagen} style={{ width: "30px", height: "30px" }}></img>
                                <h4><a key={item.name} href={item.href}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</a></h4>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="panelDashboard">
                    <div className="headerDashboard">
                        <div className="welcomeMessageDashboard">
                            <h1 style={{ "padding-right": "1rem" }}>Welcome,</h1>
                            <h1>{"Admin"}</h1>
                        </div>
                        <div className="sessionDashboard">
                            <a href="#">Settings</a>
                            <a href="#">Logout</a>
                            <img src='#'></img>
                        </div>
                    </div>
                    <div className="panelInfoDashboardProducts">
                        <div className="reportsOverviewDashboard">
                            <h2>Product List</h2>
                            {
                                productos &&
                                productos.map((item) => (
                                    <div key={item.name} className="reportInfoDashboard">
                                        <div className="fechaInfoDashBoard">
                                            <h2>{item.id_producto}</h2>
                                            <h3>Stock: {item.stock}</h3>
                                        </div>
                                        <div className="imagenFotoInfoDashboard">
                                            <img src={item.foto_producto}></img>
                                        </div>
                                        <div className="informacionInfoDashboard">
                                            <h3>{item.nombre_producto}</h3>
                                            <h4>{item.descripcion_producto}</h4>
                                        </div>
                                        <h4>{item.coste_base}€</h4>
                                        <img src={circulo} style={{ width: "30px", height: "30px" }}></img>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
