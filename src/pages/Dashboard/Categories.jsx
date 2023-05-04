import Axios from 'axios'
import { useState, useEffect } from 'react';
import '../../estilos/estilos.css'
import Panel from '../../components/Dashboard/Panel'
import ModalConfiguracion from '../../modals/Category/CategoryConfig'
import ModalCreation from '../../modals/Category/CategoryCreate'
import ModalDelete from '../../modals/Category/CategoryDelete'



function Dashboard() {

    const [categorias, setCategorias] = useState();

    let baseURL = "http://localhost:4000/API/categorias/consultar";

    let config = {
        timeout: 10000,
    };



    useEffect(() => {
        Axios.get(baseURL, config)
            .then((res) => {
                //console.log("RESPONSE RECEIVED: ", res.data);
                setCategorias(res.data)
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
                            <h2>Categories List</h2>
                            {
                                categorias &&
                                categorias.map((item) => (
                                    <div key={"keyProductMain" + item.id_categoria} className="reportInfoDashboard">
                                        <div className="fechaInfoDashBoard">
                                            <h3>Id: {item.id_categoria}</h3>

                                        </div>
                                        <div className="informacionInfoDashboard">
                                            <h3>{item.nombre_categoria}</h3>
                                        </div>
                                        <div>
                                            <ModalConfiguracion categoria={item}></ModalConfiguracion>
                                            <ModalDelete categoria={item}></ModalDelete>
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
