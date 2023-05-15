import React from "react";
import MainLayout from '../layout/MainLayout';
import Imagen from "./WorkWithUsImagen";
const WorkWithUsForm = () => {
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
                            <input type="text" placeholder="Name" />
                            <input type="text" placeholder="First Last Name" />
                            <input type="text" placeholder="Second Last Name" />
                            <input type="text" placeholder="Social Security Card" />
                            <input type="text" placeholder="Phone" />
                            <input type="text" placeholder="Email" />
                            <input type="text" placeholder="Zip Code" />
                            <input type="text" placeholder="City" />
                            <input type="text" placeholder="County" />
                            <input type="text" placeholder="State" />
                            <p className="WorkWithUsTitulo"><span className="WorkWithUsColor">J</span>ob <span className="WorkWithUsColor">P</span>osition <span className="WorkWithUsColor">R</span>equested</p>
                            <div className="WorkWithUsFormCheckBoxContainer">
                                <div className="WorkWithUsFormCheckBox">
                                    <input type="radio" name="radio" />
                                    <p className="WorkWithUsTexto">Web Developer</p>
                                </div>
                                <div className="WorkWithUsFormCheckBox">
                                    <input type="radio" name="radio" />
                                    <p className="WorkWithUsTexto">Cook</p>
                                </div>
                                <div className="WorkWithUsFormCheckBox">
                                    <input type="radio" name="radio" />
                                    <p className="WorkWithUsTexto">Waiter</p>
                                </div>
                                <div className="WorkWithUsFormCheckBox">
                                    <input type="radio" name="radio" />
                                    <p className="WorkWithUsTexto">Any</p>
                                </div>
                            </div>
                            <div className="WorkWithUsFormFecha">
                                <label className="WorkWithUsTitulo" for="birthdate"><span className="WorkWithUsColor">D</span>ate <span className="WorkWithUsColor">O</span>f <span className="WorkWithUsColor">B</span>irth</label>
                                <input type="date" id="birthdate" name="birthdate" />
                            </div>
                            <div className="WorkWithUsFormCheckBoxContainer">
                                <div className="WorkWithUsFormCheckBox">
                                    <input type="checkbox" id="miCheckbox" />
                                    <label className="WorkWithUsTexto" for="miCheckbox">I accept the Privacy Policy</label>
                                </div>
                            </div>
                            <div className="WorkWithUsFormBoton">
                                <button>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>


    )
}

export default WorkWithUsForm;