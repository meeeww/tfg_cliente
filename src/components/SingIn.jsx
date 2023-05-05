import { useState, useEffect } from 'react'
import Axios from 'axios'
import '../estilos/estilos.css'
import logo from '../assets/Logo.png'
import MainLayout from '../layout/MainLayout'
import checkSession from '../scripts/sessionManager'

const FormInput = () => {

    useEffect(() => {
        //checkSession()
    })

    const [nombreInicio, setNombreInicio] = useState('')
    const [contrasenaInicio, setContrasenaInicio] = useState('')

    const iniciarSesion = (event) => {
        event.preventDefault();

        var date;
        date = new Date();
        date = date.getUTCFullYear() + '-' +
            ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
            ('00' + date.getUTCDate()).slice(-2) + ' ';

        let agente = navigator.userAgent

        let baseURL = "https://bellumserver.netlify.app/.netlify/functions/api/login";

        let config = {
            timeout: 10000,
            headers: { 'Content-Type': 'application/json' }
        };


        var data = { nombreInicio: nombreInicio, contrasenaInicio: contrasenaInicio, agente: agente, date: date };

        Axios.post(baseURL, data, config)
            .then((res) => {
                console.log("RESPONSE RECEIVED: ", res.data);
                localStorage.setItem("token", res.data)
                location.replace("http://localhost:5173/login")
                return {
                    statusCode: 200,
                    body: JSON.stringify({ title: "this was a success" }),
                };
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
                    <form action="">
                        <div>
                            <input type="text" placeholder="Email" onChange={(e) => { setNombreInicio(e.target.value) }} />
                        </div>
                        <div>
                            <input type="password" placeholder="Password" onChange={(e) => { setContrasenaInicio(e.target.value) }} />
                        </div>
                        <div className="staySignedIn">
                            <label>
                                <input type="checkbox" id="cbox1" value="first_checkbox" /><p>Stay Signed In</p>
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