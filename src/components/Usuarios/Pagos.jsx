import Axios from 'axios'

const listaConfiguracion = [
    { titulo: "numero_tarjeta", mostrar: "Card Number", query: "tarjeta" },
    { titulo: "cvv", mostrar: "CVV", query: "cvv" },
    { titulo: "mes_caducidad", mostrar: "Expire Date", query: "caducidad" },
]

const Pagos = (data) => {

    const confirmarCambios = () => {
        listaConfiguracion.map((item) => {
            if (document.getElementById(item.titulo).value != "") {
                switch (item.mostrar) {
                    case "Card Number":
                        Axios.put("http://localhost:4000/API/usuarios/modificar/" + item.query, { "id_usuario": data["data"]["id_usuario"], "numero_tarjeta": document.getElementById(item.titulo).value })
                        break
                    case "CVV":
                        Axios.put("http://localhost:4000/API/usuarios/modificar/" + item.query, { "id_usuario": data["data"]["id_usuario"], "cvv": document.getElementById(item.titulo).value })
                        break
                    case "Expire Date":
                        Axios.put("http://localhost:4000/API/usuarios/modificar/" + item.query, { "id_usuario": data["data"]["id_usuario"], "mes_caducidad": document.getElementById(item.titulo).value })
                        break
                }
                location.reload()
            }
        })
    }

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
                        <input type="text" placeholder={data["data"][item.titulo]} id={item.titulo}></input>
                    </div>
                ))}
                <div className="confirmChangesUsuario">
                    <input type="submit" value="Confirm Changes" onClick={confirmarCambios}></input>
                </div>
            </div>
        </div>
    );
}

export default Pagos;