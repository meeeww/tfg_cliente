const Recibos = ( data ) => {

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
                    <div key={item.id_usuario + "-" + index}>
                        <h4>{item.direccion_envio}</h4>
                        <h4>{"$" + item.preciototal}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Recibos;