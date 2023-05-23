import { useState, useEffect } from 'react'
import Axios from 'axios'
import '../estilos/estilos.css'
import logo from '../assets/Logo.png'
import MainLayout from '../layout/MainLayout'
import checkSession from '../scripts/sessionManager'

import md5 from 'md5'

import llamarPopUp from '../scripts/llamarPopUp'

import PopUp from '../modals/PopUp/PopUp'

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

    const [tipoAlerta, setTipoAlerta] = useState(1)
    const [mensajeAlerta, setMensajeAlerta] = useState("Text")

    const iniciarSesion = (event) => {
        event.preventDefault();

        var date;
        date = new Date();
        date = date.getUTCFullYear() + '-' +
            ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
            ('00' + date.getUTCDate()).slice(-2) + ' ';

        let agente = navigator.userAgent

        let baseURL = "http://localhost:4000/API/usuarios/buscar/login?correo=" + correoInicio;

        let config = {
            timeout: 10000,
            headers: { 'Content-Type': 'application/json' }
        };

        let contra = contraInicio

        const encriptarPass = () => {
            return new Promise((resolve, reject) => {
                console.log(reject)
                resolve(md5(contra))
            })
        }

        encriptarPass()
            .then((datos) => {
                if (document.getElementById("emailInput").value != "" && document.getElementById("passInput").value != "") {
                    Axios.get((baseURL), config)
                        .then((res) => {
                            console.log("RESPONSE 3 RECEIVED: ", res.data[0]);
                            let tokenTemporal = token()
                            if (res.data[0] != undefined) {
                                let idUsuarioTemporal = res.data[0]["id_usuario"]
                                if (res.data[0]["contra_usuario"] == datos) {
                                    localStorage.setItem("token", tokenTemporal)
                                    var data = { id_usuario: idUsuarioTemporal, token: tokenTemporal, dispositivo: agente, fecha: date };
                                    Axios.post("http://localhost:4000/API/sesiones/crear", data, config)
                                        .then((res) => {
                                            setMensajeAlerta("Successfully logged in")
                                            setTipoAlerta(1)
                                            llamarPopUp()
                                            location.replace("http://localhost:5173")
                                        })
                                } else {
                                    setMensajeAlerta("Incorrect password")
                                    setTipoAlerta(3)
                                    llamarPopUp()
                                }
                            } else {
                                setMensajeAlerta("User is not registered")
                                setTipoAlerta(3)
                                llamarPopUp()
                            }
                        })
                } else {
                    setMensajeAlerta("You have to fill the form")
                    setTipoAlerta(2)
                    llamarPopUp()
                }
            })

    }


    return (
        <MainLayout>
            <PopUp tipo={{ tipoAlerta, mensajeAlerta }} />
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
                            <input type="text" placeholder="Email" id="emailInput" onChange={(e) => { setCorreoInicio(e.target.value) }} />
                        </div>
                        <div>
                            <input type="password" placeholder="Password" id="passInput" onChange={(e) => { setContraInicio(e.target.value) }} />
                        </div>
                        <div className="SingInSing">
                            <input type="submit" value="Login" onClick={iniciarSesion}></input>
                        </div>
                    </form>
                </div>
            </div>
        </MainLayout>
    )
}

export default FormInput;