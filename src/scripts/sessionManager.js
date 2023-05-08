import Axios from 'axios'

function checkSession() {
    if (localStorage.getItem("token") != null || localStorage.getItem("token") == "") {
        console.log("aaaaa")
        let baseURL = "http://localhost:4000/API/sesiones/buscar?token=";
        let baseURL2 = "http://localhost:4000/API/usuarios/buscar?id=";

        let config = {
            timeout: 10000,
            headers: { 'Content-Type': 'application/json' }
        };

        Axios.get((baseURL + localStorage.getItem("token")), config)
            .then((res) => {
                console.log("RESPONSE RECEIVED: ", res.data[0]);
                if (res.data[0]) {
                    console.log("existe el token")
                    let idUsuario = res.data[0]["id_usuario"]
                    Axios.get((baseURL2 + idUsuario), config)
                        .then((res) => {
                            console.log("RESPONSE 2 RECEIVED: ", res.data[0]);
                            if(res.data[0] != undefined){
                                location.replace("http://localhost:5173")
                            } else {
                                location.replace("http://localhost:5173/login")
                            }
                        })

                } else {
                    console.log()
                    //localStorage.setItem("token", "")
                }
                return {
                    statusCode: 200,
                    body: JSON.stringify({ title: "this was a success" }),
                };
            })
    }
}

export default checkSession