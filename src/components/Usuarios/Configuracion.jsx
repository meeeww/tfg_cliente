import Axios from 'axios'

import md5 from 'md5'

var listaConfiguracion = [
    { titulo: "nombre_usuario", mostrar: "Name", query: "nombre", type: "text" },
    { titulo: "apellido_usuario", mostrar: "Last Name", query: "apellido", type: "text" },
    { titulo: "correo_usuario", mostrar: "Email", query: "correo", type: "text" },
    { titulo: "telefono_usuario", mostrar: "Phone", query: "telefono", type: "text" },
    { titulo: "contra_usuario", mostrar: "Password", query: "contra", type: "password" },
]

const Configuracion = (data) => {
    const encriptarPass = (contra) => {
        return new Promise((resolve, reject) => {
            resolve(md5(contra))
            console.log(reject)
            //resolve(bcrypt.hash(contra, 10))
        })
    }

    function mostrarPlaceholder(texto, titulo) { //data["data"][item.titulo]
        if (titulo == "contra_usuario") {
            return "..........."
        } else {
            return texto;
        }

    }

    const confirmarCambios = () => {
        listaConfiguracion.map((item) => {
            if (document.getElementById(item.titulo).value != "") {
                switch (item.mostrar) {
                    case "Name":
                        Axios.put("http://localhost:4000/API/usuarios/modificar/" + item.query, { "id_usuario": data["data"]["id_usuario"], "nombre_usuario": document.getElementById(item.titulo).value })
                        break
                    case "Last Name":
                        Axios.put("http://localhost:4000/API/usuarios/modificar/" + item.query, { "id_usuario": data["data"]["id_usuario"], "apellido_usuario": document.getElementById(item.titulo).value })
                        break
                    case "Email":
                        Axios.put("http://localhost:4000/API/usuarios/modificar/" + item.query, { "id_usuario": data["data"]["id_usuario"], "correo_usuario": document.getElementById(item.titulo).value })
                        break
                    case "Phone":
                        Axios.put("http://localhost:4000/API/usuarios/modificar/" + item.query, { "id_usuario": data["data"]["id_usuario"], "telefono_usuario": parseInt(document.getElementById(item.titulo).value) })
                        break
                    case "Password":
                        encriptarPass(document.getElementById(item.titulo).value).then((datosContra) => {
                            Axios.put("http://localhost:4000/API/usuarios/modificar/" + item.query, { "id_usuario": data["data"]["id_usuario"], "contra_usuario": datosContra })
                        })

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
                    <div key={item.titulo} className="campoInfoUsuario">
                        <h4>{item.mostrar}</h4>
                        <input type={item.type} placeholder={mostrarPlaceholder(data["data"][item.titulo], item.titulo)} id={item.titulo}></input>
                    </div>
                ))}
                <div className="confirmChangesUsuario">
                    <input type="submit" value="Confirm Changes" onClick={confirmarCambios}></input>
                </div>
            </div>

        </div>
    );
}

export default Configuracion;