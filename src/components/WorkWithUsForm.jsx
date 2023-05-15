import React from "react";
import MainLayout from '../layout/MainLayout';
import Imagen from "./WorkWithUsImagen";
const WorkWithUsForm = () => {
    return (
        <MainLayout>
            <Imagen></Imagen>
            <div className="WorkWithUsFormContenedor">
                <div className="WorkWithUsFormDivTexto">
                    <h1>Work with us</h1>
                </div>
                <div className="WorkWithUsFormFormContenedor">
                    <div className="WorkWithUsForm1">
                        <input type="text" placeholder="NAME" />
                        <input type="text" placeholder="FIRST LAST NAME" />
                        <input type="text" placeholder="SECOND LAST NAME" />
                        <input type="text" placeholder="SOCIAL SECURITY CARD" />
                        <input type="text" placeholder="PHONE" />
                        <input type="text" placeholder="EMAIL" />
                        <input type="text" placeholder="ZIP CODE" />
                        <input type="text" placeholder="CITY" />
                        <input type="text" placeholder="COUNTY" />
                        <input type="text" placeholder="STATE" />
                        <p>Job position requested</p>
                        <div className="WorkWithUsFormCheckBoxContainer">
                            <div className="WorkWithUsFormCheckBox">
                                <input type="radio" name="radio" />
                                <p>Cook</p>
                            </div>
                            <div className="WorkWithUsFormCheckBox">
                                <input type="radio" name="radio" />
                                <p>Waiter</p>
                            </div>
                            <div className="WorkWithUsFormCheckBox">
                                <input type="radio" name="radio" />
                                <p>Any</p>
                            </div>
                        </div>
                        <div className="WorkWithUsFormFecha">
                            <label for="birthdate">Date of birth</label>
                            <input type="date" id="birthdate" name="birthdate" />
                        </div>
                        <div className="WorkWithUsFormCheckBoxContainer">
                            <div className="WorkWithUsFormCheckBox">
                                <input type="checkbox" id="miCheckbox" />
                                <label for="miCheckbox">I accept the Privacy Policy</label>
                            </div>
                        </div>
                        <div className="WorkWithUsFormBoton">
                            <button>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>


    )
}

export default WorkWithUsForm;