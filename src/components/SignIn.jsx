import { useState, useEffect } from 'react'
import Axios from 'axios'
import '../estilos/estilos.css'
import logo from '../assets/Logo.png'
import MainLayout from '../layout/MainLayout'
import checkSession from '../scripts/sessionManager'

import md5 from 'md5'

const FormInput = () => {

    const rand = () => {
        return Math.random().toString(36).substr(2);
    };

    const token = () => {
        return rand() + rand() + rand() + rand() + rand() + rand() + rand() + rand() + rand() + rand() + rand();
    };

    useEffect(() => {
        checkSession()
    }, [])

    const [correoInicio, setCorreoInicio] = useState('')
    const [contraInicio, setContraInicio] = useState('')

    const iniciarSesion = (event) => {
        event.preventDefault();

        var date;
        date = new Date();
        date = date.getUTCFullYear() + '-' +
            ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
            ('00' + date.getUTCDate()).slice(-2) + ' ';

        let agente = navigator.userAgent

        let baseURL = "http://localhost:4000/API/usuarios/buscar/login?correo=" + correoInicio;


        //sesion.getId_usuario(), sesion.getToken(), sesion.getDispositivo(), sesion.getFecha()

        let config = {
            timeout: 10000,
            headers: { 'Content-Type': 'application/json' }
        };

        let contra = contraInicio

        const encriptarPass = () => {
            return new Promise((resolve, reject) => {
                resolve(md5(contra))
            })
        }

        encriptarPass()
            .then((datos) => {
                Axios.get((baseURL), config)
                    .then((res) => {
                        console.log("RESPONSE 3 RECEIVED: ", res.data[0]);
                        let tokenTemporal = token()
                        let idUsuarioTemporal = res.data[0]["id_usuario"]
                        if (res.data[0] != undefined) {
                            if (res.data[0]["contra_usuario"] == datos) {
                                console.log("bien")
                                localStorage.setItem("token", tokenTemporal)
                                var data = { id_usuario: idUsuarioTemporal, token: tokenTemporal, dispositivo: agente, fecha: date };
                                console.log(data)
                                let baseURL2 = "http://localhost:4000/API/sesiones/crear";
                                Axios.post(baseURL2, data, config)
                                    .then((res) => {
                                        console.log("RESPONSE RECEIVED: ", res.data);
                                        location.replace("http://localhost:5173")
                                        return {
                                            statusCode: 200,
                                            body: JSON.stringify({ title: "this was a success" }),
                                        };
                                    })


                                //location.replace("http://localhost:5173")
                            }
                        } else {
                            //location.replace("http://localhost:5173/login")
                        }
                    })
            })
    }


    return (
        <MainLayout>
            <div className="SingInContainer">
                <div className="SingInCabecera">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="SingInMedio">
                    <a href="/signin">Sign In</a>
                    <a href="/signup">Sign Up</a>
                </div>
                <div className="SingInForm">
                    <form>
                        <div>
                            <input type="text" placeholder="Email" onChange={(e) => { setCorreoInicio(e.target.value) }} />
                        </div>
                        <div>
                            <input type="password" placeholder="Password" onChange={(e) => { setContraInicio(e.target.value) }} />
                        </div>
                        <div className="staySignedIn">
                            <label>
                                <input type="checkbox" value="first_checkbox" /><p>Stay Signed In</p>
                            </label>
                        </div>
                        <div className="SingInSing">
                            <input type="submit" value="Login" onClick={iniciarSesion}></input>
                        </div>
                        <div className="forgotPassword">
                            <p>Forgot your password</p>
                        </div>
                    </form>
                </div>
            </div>
        </MainLayout>
    )
}

export default FormInput;