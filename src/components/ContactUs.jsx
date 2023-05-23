import MainLayout from '../layout/MainLayout'
import axios from "axios";
import Breadcumb from "../components/Breadcumb";

const ContactUs = () => {

    const enviarFormulario = () => {

        let arrayCampos = []
        arrayCampos.push(document.getElementById("name").value)
        arrayCampos.push(document.getElementById("email").value)
        arrayCampos.push(document.getElementById("phone").value)
        arrayCampos.push(document.getElementById("message").value)
        console.log(arrayCampos)

        let postContactosURL = "http://localhost:4000/API/contactos/crear";

        axios.post(postContactosURL, {
            "nombre": arrayCampos[0], "email": arrayCampos[1], "telefono": arrayCampos[2], "mensaje": arrayCampos[3],
        })
    }

    return (
        <MainLayout>
            <Breadcumb></Breadcumb>
            <div className="ContactUsContenedor">
                <div className="ContactUsContenedorDivFormulario">
                    <div className="ContactUsContenedorDivFormularioDerecha">
                        <div className="ContactUsContenedorFormularioInfo">
                            <h1>Get in <span className="WorkWithUsColor">touch</span></h1>
                            <p>At our cafeteria, we are passionate about offering you an exceptional experience and a welcoming environment where you can enjoy delicious drinks and delicious snacks. We value your comments, questions and suggestions, so we invite you to contact us at any time.</p>
                            <p><span className="WorkWithUsColor"><b>Telephone:</b></span> Call us at the number +1 555-123-4567 and we will be happy to assist you personally.</p>
                            <p><span className="WorkWithUsColor"><b>Email:</b></span> If you prefer to communicate in writing, send us an email to info@thecoffeetub.com and we will respond as soon as possible.</p>
                            <p><span className="WorkWithUsColor"><b>Social Networks:</b></span> Follow us on our social networks (Facebook, Instagram and Twitter) to keep up to date with our promotions, special events and news. In addition, you can send us direct messages through these platforms, and we will respond promptly.</p>
                        </div>
                    </div>
                    <div className="ContactUsContenedorDivFormularioIzquierda">
                        <div className="ContactUsFormularioDiv">
                            <div className="ContactUsFormulario">
                                <div className="ContactUsFormularioDcho">
                                    <div className="ContactUsFormularioCuerpo">
                                        <div className="ContactUsFormularioCuerpoMensajes">
                                            <h1><span className="WorkWithUsColor">Contact</span>  us</h1>
                                            <div className="ContactUsFormularioMensajes">
                                                <input type="text" id="name" placeholder="Full name" />
                                                <input type="text" id="email" placeholder="E-mail" />
                                                <input type="text" id="phone" placeholder="Phone" />
                                            </div>
                                            <div className="ContactUsFormularioMensajeGrande">
                                                <input type="text" id="message" placeholder="Message..." />
                                                <button className="ContactUsFormularioBoton" onClick={enviarFormulario} >Send</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ContactUsUbicacion">
                    <div className="ContactUsUbicacionDiv1">
                        <h1>New York</h1>
                        <div className="ContactUsUbicacionIframe">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1512.1230770676223!2d-74.00794778504711!3d40.712597378903375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a18ebb653ef%3A0x3cec421be1d8b4f6!2s14%20Park%20Pl%2C%20New%20York%2C%20NY%2010007%2C%20EE.%20UU.!5e0!3m2!1ses!2ses!4v1683729175306!5m2!1ses!2ses" width="400" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="ContactusUbicacionDiv2">
                            <i className="fa-solid fa-location-dot"></i>
                            <p>14 Park Pl, New York, NY 10007, United States</p>
                        </div>
                        <div className="ContactusUbicacionDiv2">
                            <i className="fa-solid fa-phone"></i>
                            <p>+1 555-987-6543</p>
                        </div>
                    </div>
                    <div className="ContactUsUbicacionDiv1">
                        <h1>York</h1>
                        <div className="ContactUsUbicacionIframe">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1529.1617222032378!2d-76.725410699215!3d39.95652064701015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c88f6748525d4b%3A0xce039654c19de049!2s28%20W%20South%20St%2C%20York%2C%20PA%2017401%2C%20EE.%20UU.!5e0!3m2!1ses!2ses!4v1683729384500!5m2!1ses!2ses" width="400" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="ContactusUbicacionDiv2">
                            <i className="fa-solid fa-location-dot"></i>
                            <p>28 W South St, York, PA 17401, United States</p>
                        </div>
                        <div className="ContactusUbicacionDiv2">
                            <i className="fa-solid fa-phone"></i>
                            <p>+1 555-246-8139</p>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default ContactUs;