import React from "react";
import MainLayout from '../layout/MainLayout'
import logo from '../assets/Logo.png'

const ContactUs = () => {
    return (
        <MainLayout>
            <div class="ContactUsContenedor">
                <div class="ContactUsUbicacion">
                    <div className="ContactUsUbicacionDiv1">
                        <h1>New York</h1>
                        <div className="ContactUsUbicacionIframe">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1512.1230770676223!2d-74.00794778504711!3d40.712597378903375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a18ebb653ef%3A0x3cec421be1d8b4f6!2s14%20Park%20Pl%2C%20New%20York%2C%20NY%2010007%2C%20EE.%20UU.!5e0!3m2!1ses!2ses!4v1683729175306!5m2!1ses!2ses" width="400" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="ContactusUbicacionDiv2">
                            <i className="fa-solid fa-location-dot"></i>
                            <p>14 Park Pl, New York, NY 10007, United States</p>
                        </div>
                        <div className="ContactusUbicacionDiv2">
                            <i class="fa-solid fa-phone"></i>
                            <p>976121212</p>
                        </div>
                    </div>
                    <div className="ContactUsUbicacionDiv1">
                        <h1>York</h1>
                        <div className="ContactUsUbicacionIframe">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1529.1617222032378!2d-76.725410699215!3d39.95652064701015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c88f6748525d4b%3A0xce039654c19de049!2s28%20W%20South%20St%2C%20York%2C%20PA%2017401%2C%20EE.%20UU.!5e0!3m2!1ses!2ses!4v1683729384500!5m2!1ses!2ses" width="400" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="ContactusUbicacionDiv2">
                            <i className="fa-solid fa-location-dot"></i>
                            <p>28 W South St, York, PA 17401, United States</p>
                        </div>
                        <div className="ContactusUbicacionDiv2">
                            <i className="fa-solid fa-phone"></i>
                            <p>976121212</p>
                        </div>
                    </div>
                </div>

                <div className="ContactUsFormularioDiv">
                    <div className="ContactUsFormulario">
                        <div className="ContactUsFormularioIzq">
                            <div className="ContactUsFormularioImagen">
                                <img src={logo} alt="logo" />
                            </div>
                        </div>
                        <div className="ContactUsFormularioDcho">
                            <h1>Contact us</h1>
                            <div className="ContactUsFormularioCuerpo">
                                <div className="ContactUsFormularioMensajes">
                                    <input type="text" placeholder="Full name"/>
                                    <input type="text" placeholder="E-mail"/>
                                    <input type="text" placeholder="Phone"/>
                                </div>
                                <div className="ContactUsFormularioMensajeGrande">
                                    <input type="text" placeholder="Message..."/>
                                    <button className="ContactUsFormularioBoton">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default ContactUs;