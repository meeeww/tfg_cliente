import Axios from 'axios'

const listaConfiguracion = [
    { titulo: "direccion", mostrar: "Address", query: "direccion" },
    { titulo: "apartamento", mostrar: "Apartment", query: "apartamento" },
    { titulo: "nombre_edificio", mostrar: "Building Name", query: "edificio" },
    { titulo: "opciones_entrega", mostrar: "Shipping Options", query: "opciones" },
]

const Direccion = (data) => {

    const confirmarCambios = () => {
        listaConfiguracion.map((item) => {
            if (document.getElementById(item.titulo).value != "") {
                switch (item.mostrar) {
                    case "Address":
                        Axios.put("http://localhost:4000/API/usuarios/modificar/" + item.query, { "id_usuario": data["data"]["id_usuario"], "direccion": document.getElementById(item.titulo).value })
                        break
                    case "Apartment":
                        Axios.put("http://localhost:4000/API/usuarios/modificar/" + item.query, { "id_usuario": data["data"]["id_usuario"], "apartamento": document.getElementById(item.titulo).value })
                        break
                    case "Building Name":
                        Axios.put("http://localhost:4000/API/usuarios/modificar/" + item.query, { "id_usuario": data["data"]["id_usuario"], "nombre_edificio": document.getElementById(item.titulo).value })
                        break
                    case "Shipping Options":
                        Axios.put("http://localhost:4000/API/usuarios/modificar/" + item.query, { "id_usuario": data["data"]["id_usuario"], "opciones_entrega": document.getElementById(item.titulo).value })
                        break
                }
                console.log("http://localhost:4000/API/usuarios/modificar/" + item.query)
                console.log(document.getElementById(item.titulo).value)
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

export default Direccion;