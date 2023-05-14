import { useEffect } from 'react'
import Axios from 'axios'
import '../estilos/estilos.css'
import MainLayout from '../layout/MainLayout'

const FormInput = () => {

    useEffect(() => {
        if (localStorage.getItem("token") != null || localStorage.getItem("token") == "") {
            Axios.get("http://localhost:4000/API/sesiones/buscar?token=" + localStorage.getItem("token")).then(response => {
                if (response.data[0]) {
                    localStorage.removeItem("token")
                    location.replace("http://localhost:5173/signin")
                }
            })
        } else {
            location.replace("http://localhost:5173/signin")
        }
    }, [])

    return (
        <MainLayout>
            <div className="mainBread">
                <div className="titularBread">
                    <div className="tituloBread">
                        <h1>Logging Out...</h1>
                    </div>
                    <div className="subtituloBread">
                        <h2>You will be redirected soon...</h2>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default FormInput;