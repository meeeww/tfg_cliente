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
    { title: 'Take a Look at our Coffee', description: 'Do you want to enjoy our delicious coffee from the comfort of your own home? Discover our high-quality coffee capsules and start every morning with a cup of exceptional flavor.', image: cafe2, button: "Explore Coffee", redirection: "/coffee" },
    { title: 'Find Us', description: 'Would you like to enjoy our delicious coffee in person? Find us at our café and experience the quality and flavor of our coffee!', image: cafe3, button: "Find Us", redirection: "/aboutus" },
]

const linksDown = [
    { title: 'Sunrise Delight', description: 'Try our delicious fresh handmade sandwiches. You will love them!', image: cafe4, button: "Know More", redirection: "/sandwiches" },
    { title: 'Slushies', description: 'Refresh your summer with our delicious slushies!', image: cafe5, button: "Know More", redirection: "/slushies" },
    { title: 'Merchandise', description: 'Carry our brand with you everywhere with our line of merchandise. Find mugs, t-shirts, hats, and more at our café. Make your purchase and support your favorite café!', image: cafe6, button: "Buy", redirection: "/merchandising" },
    { title: 'Work With Us', description: 'Join our team and be part of our passion for providing the best coffee and food experience! Check out our job opportunities and apply now.', image: cafe7, button: "Work With Us", redirection: "/workwithus" },
]

const Informacion = () => {

    return (
        <div>
            <div className="CartaInformacionContainer">
                <div className="WrapperCartaInformacion">
                    <h2>Take a Look at our Menu</h2>
                    <p>Enjoy ta</p>
                </div>
                <img src={cafe1}></img>
            </div>
            <div className="InformacionDivContainer1">
                {linksUp.map((item) => (
                    <div key={item.title} className="InformacionDiv">
                        <div className="InformacionCaja">
                            <h2>{item.title}</h2>
                            <div>
                                <img src={item.image} alt="Coffee" />
                            </div>
                        </div>
                        <p>{item.description}</p>
                        <NavLink to={item.redirection} className="botonInformacion">{item.button}</NavLink>
                    </div>
                ))}
            </div>
            <div className="InformacionDivContainer2">
                {linksDown.map((item) => (
                    <div key={item.title} className="InformacionDiv">
                        <div className="InformacionCaja">
                            <h2>{item.title}</h2>
                            <div>
                                <img src={item.image} alt="Coffee" />
                            </div>
                        </div>
                        <p>{item.description}</p>
                        <NavLink to={item.redirection} className="botonInformacion">{item.button}</NavLink>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Informacion