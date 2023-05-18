import { useEffect } from "react";
import { useState } from "react";
import Axios from 'axios'

import MainLayout from "../../layout/MainLayout";
import Panel from '../../components/Usuarios/Panel';

function ReciboIndividual() {

    const [infoProducto, setInfoProducto] = useState([])
    const [isLoading, setLoading] = useState(true);

    const queryParameters = new URLSearchParams(window.location.search)
    const idParam = queryParameters.get("id")

    useEffect(() => {
        if (localStorage.getItem("token") != null || localStorage.getItem("token") == "") {
            Axios.get("http://localhost:4000/API/sesiones/buscar?token=" + localStorage.getItem("token")).then(response => {
                if (response.data[0]) {
                    let usuario
                    let infoProductos = []
                    Axios.get("http://localhost:4000/API/usuarios/buscar?id=" + response.data[0]["id_usuario"]).then(response2 => {
                        usuario = response2.data[0]["id_usuario"]
                        Axios.get("http://localhost:4000/API/infopedidos/buscar/pedido?id=" + idParam).then(respuestaInfoPedidos => {
                            infoProductos.push(respuestaInfoPedidos.data)
                            setInfoProducto(infoProductos)
                            //
                            Axios.get("http://localhost:4000/API/pedidos/buscar/pedido?id=" + idParam).then(respuestaInfoPedidos => {
                                if (usuario == respuestaInfoPedidos.data[0]["id_usuario"]) {
                                    setLoading(false)
                                }
                            })
                        })
                    })
                }
            })
        }
    }, [])

    if (isLoading) {
        return (
            <MainLayout>
                <div className="mainBodyUsuario">
                    <Panel />
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <div className="mainBodyUsuario">
                <Panel />
                <div className="panelDashboard">
                    {console.log(infoProducto[0])}
                    {infoProducto[0].map((infoProductoIndividual) => (
                        <div key={infoProductoIndividual["id_info"]} className="orderProductoIndividualUsuario">
                            <div className="productoorderProductoIndividualUsuario">
                                <a href={"http://localhost:5173/product?id=" + infoProductoIndividual["id_producto"]}>ID Product: {infoProductoIndividual["id_producto"]}</a>
                            </div>
                            <div className="fechaorderProductoIndividualUsuario">
                                <p>Date: {infoProductoIndividual["fecha"]}</p>
                            </div>
                            <div className="cantidadorderProductoIndividualUsuario">
                                <p>Quantity: {infoProductoIndividual["cantidad"]}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </MainLayout>
    )
}

export default ReciboIndividual
