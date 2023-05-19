import { useState } from "react";
import { NavLink } from "react-router-dom";

import cafe1 from '../assets/InformacionCafe/Informacioncafe1.jpg'
import cafe2 from '../assets/InformacionCafe/Informacioncafe2.jpg'
import cafe3 from '../assets/InformacionCafe/Informacioncafe3.jpg'
import cafe4 from '../assets/InformacionCafe/Informacioncafe4.jpg'
import cafe5 from '../assets/InformacionCafe/Informacioncafe5.jpg'
import cafe6 from '../assets/InformacionCafe/Informacioncafe6.jpg'
import cafe7 from '../assets/InformacionCafe/Informacioncafe7.jpg'

const linksUp = [
    { title: 'Take a Look at our Letter', description: 'Enjoy our delicious homemade pastries along with a freshly brewed cup of coffee at our café! We look forward to seeing you!', image: cafe1, button: "Order Now", redirection: "/menu" },
    { title: 'Take a Look at our Coffee', description: 'Discover our high-quality coffee capsules and start every morning with a cup of exceptional flavor.', image: cafe2, button: "Explore Coffee", redirection: "/coffee" },
    { title: 'Sunrise Delight', description: 'Try our delicious fresh handmade sandwiches. You will love them!', image: cafe4, button: "Know More", redirection: "/sandwiches" },
    { title: 'Slushies', description: 'Refresh your summer with our delicious slushies!', image: cafe5, button: "Know More", redirection: "/slushies" },
]

const linksDown = [
    { title: 'Find', subtitle: "Us", left: true, description: 'Would you like to enjoy our delicious coffee in person? Find us at our café and experience the quality and flavor of our coffee!', image: cafe3, button: "Find Us", redirection: "/aboutus" },
    { title: 'Merchandise', subtitle: "", left: false, description: 'Carry our brand with you everywhere with our line of merchandise. Find mugs, t-shirts, hats, and more at our café. Make your purchase and support your favorite café!', image: cafe6, button: "Buy", redirection: "/merchandising" },
    { title: 'Work With', subtitle: "Us", left: true, description: 'Join our team and be part of our passion for providing the best coffee and food experience! Check out our job opportunities and apply now.', image: cafe7, button: "Work With Us", redirection: "/workwithus" },
]

const Informacion = () => {

    return (
        <>
            <div className="exploreClassInformacion">
                <div className="tituloInformacionIndividual">
                    <h2>Explore by our <h2 style={{ color: "var(--color_secundario)" }}>products</h2></h2>
                </div>
                <div className="exploreOptionsInformacion">
                    {linksUp.map((item) => (
                        <a key={item.name} href={item.redirection}>
                            <div className="opcionIndividualInformacion">
                                <div className="separacionIndividualInformacion">
                                    <h3>{item.title}</h3>
                                    <img src={item.image} className="imagenOpcionInformacion"></img>
                                </div>
                                <p>{item.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
                <div className="tituloInformacionIndividual">
                    <h2>About <h2 style={{ color: "var(--color_secundario)" }}>us</h2></h2>
                </div>
                <div className="aboutUsOptionsInformacion">
                    {linksDown.map((item) => (
                        <div key={item.title} className="aboutUsIndividual">
                            {item.left == true ?
                                <>
                                    <img src={item.image} className="aboutUsImagenInformacion"></img>
                                    <div className="textoAboutUs">
                                        <div className="tituloAboutUsIndividual">
                                            <h2>{item.title} <h2 style={{ color: "var(--color_secundario)" }}>{item.subtitle}</h2></h2>
                                        </div>

                                        <p>{item.description}</p>
                                        <NavLink to={item.redirection} className="botonInformacion">{item.button}</NavLink>
                                    </div>
                                </>
                                :
                                <>
                                    <div className="textoAboutUs">
                                        <div className="tituloAboutUsIndividual">
                                            <h2>{item.title} <h2 style={{ color: "var(--color_secundario)" }}>{item.subtitle}</h2></h2>
                                        </div>

                                        <p>{item.description}</p>
                                        <NavLink to={item.redirection} className="botonInformacion">{item.button}</NavLink>
                                    </div>
                                    <img src={item.image} className="aboutUsImagenInformacion"></img>

                                </>
                            }
                        </div>
                    ))}


                </div>
            </div>
        </>
    );
};

export default Informacion