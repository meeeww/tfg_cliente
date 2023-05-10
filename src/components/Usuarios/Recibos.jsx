const listaConfiguracion = [
    { titulo: "numero_tarjeta", mostrar: "Card Number" },
    { titulo: "cvv", mostrar: "CVV" },
    { titulo: "mes_caducidad", mostrar: "Expire Date" },
]

const Recibos = ( data ) => {
    return (
        <div className="panelDashboard">
            <div className="headerDashboard">
                <div className="welcomeMessageDashboard">
                    <h1 style={{ "paddingRight": "1rem" }}>Welcome,</h1>
                    <h1>{data["data"]["nombre_usuario"]}</h1>
                </div>
            </div>
            <div className="configuracionUsuario">
                {listaConfiguracion.map((item) => (
                    <div key={item.titulo}>
                        <h4>{item.mostrar}</h4>
                        <input type="text" placeholder={data["data"][item.titulo]}></input>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Recibos;