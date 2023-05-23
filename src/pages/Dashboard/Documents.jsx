import Axios from 'axios'
import { useState, useEffect } from 'react';
import Panel from '../../components/Dashboard/Panel'
import Header from '../../components/Dashboard/Header'



function Orders() {

    let baseURL = "http://localhost:4000/API/usuarios/consultar";

    let config = {
        timeout: 10000,
    };

    const [usuario, setUsuario] = useState([])
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
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
                    <div className="dashboardDocuments">
                        <div className="occupationalHazardsDocuments">
                            <h1>Texto</h1>
                            <video src='' autoPlay={false}></video>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Orders
