import { useState } from "react";
import Axios from "axios";


const BotonCompra = (data) => {
    function handleSubmit(e) {
        e.preventDefault();

        var date;
        date = new Date();
        date = date.getUTCFullYear() + '-' +
            ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
            ('00' + date.getUTCDate()).slice(-2) + ' ';

        let baseURL = "http://localhost:4000/API/sesiones/buscar?token=";
        let baseURL2 = "http://localhost:4000/API/usuarios/buscar?id=";

        let postPedidosURL = "http://localhost:4000/API/pedidos/crear";
        let getPedidoURL = "http://localhost:4000/API/pedidos/buscar/usuario?id="

        let postInfoPedidoURL = "http://localhost:4000/API/infopedidos/crear"

        Axios.get((baseURL + localStorage.getItem("token")))
            .then((res) => {
                if (res.data[0]) {
                    let idUsuario = res.data[0]["id_usuario"]
                    let idProducto = data.producto.data.data.producto["id_producto"]
                    Axios.get((baseURL2 + idUsuario))
                        .then((res) => {
                            if (res.data[0] != undefined) {
                                Axios.get((getPedidoURL + idUsuario)).then((resPedido) => {
                                    console.log(resPedido.data[0])
                                    console.log(resPedido.data[0]["estado"])
                                    if (resPedido.data[0] != undefined && resPedido.data[0]["estado"] == 0) {
                                        console.log("ya hay wow")
                                        Axios.post(postInfoPedidoURL, { "numero_pedido": resPedido.data[0]["numero_pedido"], "id_producto": idProducto, "fecha": date, "cantidad": data.producto.numero })
                                    } else {
                                        console.log("ya hay2")
                                        Axios.post(postPedidosURL, { "id_usuario": res.data[0]["id_usuario"], "direccion_envio": "NA", "estado": 0, "preciototal": 0 }).then(() => {
                                            Axios.get((getPedidoURL + idUsuario)).then((resPedido2) => {
                                                Axios.post(postInfoPedidoURL, { "numero_pedido": resPedido2.data[0]["numero_pedido"], "id_producto": idProducto, "fecha": date, "cantidad": data.producto.numero })
                                            })
                                        })


                                    }
                                })
                            }
                        })
                }
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">{"Add to Cart"}</button>
        </form>
    )
}

export default BotonCompra;