import Axios from 'axios'

function checkSession() {
    if (localStorage.getItem("token") != null || localStorage.getItem("token") == "") {
        let baseURL = "https://bellumserver.netlify.app/.netlify/functions/api/checksession";
        let baseURL2 = "https://bellumserver.netlify.app/.netlify/functions/api/persona/";

        let config = {
            timeout: 10000,
            headers: { 'Content-Type': 'application/json' }
        };


        var data = { token: localStorage.getItem("token") };

        Axios.post(baseURL, data, config)
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