import cafe1 from '../assets/InformacionCafe/Informacioncafe1.jpg'
import cafe2 from '../assets/InformacionCafe/Informacioncafe2.jpg'
import cafe3 from '../assets/InformacionCafe/Informacioncafe3.jpg'
import cafe4 from '../assets/InformacionCafe/Informacioncafe4.jpg'
import cafe5 from '../assets/InformacionCafe/Informacioncafe5.jpg'
import cafe6 from '../assets/InformacionCafe/Informacioncafe6.jpg'
import cafe7 from '../assets/InformacionCafe/Informacioncafe7.jpg'

import React from 'react'

const InformacionActualizado = () => {

    return (
        <div>
            <div className="InformacionActualizadaDivContainer1">
                <div className="InformacionActualizadaDiv1">
                    <div className="InformacionActualizadaCaja">
                        <h2>Take a Look at our Letter</h2>
                        <img src={cafe1} alt="" />
                    </div>
                    <p>Enjoy our delicious homemade pastries along with a freshly brewed cup of coffee at our café! We look forward to seeing you!</p>
                    <button>Order Now</button>
                </div>
                <div className="InformacionActualizadaDiv2">
                    <div className="InformacionActualizadaCaja">
                        <h2>Take a Look at our Coffee</h2>
                        <img src={cafe2} alt="" />
                    </div>
                    <p>Do you want to enjoy our delicious coffee from the comfort of your own home? Discover our high-quality coffee capsules and start every morning with a cup of exceptional flavor.</p>
                    <button>Explore Coffee</button>
                </div>
                <div className="InformacionActualizadaDiv3">
                    <div className="InformacionActualizadaCaja">
                        <h2>Find Us</h2>
                        <img src={cafe3} alt="" />
                    </div>

                    <p>Would you like to enjoy our delicious coffee in person? Find us at our café and experience the quality and flavor of our coffee!</p>
                    <button>Find Us</button>
                </div>
            </div>
            <div className="InformacionActualizadaDivContainer2">
                <div className="InformacionActualizadaDiv4">
                    <h2>Sunrise Delight</h2>
                    <img src={cafe4} alt="" />
                    <p>Try our delicious fresh handmade sandwiches. You will love them!</p>
                    <button>Know More</button>
                </div>
                <div className="InformacionActualizadaDiv5">
                    <h2>Slushies</h2>
                    <img src={cafe5} alt="" />
                    <p>Refresh your summer with our delicious slushies!,</p>
                    <button>Know More</button>
                </div>
                <div className="InformacionActualizadaDiv6">
                    <h2>Merchandise</h2>
                    <img src={cafe6} alt="" />
                    <p>Carry our brand with you everywhere with our line of merchandise. Find mugs, t-shirts, hats, and more at our café. Make your purchase and support your favorite café!</p>
                    <button>Buy</button>
                </div>
                <div className="InformacionActualizadaDiv7">
                    <h2>Work With Us</h2>
                    <img src={cafe7} alt="" />
                    <p>Join our team and be part of our passion for providing the best coffee and food experience! Check out our job opportunities and apply now.</p>
                    <button>Work With Us</button>
                </div>
            </div>
        </div>
    );
};

export default InformacionActualizado