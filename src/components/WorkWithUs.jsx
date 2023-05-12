import React from "react";
import MainLayout from '../layout/MainLayout';
import Imagen from "../components/WorkWithUsImagen";
const WorkWithUs = () => {
    return (
        <MainLayout>
            <Imagen></Imagen>
            <div className="WorkWithUsContainer">
                <div className="WorkWithUsDiv1">
                    <h1>WE ARE LOOKING FOR PEOPLE WHO LOVE THEIR WORK AND DO IT WITH PASSION</h1>
                    <p>We are looking for people who love to work as a team. With authenticity and positive energy, a unique atmosphere is created and therefore a great atmosphere among restaurant employees.</p>
                    <p>If:</p>
                    <ul>
                        <li>You want to work in a large multinational in the process of expansion</li>
                        <li>Look for new challenges</li>
                        <li>You want to develop professionally</li>
                        <li>You like dynamic work environments</li>
                        <li>The Coffee Tub is the ideal place for you! Join the The Coffee Tub Adventure</li>
                    </ul>
                </div>

                <div className="WorkWithUsDiv2">
                    <div className="WorkWithUsDiv2Titulo">
                        <h1>Are you prepared to work at The Coffee Tub?</h1>
                    </div>
                    <div className="WorkWithUsDiv2Container">
                        <div className="WorkWithUsDiv2Caja">
                            <h1>Offices</h1>
                            <i class="fa-solid fa-laptop"></i>
                        </div>
                        <div className="WorkWithUsDiv2Caja">
                            <h1>Scholarships/Internships</h1>
                            <i class="fa-solid fa-chalkboard-user"></i>
                        </div>
                        <div className="WorkWithUsDiv2Caja">
                            <h1>Coffee shops</h1>
                            <i class="fa-solid fa-mug-saucer"></i>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default WorkWithUs;