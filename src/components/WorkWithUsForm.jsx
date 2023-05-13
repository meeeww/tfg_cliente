import React from "react";
import MainLayout from '../layout/MainLayout';
import Imagen from "./WorkWithUsImagen";
const WorkWithUsForm = () => {
    return (
        <MainLayout>
            <div className="WorkWithUsFormContenedor">
                <div className="WorkWithUsFormDivTexto">
                    <h1>Register</h1>
                    <p>From our Employment Channel, you will only be asked to provide us with documentation related to recruitment, when you are selected for one of our vacancies.</p>
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
                                <input type="checkbox" id="miCheckbox" />
                                <label for="miCheckbox">Waiter</label>
                            </div>
                            <div className="WorkWithUsFormCheckBox">
                                <input type="checkbox" id="miCheckbox" />
                                <label for="miCheckbox">Kitchener</label>
                            </div>
                            <div className="WorkWithUsFormCheckBox">
                                <input type="checkbox" id="miCheckbox" />
                                <label for="miCheckbox">Any</label>
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