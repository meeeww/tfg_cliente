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
        let deletePedidoURL = "http://localhost:4000/API/pedidos/eliminar"

        let postInfoPedidoURL = "http://localhost:4000/API/infopedidos/crear"
        let deleteInfoPedidoURL = "http://localhost:4000/API/infopedidos/eliminar/numero"

        Axios.get((baseURL + localStorage.getItem("token")))
            .then((res) => {
                if (res.data[0]) {
                    let idUsuario = res.data[0]["id_usuario"]
                    let idProducto = data.producto.data.data.producto["id_producto"]
                    Axios.get((baseURL2 + idUsuario))
                        .then((res) => {
                            if (res.data[0] != undefined) {
                                Axios.get((getPedidoURL + idUsuario)).then((resPedido) => {
                                    console.log(resPedido.data)
                                    let contador = 0
                                    resPedido.data.map((item) => {
                                        if (item["estado"] == 0) {
                                            console.log("ya existe")
                                            Axios.post(postInfoPedidoURL, { "numero_pedido": item["numero_pedido"], "id_producto": idProducto, "fecha": date, "cantidad": data.producto.numero })
                                            contador++
                                            if (contador >= 2) {
                                                console.log("eliminando")
                                                console.log({ numero_pedido: item["numero_pedido"] })
                                                Axios.delete(deleteInfoPedidoURL, { data: { numero_pedido: item["numero_pedido"] } }).then(() => {
                                                    Axios.delete(deletePedidoURL, { data: { numero_pedido: item["numero_pedido"] } })
                                                })
                                            }
                                        }
                                    })
                                    if (contador == 0) {
                                        console.log("creando")
                                        Axios.post(postPedidosURL, { "id_usuario": res.data[0]["id_usuario"], "direccion_envio": "NA", "estado": 0, "preciototal": 0 }).then(() => {
                                            Axios.get((getPedidoURL + idUsuario)).then((resPedido2) => {
                                                console.log(resPedido2)
                                                resPedido2.data.map((item) => {
                                                    if (item["estado"] == 0) {
                                                        console.log({ "numero_pedido": item["numero_pedido"], "id_producto": idProducto, "fecha": date, "cantidad": data.producto.numero })
                                                        Axios.post(postInfoPedidoURL, { "numero_pedido": item["numero_pedido"], "id_producto": idProducto, "fecha": date, "cantidad": data.producto.numero })
                                                    }
                                                })
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