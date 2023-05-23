const Recibos = (data) => {
    return (
        <div className="panelDashboard">
            <div className="headerDashboard">
                <div className="welcomeMessageDashboard">
                    <h1 style={{ "paddingRight": "1rem" }}>Welcome,</h1>
                    <h1>{data["data"]["usuario"]}</h1>
                </div>
            </div>
            <div className="configuracionUsuario">
                {data.data.recibo.map((item, index) => (
                    <div key={item.id_usuario + "-" + index} className="mainOrdersUserDashboard">
                        {/* <h4>{item.direccion_envio}</h4>
                        <h4>{"$" + item.preciototal}</h4> */}
                        <div>
                            <h4>Order ID: {item.numero_pedido}</h4>
                            <p>Total Price: {"$" + item.preciototal}</p>
                        </div>
                        <div>
                            <p>Adress: {item.direccion_envio}</p>
                        </div>
                        <div>
                            <a href={"http://localhost:5173/user/orders/orderid?id=" + item.numero_pedido}>List of Products</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Recibos;