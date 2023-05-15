import { useState, useEffect } from 'react'
import Axios from 'axios'
import '../estilos/estilos.css'
import logo from '../assets/Logo.png'
import MainLayout from '../layout/MainLayout'
import checkSession from '../scripts/sessionManager'

import llamarPopUp from '../scripts/llamarPopUp'

import PopUp from '../modals/PopUp/PopUp'

import md5 from 'md5'

const Register = () => {

    useEffect(() => {
        checkSession()
    }, [])

    const [nombreRegistro, setNombreRegistro] = useState('')
    const [apellidoRegistro, setApellidoRegistro] = useState('')
    const [correoRegistro, setCorreoRegistro] = useState('')
    const [contrasenaRegistro, setContrasenaRegistro] = useState('')

    const [tipoAlerta, setTipoAlerta] = useState(1)
    const [mensajeAlerta, setMensajeAlerta] = useState("Text")

    const registrarSesion = (event) => {
        event.preventDefault();

        var date;
        date = new Date();
        date = date.getUTCFullYear() + '-' +
            ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
            ('00' + date.getUTCDate()).slice(-2) + ' ';

        let baseURL = "http://localhost:4000/API/usuarios/crear";
        let comprobarMail = "http://localhost:4000/API/usuarios/buscar/login?correo="

        let config = {
            timeout: 10000,
            headers: { 'Content-Type': 'application/json' }
        };

        let contra = contrasenaRegistro

        const encriptarPass = () => {
            return new Promise((resolve, reject) => {
                resolve(md5(contra))
                //resolve(bcrypt.hash(contra, 10))
            })
        }

        encriptarPass()
            .then((datos) => {
                console.log(document.getElementById("emailInput").value)
                if (document.getElementById("cbox1").checked && document.getElementById("emailInput").value != "" && document.getElementById("nameInput").value != "" && document.getElementById("surnameInput").value != "" && document.getElementById("passInput").value != "") {
                    console.log(datos)
                    var data = { nombre_usuario: nombreRegistro, apellido_usuario: apellidoRegistro, correo_usuario: correoRegistro, contra_usuario: datos, numero_pedidos: 0, fecha_registro: date, direccion: "NA", apartamento: "NA", nombre_edificio: "NA", opciones_entrega: "NA", permisos: 0, telefono_usuario: 0, numero_tarjeta: "NA", cvv: "NA", mes_caducidad: "NA" };
                    console.log(data)
                    Axios.get(comprobarMail + correoRegistro).then((correoChecking) => {
                        if (correoChecking.data.length == 0) {
                            Axios.post(baseURL, data, config)
                                .then((res) => {
                                    setMensajeAlerta("Successfully registered")
                                    setTipoAlerta(1)
                                    llamarPopUp()
                                    console.log("RESPONSE RECEIVED: ", res.data);
                                    location.replace("http://localhost:5173/registered")
                                    return {
                                        statusCode: 200,
                                        body: JSON.stringify({ title: "this was a success" }),
                                    };
                                })
                        } else {
                            setMensajeAlerta("Email already in use")
                            setTipoAlerta(3)
                            llamarPopUp()
                        }
                    })
                } else if (!document.getElementById("cbox1").checked) {
                    setMensajeAlerta("You have to accept our privacy policy")
                    setTipoAlerta(2)
                    llamarPopUp()
                } else {
                    setMensajeAlerta("You have to fill the form")
                    setTipoAlerta(2)
                    llamarPopUp()
                }
            })

        // let contrasenaEcriptada = encriptarContra()

        // console.log(contrasenaEcriptada)



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
                    <form action="">
                        <div>
                            <input type="text" placeholder="Name" id="nameInput" onChange={(e) => { setNombreRegistro(e.target.value) }} />
                        </div>
                        <div>
                            <input type="text" placeholder="Last Name" id="surnameInput" onChange={(e) => { setApellidoRegistro(e.target.value) }} />
                        </div>
                        <div>
                            <input type="text" placeholder="Email" id="emailInput" onChange={(e) => { setCorreoRegistro(e.target.value) }} />
                        </div>
                        <div>
                            <input type="password" placeholder="Password" id="passInput" onChange={(e) => { setContrasenaRegistro(e.target.value) }} />
                        </div>
                        <div className="staySignedIn">
                            <label>
                                <input type="checkbox" id="cbox1" value="yes" /><p id='textPrivacy'>I accept the privacy terms.</p>
                            </label>
                        </div>
                        <div className="SingInSing">
                            <input type="submit" value="Register" onClick={registrarSesion}></input>
                        </div>
                    </form>
                </div>
            </div>
        </MainLayout>
    )

}
export default Register