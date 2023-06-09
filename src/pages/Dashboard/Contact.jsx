import Axios from 'axios'
import { useState, useEffect } from 'react';
import '../../estilos/estilos.css'
import Panel from '../../components/Dashboard/Panel'
import Header from '../../components/Dashboard/Header'



function Orders() {

    const [pedidos, setPedidos] = useState();

    let baseURL = "http://localhost:4000/API/contactos/consultar";

    let config = {
        timeout: 10000,
    };

    const [usuario, setUsuario] = useState([])
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        Axios.get(baseURL, config)
            .then((res) => {
                setPedidos(res.data)
                //localStorage.setItem("token", res.data)
                //location.replace("http://localhost:5173/login")
                return {
                    statusCode: 200,
                    body: JSON.stringify({ title: "this was a success" }),
                };
            })

        if (localStorage.getItem("token") != null || localStorage.getItem("token") == "") {
            Axios.get("http://localhost:4000/API/sesiones/buscar?token=" + localStorage.getItem("token")).then(response => {
                if (response.data[0]) {
                    Axios.get("http://localhost:4000/API/usuarios/buscar?id=" + response.data[0]["id_usuario"]).then(response2 => {
                        setUsuario(response2.data[0])
                        setLoading(false)
                    })
                }

            })
            // setUsuario(checkSession())
            // setLoading(false)
        }
    }, [])

    if (isLoading) {
        return (
            < div className="dashboardBody" >
                <Panel></Panel>
            </div >
        )
    }

    return (
        <>
            <div className="dashboardBody">
                <Panel></Panel>
                <div className="panelDashboard">
                    <div className="headerDashboard">
                        <div className="welcomeMessageDashboard">
                            <h1 style={{ "paddingRight": "1rem" }}>Welcome,</h1>
                            <h1>{usuario.nombre_usuario}</h1>
                        </div>
                        <Header />
                    </div>
                    <div className="panelInfoDashboardProducts">
                        <div className="reportsOverviewDashboard">
                            <h2>Order List</h2>
                            {
                                pedidos &&
                                pedidos.map((item, index) => (
                                    <div key={item.id_usuario + "-" + index} className="mainOrdersUserDashboard">
                                        <div>
                                            <h4>Contact ID: {item.id_contacto}</h4>
                                            <p>Name: {item.nombre}</p>
                                        </div>
                                        <div>
                                            <p>Email: {item.email}</p>
                                            <p>Phone: {item.telefono}</p>
                                        </div>
                                        <div>
                                            <p>Message:</p>
                                            <p>{item.mensaje}</p>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Orders
