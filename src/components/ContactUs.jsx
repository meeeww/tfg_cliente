import React from "react";
import MainLayout from '../layout/MainLayout'

const ContactUs = () => {


    return (
        <MainLayout>
            <div class="ContactUsContenedor">
                <div class="ContactUsUbicacion">
                    <div className="ContactUsUbicacionDiv1">
                        <h1>madrid</h1>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2980.3502963419724!2d-0.8813931234897763!3d41.66977757126546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd59149ade1f9a9f%3A0x66cc84d326d51c26!2sCentro%20San%20Valero!5e0!3m2!1ses!2ses!4v1683557324705!5m2!1ses!2ses" width="400" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <div className="ContactusUbicacionDiv2">
                            <i className="fa-solid fa-location-dot"></i>
                            <p>C. de Violeta Parra, 9, 50015 Zaragoza</p>
                        </div>
                        <div className="ContactusUbicacionDiv2">
                            <i class="fa-solid fa-phone"></i>
                            <p>976121212</p>
                        </div>
                    </div>
                    <div className="ContactUsUbicacionDiv1">
                        <h1>madrid</h1>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2980.3502963419724!2d-0.8813931234897763!3d41.66977757126546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd59149ade1f9a9f%3A0x66cc84d326d51c26!2sCentro%20San%20Valero!5e0!3m2!1ses!2ses!4v1683557324705!5m2!1ses!2ses" width="400" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <div className="ContactusUbicacionDiv2">
                            <i className="fa-solid fa-location-dot"></i>
                            <p>C. de Violeta Parra, 9, 50015 Zaragoza</p>
                        </div>
                        <div className="ContactusUbicacionDiv2">
                            <i className="fa-solid fa-phone"></i>
                            <p>976121212</p>
                        </div>
                    </div>
                </div>

                <div class="ContactUsFormularioDiv">
                    <div className="ContactUsFormDiv">
                        <div className="ContactUsFormHeader">
                            <p>Our team will contact you</p>
                        </div>
                        <div className="ContactUsFormCuerpo">
                            <form action="">
                                <input className="ContactUsFormMensaje" type="text" />
                                <input className="ContactUsFormMensaje" type="text" />
                                <input className="ContactUsFormMensaje" type="text" />
                                <input className="ContactUsFormMensaje" type="text" />
                                <input className="ContactUsFormMensaje" type="text" />
                                <input className="ContactUsFormMensaje" type="text" />
                                <input className="ContactUsFormMensaje" type="text" />
                                <input className="ContactUsFormMensaje" type="text" />
                                <input className="ContactUsFormMensajeGrande" type="text" />
                                <div>
                                    <label >
                                        <input className="ContactUsFormBoton" type="checkbox" value="privacy" />I accept the privacy terms.
                                    </label>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default ContactUs;