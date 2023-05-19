import Axios from 'axios'

const CheckoutComponent = (data) => {

    console.log(data.data["usuario"])
    console.log(data.data.productos.data)

    

    return (
        <div className="panelDashboard">
            <div className="headerDashboard">
                <div className="welcomeMessageDashboard">
                    <h1 style={{ "paddingRight": "1rem" }}>Welcome,</h1>
                    <h1>{data.data["usuario"][1]}</h1>
                </div>
            </div>
            <div className="configuracionUsuario">
                {data.data.recibo.map((item, index) => (
                    <>
                        <div key={item.id_usuario + "-" + index}>
                            <h4>{item.direccion_envio}</h4>
                            <h4>{"$" + item.preciototal}</h4>
                        </div>
                        <a onClick=
                            {
                                function setState() {
                                    Axios.put("http://localhost:4000/API/pedidos/modificar/estado", { "numero_pedido": item.numero_pedido, "estado": 2 })
                                    Axios.put("http://localhost:4000/API/usuarios/modificar/pedidos", { "id_usuario": data.data["usuario"][0], "numero_pedidos": (parseInt(data.data["usuario"][2]) + 1) })
                                    for (let i = 0; i < data.data.productos.data.length; i++) {
                                        Axios.get("http://localhost:4000/API/productos/buscar?id=" + data.data.productos.data[i]["id_producto"]).then(responseFinal => {
                                            Axios.put("http://localhost:4000/API/productos/modificar/ventas", { "id_producto": data.data.productos.data[i]["id_producto"], "ventas": (parseInt(responseFinal.data[0]["ventas"]) + 1) })
                                        })
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