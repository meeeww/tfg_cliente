import Axios from 'axios'
import { useState } from 'react'
import llamarPopUp from '../../scripts/llamarPopUp'
import PopUp from '../../modals/PopUp/PopUp'

const CheckoutComponent = (data) => {

    const [tipoAlerta, setTipoAlerta] = useState(1)
    const [mensajeAlerta, setMensajeAlerta] = useState("Text")



    return (
        <div className="panelDashboard">
            <PopUp tipo={{ tipoAlerta, mensajeAlerta }} />
            <div className="headerDashboard">
                <div className="welcomeMessageDashboard">
                    <h1 style={{ "paddingRight": "1rem" }}>Welcome,</h1>
                    <h1>{data.data["usuario"][1]}</h1>
                </div>
            </div>
            <div className="configuracionUsuario">
                {data.data.recibo.map((item, index) => (
                    <>
                        <div key={item.id_usuario + "-" + index} className="mainOrdersUserDashboard">
                            {/* <h4>{item.direccion_envio}</h4>
                   <h4>{"$" + item.preciototal}</h4> */}
                            <div>
                                <h4>Order ID: {item.numero_pedido}</h4>
                                <p>Total Price: {"$" + parseFloat(item.preciototal).toFixed(2)}</p>
                            </div>
                            <div>
                                <p>Adress: {item.direccion_envio}</p>
                            </div>
                            <div>
                                <a href={"http://localhost:5173/user/orders/orderid?id=" + item.numero_pedido}>List of Products</a>
                            </div>
                        </div>
                        <a className="checkoutBoton" onClick=
                            {
                                function setState() {
                                    if (item.direccion_envio == "NA" || item.direccion_envio == "na") {
                                        setMensajeAlerta("You have to set up your adress")
                                        setTipoAlerta(3)
                                        llamarPopUp()
                                    } else {
                                        Axios.put("http://localhost:4000/API/pedidos/modificar/estado", { "numero_pedido": item.numero_pedido, "estado": 2 })
                                        Axios.put("http://localhost:4000/API/usuarios/modificar/pedidos", { "id_usuario": data.data["usuario"][0], "numero_pedidos": (parseInt(data.data["usuario"][2]) + 1) })
                                        for (let i = 0; i < data.data.productos.data.length; i++) {
                                            Axios.get("http://localhost:4000/API/productos/buscar?id=" + data.data.productos.data[i]["id_producto"]).then(responseFinal => {
                                                Axios.put("http://localhost:4000/API/productos/modificar/ventas", { "id_producto": data.data.productos.data[i]["id_producto"], "ventas": (parseInt(responseFinal.data[0]["ventas"]) + 1) })
                                                setMensajeAlerta("Checkout successful")
                                                setTipoAlerta(1)
                                                llamarPopUp()
                                                setTimeout(() => {
                                                    location.replace("/user/orders")
                                                }, 2);
                                            })
                                        }
                                    }
                                }
                            }>Proceed to Checkout
                        </a>
                    </>
                ))}
            </div>
        </div>
    );
}

export default CheckoutComponent;