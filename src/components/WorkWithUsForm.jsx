import React from "react";
import MainLayout from '../layout/MainLayout';
import Imagen from "./WorkWithUsImagen";
import { useEffect, useState } from "react";
import axios from "axios";


const WorkWithUsForm = () => {

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
        arrayCampos.push(document.getElementById("campoBirthdate").value)
        arrayCampos.push(document.getElementById("campoPrivacidad").checked)
        console.log(arrayCampos)

        let baseURL = "http://localhost:4000/API/trabajos/buscar?id=";
        let postTrabajoURL = "http://localhost:4000/API/trabajos/crear";
        let postUsuarioURL = "http://localhost:4000/API//usuarios/buscar?id="; 
        let getTrabajoURL = "http://localhost:4000/API/trabajos/buscar/usuario?id="
        let deleteTrabajoURL = "http://localhost:4000/API/trabajos/eliminar"

        axios.post(postTrabajoURL, { "segundoApellido": arrayCampos[2], "ssc": arrayCampos[3], "ciudad": arrayCampos[7], 
        "condado": arrayCampos[8], "estado": arrayCampos[9], "fechaNacimiento": arrayCampos[14]})
        
        if (arrayCampos[10] == true){
            axios.post(postTrabajoURL, { "TrabajoWebDeveloper": arrayCampos[10]})
        }else if (arrayCampos[11] == true){
            axios.post(postTrabajoURL, { "TrabajoCook": arrayCampos[11]})
        }else if (arrayCampos[12] == true){
            axios.post(postTrabajoURL, { "TrabajoWaiter": arrayCampos[12]})
        }else if (arrayCampos[13] == true){
            axios.post(postTrabajoURL, { "TrabajoAny": arrayCampos[13]})
        }

        axios.post(postUsuarioURL, { "segundoApellido": arrayCampos[2], "ssc": arrayCampos[3], "ciudad": arrayCampos[7], 
        "condado": arrayCampos[8], "estado": arrayCampos[9], "fechaNacimiento": arrayCampos[14]})

    }


    return (
        <MainLayout>
            <Imagen></Imagen>
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
                                <label className="WorkWithUsTitulo" for="birthdate"><span className="WorkWithUsColor">D</span>ate <span className="WorkWithUsColor">O</span>f <span className="WorkWithUsColor">B</span>irth</label>
                                <input type="date" id="campoBirthdate" name="birthdate" />
                            </div>
                            <div className="WorkWithUsFormCheckBoxContainer">
                                <div className="WorkWithUsFormCheckBox">
                                    <input type="checkbox" id="campoPrivacidad" />
                                    <label className="WorkWithUsTexto" for="miCheckbox">I accept the Privacy Policy</label>
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