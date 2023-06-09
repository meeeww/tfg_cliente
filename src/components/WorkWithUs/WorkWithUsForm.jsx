import { useState } from "react";
import MainLayout from '../../layout/MainLayout';
import Breadcumb from "../../components/Breadcumb";
import llamarPopUs from "../../scripts/llamarPopUp"
import PopUp from "../../modals/PopUp/PopUp"

import { ConnectionError, ValidationError, AcceptError } from "../../errors/errors";
import { validateTrabajo } from "../../errors/validation";

const WorkWithUsForm = () => {

    const [tipoAlerta, setTipoAlerta] = useState(0)
    const [mensajeAlerta, setMensajeAlerta] = useState("")

    const enviarFormulario = () => {
        let arrayCampos = []
        arrayCampos.push(document.getElementById("campoName").value)
        arrayCampos.push(document.getElementById("campoLastName").value)
        arrayCampos.push(document.getElementById("campoSecondLastName").value)
        arrayCampos.push(document.getElementById("campoSocialSecurityCard").value)
        arrayCampos.push(document.getElementById("campoPhone").value)
        arrayCampos.push(document.getElementById("campoEmail").value)
        arrayCampos.push(document.getElementById("campoZipCode").value)
        arrayCampos.push(document.getElementById("campoCity").value)
        arrayCampos.push(document.getElementById("campoCounty").value)
        arrayCampos.push(document.getElementById("campoState").value)
        arrayCampos.push(document.getElementById("campoPuestoTrabajoWebDeveloper").checked)
        arrayCampos.push(document.getElementById("campoPuestoTrabajoCook").checked)
        arrayCampos.push(document.getElementById("campoPuestoTrabajoWaiter").checked)
        arrayCampos.push(document.getElementById("campoPuestoTrabajoAny").checked)
        arrayCampos.push(document.getElementById("campoPuestoTrabajoWebDeveloper").value)
        arrayCampos.push(document.getElementById("campoPuestoTrabajoCook").value)
        arrayCampos.push(document.getElementById("campoPuestoTrabajoWaiter").value)
        arrayCampos.push(document.getElementById("campoPuestoTrabajoAny").value)
        arrayCampos.push(document.getElementById("campoBirthdate").value)
        arrayCampos.push(document.getElementById("campoPrivacidad").checked)

        try {
            validateTrabajo(arrayCampos[0], arrayCampos[1], arrayCampos[2], arrayCampos[3], arrayCampos[4], arrayCampos[5], arrayCampos[6], arrayCampos[7], arrayCampos[8], arrayCampos[9], arrayCampos[10], arrayCampos[11], arrayCampos[12], arrayCampos[13], arrayCampos[14], arrayCampos[15], arrayCampos[16], arrayCampos[17], arrayCampos[18], arrayCampos[19])
        } catch (e) {
            if (e instanceof ConnectionError) {
                setTimeout(() => {
                    validateTrabajo(arrayCampos[0], arrayCampos[1], arrayCampos[2], arrayCampos[3], arrayCampos[4], arrayCampos[5], arrayCampos[6], arrayCampos[7], arrayCampos[8], arrayCampos[9], arrayCampos[10], arrayCampos[11], arrayCampos[12], arrayCampos[13], arrayCampos[18], arrayCampos[19])
                }, 2)
            }

            if (e instanceof ValidationError) {
                setMensajeAlerta("Fill in all the fields")
                setTipoAlerta(3)
                llamarPopUs()
            }
            
            if (e instanceof AcceptError) {
                setMensajeAlerta("Accept privacy policy")
                setTipoAlerta(3)
                llamarPopUs()
            }
        }

        // if (arrayCampos[0] != "" && arrayCampos[1] != "" && arrayCampos[2] != "" && arrayCampos[3] != "" && arrayCampos[4] != "" && arrayCampos[5] != "" && arrayCampos[6] != "" && arrayCampos[7] != "" && arrayCampos[8] != "" && arrayCampos[9] != "" && (arrayCampos[10] == true || arrayCampos[11] == true || arrayCampos[12] == true || arrayCampos[13] == true) && arrayCampos[18] != "") {
        //     //console.log(arrayCampos)
        //     if (arrayCampos[19] == true) {
        //         axios.get(getSessionesURL + localStorage.getItem("token")).then(response => {
        //             if (response.data[0]) {
        //                 axios.get(getUsuarioURL + response.data[0]["id_usuario"]).then(response2 => {
        //                     if (response2.data[0]["id_usuario"] != null) {
        //                         if (arrayCampos[10] == true) {
        //                             puestoTrabajo = arrayCampos[14]
        //                         } else if (arrayCampos[11] == true) {
        //                             puestoTrabajo = arrayCampos[15]
        //                         } else if (arrayCampos[12] == true) {
        //                             puestoTrabajo = arrayCampos[16]
        //                         } else if (arrayCampos[13] == true) {
        //                             puestoTrabajo = arrayCampos[17]
        //                         }

        //                         axios.post(postTrabajoURL, {
        //                             "id_usuario": response2.data[0]["id_usuario"],
        //                             "segundo_apellido": arrayCampos[2], "ssc": arrayCampos[3], "codigo_postal": arrayCampos[6],
        //                             "ciudad": arrayCampos[7], "condado": arrayCampos[8], "estado": arrayCampos[9], "puesto_trabajo": puestoTrabajo,
        //                             "fecha_nacimiento": arrayCampos[18]
        //                         })
        //                     }
        //                 })
        //             }
        //         })
        //     } else {
        //         // setMensajeAlerta("Accept privacy policy")
        //         // setTipoAlerta(3)
        //         // llamarPopUs()
        //     }
        // } else {
        //     // setMensajeAlerta("Fill in all the fields")
        //     // setTipoAlerta(3)
        //     // llamarPopUs()
        // }



    }

    return (
        <MainLayout>
            <PopUp tipo={{ tipoAlerta, mensajeAlerta }} />
            <Breadcumb></Breadcumb>
            <div className="WorkWithUsFormFondo">
                <div className="WorkWithUsFormContenedor">
                    <div className="WorkWithUsFormDivTexto">
                        <h1>Work <span className="WorkWithUsColor">With Us</span> </h1>
                    </div>
                    <div className="WorkWithUsFormFormContenedor">
                        <div className="WorkWithUsForm1">
                            <input type="text" id="campoName" placeholder="Name" />
                            <input type="text" id="campoLastName" placeholder="First Last Name" />
                            <input type="text" id="campoSecondLastName" placeholder="Second Last Name" />
                            <input type="text" id="campoSocialSecurityCard" placeholder="Social Security Card" />
                            <input type="text" id="campoPhone" placeholder="Phone" />
                            <input type="text" id="campoEmail" placeholder="Email" />
                            <input type="text" id="campoZipCode" placeholder="Zip Code" />
                            <input type="text" id="campoCity" placeholder="City" />
                            <input type="text" id="campoCounty" placeholder="County" />
                            <input type="text" id="campoState" placeholder="State" />
                            <p className="WorkWithUsTitulo"><span className="WorkWithUsColor">J</span>ob <span className="WorkWithUsColor">P</span>osition <span className="WorkWithUsColor">R</span>equested</p>
                            <div className="WorkWithUsFormCheckBoxContainer">
                                <div className="WorkWithUsFormCheckBox">
                                    <input type="radio" id="campoPuestoTrabajoWebDeveloper" name="Radio" value={"WebDeveloper"} />
                                    <p className="WorkWithUsTexto">Web Developer</p>
                                </div>
                                <div className="WorkWithUsFormCheckBox">
                                    <input type="radio" id="campoPuestoTrabajoCook" name="Radio" value={"Cook"} />
                                    <p className="WorkWithUsTexto">Cook</p>
                                </div>
                                <div className="WorkWithUsFormCheckBox">
                                    <input type="radio" id="campoPuestoTrabajoWaiter" name="Radio" value={"Waiter"} />
                                    <p className="WorkWithUsTexto">Waiter</p>
                                </div>
                                <div className="WorkWithUsFormCheckBox">
                                    <input type="radio" id="campoPuestoTrabajoAny" name="Radio" value={"Any"} />
                                    <p className="WorkWithUsTexto">Any</p>
                                </div>
                            </div>
                            <div className="WorkWithUsFormFecha">
                                <label className="WorkWithUsTitulo" htmlFor="birthdate"><span className="WorkWithUsColor">D</span>ate <span className="WorkWithUsColor">O</span>f <span className="WorkWithUsColor">B</span>irth</label>
                                <input type="date" id="campoBirthdate" name="birthdate" />
                            </div>
                            <div className="WorkWithUsFormCheckBoxContainer">
                                <div className="WorkWithUsFormCheckBox">
                                    <input type="checkbox" id="campoPrivacidad" />
                                    <label className="WorkWithUsTexto" htmlFor="miCheckbox">I accept the Privacy Policy</label>
                                </div>
                            </div>
                            <div className="WorkWithUsFormBoton">
                                <button onClick={enviarFormulario}>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default WorkWithUsForm;