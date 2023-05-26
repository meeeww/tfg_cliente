import Axios from 'axios'
import { useState, useEffect } from 'react';
import Panel from '../../components/Dashboard/Panel'
import Header from '../../components/Dashboard/Header'
import Diego from "../../assets/AboutUs/Diego.jpg"
import Zas from "../../assets/AboutUs/Zas.png"


function Orders() {
    const [usuario, setUsuario] = useState([])
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem("token") != null || localStorage.getItem("token") == "") {
            Axios.get("http://localhost:4000/API/sesiones/buscar?token=" + localStorage.getItem("token")).then(response => {
                if (response.data[0]) {
                    Axios.get("http://localhost:4000/API/usuarios/buscar?id=" + response.data[0]["id_usuario"]).then(response2 => {
                        setUsuario(response2.data[0])
                        setLoading(false)
                    })
                }

            })
            // setUsuario(checkSession())
            // setLoading(false)
        }
    }, [])

    if (isLoading) {
        return (
            < div className="dashboardBody" >
                <Panel></Panel>
            </div >
        )
    }

    return (
        <>
            <div className="dashboardBody">
                <Panel></Panel>
                <div className="panelDashboard">
                    <div className="headerDashboard">
                        <div className="welcomeMessageDashboard">
                            <h1 style={{ "paddingRight": "1rem" }}>Welcome,</h1>
                            <h1>{usuario.nombre_usuario}</h1>
                        </div>
                        <Header />
                    </div>
                    <div className="dashboardDocuments">
                        <div className="occupationalHazardsDocuments">
                            <h1 style={{ marginBlock: "1rem" }}>Comité</h1>
                            <p>El comité de empresa es un órgano fundamental en la representación y defensa de los trabajadores dentro de una organización. Sus funciones son diversas y vitales para garantizar el bienestar laboral y promover la participación de los empleados en la toma de decisiones. A continuación, se presentan algunas de las principales funciones que desempeña un comité de empresa:</p>
                            <div style={{ marginBlock: "1rem" }}>
                                <h4>Representación de los trabajadores</h4>
                                <p>El comité de empresa actúa como portavoz y representante de los intereses colectivos de los trabajadores ante la dirección de la empresa. Es el canal de comunicación principal entre la plantilla y la administración, velando por sus derechos, intereses y condiciones laborales.</p>
                            </div>
                            <div style={{ marginBlock: "1rem" }}>
                                <h4>Negociación colectiva</h4>
                                <p>Una de las funciones más relevantes del comité de empresa es participar en la negociación de convenios colectivos. Estos acuerdos regulan las condiciones de trabajo, salarios, beneficios, horarios y otros aspectos relevantes para los empleados. El comité tiene la responsabilidad de proteger los intereses de los trabajadores y buscar acuerdos justos y equitativos.</p>
                            </div>
                            <div style={{ marginBlock: "1rem" }}>
                                <h4>Vigilancia del cumplimiento normativo</h4>
                                <p>El comité de empresa se encarga de supervisar que se cumplan las leyes laborales, los convenios colectivos y cualquier otra normativa aplicable en el ámbito laboral. Esto implica velar por la seguridad y salud en el trabajo, la igualdad de género, la no discriminación y otros derechos fundamentales de los trabajadores.</p>
                            </div>
                            <div style={{ marginBlock: "1rem" }}>
                                <h4>Participación en decisiones empresariales</h4>
                                <p>El comité de empresa tiene derecho a ser consultado y emitir informes en diversos aspectos que afecten a los trabajadores, como cambios organizativos, reestructuraciones, despidos colectivos, traslados de personal, entre otros. Su función es analizar las implicaciones de estas decisiones en los empleados y proponer alternativas o medidas de protección.</p>
                            </div>
                            <div style={{ marginBlock: "1rem" }}>
                                <h4>Resolución de conflictos</h4>
                                <p>Cuando surgen discrepancias o conflictos entre los trabajadores y la dirección de la empresa, el comité de empresa puede actuar como mediador o buscar soluciones a través de la negociación. Su objetivo es evitar situaciones de confrontación y encontrar acuerdos que beneficien a ambas partes.</p>
                            </div>
                            <div style={{ marginBlock: "1rem" }}>
                                <h4>Información y comunicación</h4>
                                <p>El comité de empresa tiene la tarea de informar a los trabajadores sobre las decisiones y acuerdos alcanzados en su nombre. Debe mantener una comunicación fluida y transparente, transmitiendo la información relevante y manteniendo a los empleados al tanto de las novedades y cambios que puedan afectarles.</p>
                            </div>
                        </div>
                        <div className="AboutUsDiv4Team">
                            <div className="AboutUsDiv4TeamCajas">
                                <img src={Diego} alt="FotoDiego" />
                                <h3>Diego Giménez Sancho</h3>
                                <p>Co-Founder</p>
                            </div>
                            <div className="AboutUsDiv4TeamCajas">
                                <img src={Zas} alt="FotoDiego" />
                                <h3>Juan Zas Marín</h3>
                                <p>Co-Founder</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Orders
