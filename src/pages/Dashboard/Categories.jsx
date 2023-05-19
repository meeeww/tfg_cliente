import Axios from 'axios'
import { useState, useEffect } from 'react';
import '../../estilos/estilos.css'
import Panel from '../../components/Dashboard/Panel'
import ModalConfiguracion from '../../modals/Category/CategoryConfig'
import ModalCreation from '../../modals/Category/CategoryCreate'
import ModalDelete from '../../modals/Category/CategoryDelete'



function Categorias() {

    const [categorias, setCategorias] = useState();

    let baseURL = "http://localhost:4000/API/categorias/consultar";

    let config = {
        timeout: 10000,
    };

    const [usuario, setUsuario] = useState([])
    const [isLoading, setLoading] = useState(true);

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
                        <div className="sessionDashboard">
                            <a href="/">Main Menu</a>
                            <a href="../signout">Logout</a>
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


export default Categorias
