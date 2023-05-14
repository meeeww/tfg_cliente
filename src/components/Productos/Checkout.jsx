import Axios from 'axios'

const CheckoutComponent = (data) => {

    console.log(data.data)

    return (
        <div className="panelDashboard">
            <div className="headerDashboard">
                <div className="welcomeMessageDashboard">
                    <h1 style={{ "paddingRight": "1rem" }}>Welcome,</h1>
                    <h1>{data.data["usuario"]}</h1>
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
                                    console.log(item.numero_pedido)
                                    Axios.put("http://localhost:4000/API/pedidos/modificar/estado", { "numero_pedido": item.numero_pedido, "estado": 2 })
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