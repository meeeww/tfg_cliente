import React from "react";
import MainLayout from '../layout/MainLayout';
import Imagen from "../components/WorkWithUsImagen";
const WorkWithUs = () => {
    return (
        <MainLayout>
            <Imagen></Imagen>
            <div className="WorkWithUsContainer">
                <div className="WorkWithUsDiv">
                    <h1>What do I have to do to work in The Coffee Tub?</h1>
                    <div className="WorkWithUsDiv1Contenedor">
                        <div className="WorkWithUsDiv1Caja">
                            <i class="fa-brands fa-wpforms"></i>
                            <div className="WorkWithUsDivTexto">
                                <h1>Personal data and CV</h1>
                                <p>Complete the form with your personal data. If you have training and experience, tell us!</p>
                            </div>
                        </div>
                        <div className="WorkWithUsDiv1Caja">
                            <i class="fa-regular fa-calendar"></i>
                            <div className="WorkWithUsDivTexto">
                                <h1>Hours and position</h1>
                                <p>Choose your work preferences: how many hours a week and where you would like to work.</p>
                            </div>
                        </div>
                        <div className="WorkWithUsDiv1Caja">
                            <i class="fa-solid fa-people-arrows"></i>
                            <div className="WorkWithUsDivTexto">
                                <h1>Personal interview</h1>
                                <p>Our Restaurant Manager will contact you to schedule a personal interview.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="WorkWithUsDiv">
                    <h1>Benefits of working at VIPS and VIPS Smart</h1>
                    <div className="WorkWithUsDiv2Contenedor">
                        <div className="WorkWithUsDiv2Caja">
                            <i class="fa-solid fa-rocket"></i>
                            <div className="WorkWithUsDivTexto">
                                <h1>The development of our teams is stellar</h1>
                            </div>
                        </div>
                        <div className="WorkWithUsDiv2Caja">
                            <i class="fa-solid fa-heart"></i>
                            <div className="WorkWithUsDivTexto">
                                <h1>Our values ​​define us</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="WorkWithUsDiv">
                    <h1>What to do to be The Coffee Tub people</h1>
                    <div className="WorkWithUsDivTexto2">
                        <p>To work at The Coffee Tub, it is essential to register on our Employment Portal. Through simple steps, you can complete your profile with your personal data and work preferences. At the end of the registration, we will invite you to carry out an affinity evaluation that will allow us to get to know you better.</p>
                        <p>At The Coffee Tub we value talent and strive to create a cohesive and committed team. Your registration in our Employment Portal is the first step to be part of our coffee family.</p>
                        <p>Join our team and discover the passion for coffee at The Coffee Tub! </p>
                        <button>fill the form</button>
                    </div>


                </div>
            </div>
        </MainLayout>
    )
}

export default WorkWithUs;