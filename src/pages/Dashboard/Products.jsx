import Axios from 'axios'
import { useState, useEffect } from 'react';
import '../../estilos/estilos.css'
import Panel from '../../components/Dashboard/Panel'
import ModalConfiguracion from '../../modals/Product/ProductConfig'
import ModalCreation from '../../modals/Product/ProductCreate'
import ModalDelete from '../../modals/Product/ProductDelete'



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
    }, [])

    return (
        <>
            <div className="dashboardBody">
                <Panel></Panel>
                <div className="panelDashboard">
                    <div className="headerDashboard">
                        <div className="welcomeMessageDashboard">
                            <h1 style={{ "paddingRight": "1rem" }}>Welcome,</h1>
                            <h1>{"Admins"}</h1>
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
                                    <div key={"keyProductMain" + item.id_producto} className="reportInfoDashboard">
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
                                        <div>
                                            <ModalConfiguracion producto={item}></ModalConfiguracion>
                                            <ModalDelete producto={item}></ModalDelete>
                                        </div>
                                    </div>
                                ))}
                        </div>
                        <div className="crearProducto">
                            <ModalCreation></ModalCreation>
                            {/* <a className="crearProductoBoton" onClick={(event) => crearProducto()}>Crear Producto</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Dashboard
