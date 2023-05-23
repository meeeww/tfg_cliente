import axios from "axios";
import { ValidationError, ConnectionError, AcceptError } from "./errors";

export const validateTrabajo = (name, fln, sln, ssc, phone, email, zip, city, country, state, webdevCheck, cookCheck, waiterCheck, anyCheck, webdev, cook, waiter, any, dob, accept) => {

    // console.log(name, fln, sln, ssc, phone, email, zip, city, country, state, webdev, cook, waiter, any, dob, accept)
    //console.log(webdev, cook, waiter, any)

    if (!name) throw new ValidationError("Name is required")
    if (!fln) throw new ValidationError("First Last Name is required")
    if (!sln) throw new ValidationError("Second Last Name is required")
    if (!ssc) throw new ValidationError("Social Security Card is required")
    if (!phone) throw new ValidationError("Phone is required")
    if (!email) throw new ValidationError("Email is required")
    if (!zip) throw new ValidationError("Zip code is required")
    if (!city) throw new ValidationError("City is required")
    if (!country) throw new ValidationError("Country is required")
    if (!state) throw new ValidationError("State is required")
    if (!webdevCheck && !cookCheck && !waiterCheck && !anyCheck) throw new ValidationError("Position is required")
    if (!dob) throw new ValidationError("Date of birth is required")
    if (!accept) throw new AcceptError("Policy terms needs to be accepted")

    let postTrabajoURL = "http://localhost:4000/API/trabajos/crear";
    let getSessionesURL = "http://localhost:4000/API/sesiones/buscar?token="
    let getUsuarioURL = "http://localhost:4000/API/usuarios/buscar?id="

    let puestoTrabajo

    try {
        axios.get(getSessionesURL + localStorage.getItem("token")).then(response => {
            if (response.data[0]) {
                axios.get(getUsuarioURL + response.data[0]["id_usuario"]).then(response2 => {
                    if (response2.data[0]["id_usuario"] != null) {
                        if (webdevCheck == true) {
                            puestoTrabajo = webdev
                        } else if (cookCheck == true) {
                            puestoTrabajo = cook
                        } else if (waiterCheck == true) {
                            puestoTrabajo = waiter
                        } else if (anyCheck == true) {
                            puestoTrabajo = any
                        }

                        axios.post(postTrabajoURL, {
                            "id_usuario": response2.data[0]["id_usuario"],
                            "segundo_apellido": sln, "ssc": ssc, "codigo_postal": zip,
                            "ciudad": city, "condado": country, "estado": state, "puesto_trabajo": puestoTrabajo,
                            "fecha_nacimiento": dob
                        })
                    }
                })
            }
        })
    } catch (e) {
        throw new ConnectionError("Error en base de datos")
    }
}