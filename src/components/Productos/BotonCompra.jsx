import { useState } from 'react'

import Axios from "axios";

import llamarPopUp from '../../scripts/llamarPopUp'
import PopUp from '../../modals/PopUp/PopUp'

const BotonCompra = (data) => {

    const [tipoAlerta, setTipoAlerta] = useState(1)
    const [mensajeAlerta, setMensajeAlerta] = useState("Text")

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
        let modificarPedidoURL = "http://localhost:4000/API/pedidos/modificar/precio"

        let postInfoPedidoURL = "http://localhost:4000/API/infopedidos/crear"
        let deleteInfoPedidoURL = "http://localhost:4000/API/infopedidos/eliminar/numero"

        Axios.get((baseURL + localStorage.getItem("token")))
            .then((res) => {
                if (res.data[0]) {
                    let idUsuario = res.data[0]["id_usuario"]
                    let idProducto = data.producto.data.data.producto["id_producto"]
                    let precioProducto = data.producto.data.data.producto["coste_base"]
                    Axios.get((baseURL2 + idUsuario))
                        .then((res) => {
                            if (res.data[0] != undefined) {
                                Axios.get((getPedidoURL + idUsuario)).then((resPedido) => {
                                    console.log(resPedido.data)
                                    let contador = 0
                                    resPedido.data.map((item) => {
                                        if (item["estado"] == 0) {
                                            console.log("ya existe")
                                            Axios.post(postInfoPedidoURL, { "numero_pedido": item["numero_pedido"], "id_producto": idProducto, "fecha": date, "cantidad": data.producto.numero }).then(() => {
                                                let precioUltimo = item["preciototal"] + (precioProducto * data.producto.numero)
                                                console.log(precioUltimo)
                                                Axios.put(modificarPedidoURL, { "numero_pedido": item["numero_pedido"], "preciototal": precioUltimo })
                                                console.log(typeof precioUltimo)
                                            })
                                            contador++
                                            setMensajeAlerta("Successfully addded to cart")
                                            setTipoAlerta(1)
                                            llamarPopUp()
                                            if (contador >= 2) {
                                                console.log("eliminando")
                                                console.log({ numero_pedido: item["numero_pedido"] })
                                                Axios.delete(deleteInfoPedidoURL, { data: { numero_pedido: item["numero_pedido"] } }).then(() => {
                                                    Axios.delete(deletePedidoURL, { data: { numero_pedido: item["numero_pedido"] } })
                                                })
                                            }
                                            //location.replace("http://localhost:5173/cart")
                                        }
                                    })
                                    if (contador == 0) {
                                        console.log("creando")
                                        console.log(typeof precioProducto)
                                        Axios.post(postPedidosURL, { "id_usuario": res.data[0]["id_usuario"], "direccion_envio": res.data[0]["direccion"], "estado": 0, "preciototal": (precioProducto * data.producto.numero) }).then(() => {
                                            Axios.get((getPedidoURL + idUsuario)).then((resPedido2) => {
                                                console.log(resPedido2)
                                                resPedido2.data.map((item) => {
                                                    if (item["estado"] == 0) {
                                                        setMensajeAlerta("Successfully addded to cart")
                                                        setTipoAlerta(1)
                                                        llamarPopUp()
                                                        console.log({ "numero_pedido": item["numero_pedido"], "id_producto": idProducto, "fecha": date, "cantidad": data.producto.numero })
                                                        Axios.post(postInfoPedidoURL, { "numero_pedido": item["numero_pedido"], "id_producto": idProducto, "fecha": date, "cantidad": data.producto.numero })
                                                        location.replace("http://localhost:5173/cart")
                                                    }
                                                })
                                            })
                                        })
                                    }
                                })
                            }
                        })
                } else {
                    setMensajeAlerta("You have to log in")
                    setTipoAlerta(3)
                    llamarPopUp()
                }
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <PopUp tipo={{ tipoAlerta, mensajeAlerta }} />
            <button className="BotonCompraBoton" type="submit">{"Add to Cart"}</button>
        </form>
    )
}

export default BotonCompra;