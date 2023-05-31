import React from "react";
import { matchPath } from "react-router-dom";
import foto1 from "../assets/Examen/capuccino.jpg"
import foto2 from "../assets/Examen/matcha.jpg"
import foto3 from "../assets/Examen/frapuccino.jpg"
import foto4 from "../assets/Examen/chocolate.jpg"
import { useState, useEffect } from 'react';




const FormularioExamen = () => {

    let [usuario, setUsuario] = useState([])

    

    const enviarFormulario = () => {
        let arrayCampos = []
        arrayCampos.push(document.getElementById("campoName").value)
        console.log(arrayCampos)

        setUsuario = arrayCampos[0]

    }




    return (
        <div className="FormularioExamenContainer">
            <div className="welcomeMessageDashboard">
                <h1 style={{ "paddingRight": "1rem" }}>Hola,</h1>
                <h1>{usuario}</h1>


            </div>
            <div className="FormularioExamenMenu">
                <div className="FormularioExamenCaja">
                    <img src={foto1} alt="capuccino" />
                    <div className="FormularioExamenCajaTexto">
                        <h1>Café expreso</h1>
                        <p>Bebidas con los mejores granos de cafe 100% arabica, cuidadosamente seleccionados y tostados al más puro estilo Starbucks©.</p>
                        <button>Añadir</button>
                    </div>
                </div>
                <div className="FormularioExamenCaja">
                    <img src={foto2} alt="capuccino" />
                    <div className="FormularioExamenCajaTexto">
                        <h1>Té matcha</h1>
                        <p>Diferentes mezclas de té Teavana© para tus mejores infusiones.</p>
                        <button>Añadir</button>
                    </div>
                </div>
                <div className="FormularioExamenCaja">
                    <img src={foto3} alt="capuccino" />
                    <div className="FormularioExamenCajaTexto">
                        <h1>Frapuccino</h1>
                        <p>Bebidas con los mejores granos de cafe 100% arabica, cuidadosamente seleccionados y tostados al más puro estilo Starbucks©.</p>
                        <button>Añadir</button>
                    </div>
                </div>
                <div className="FormularioExamenCaja">
                    <img src={foto4} alt="capuccino" />
                    <div className="FormularioExamenCajaTexto">
                        <h1>Café expreso</h1>
                        <p>Bebidas con los mejores granos de cafe 100% arabica, cuidadosamente seleccionados y tostados al más puro estilo Starbucks©.</p>
                        <button>Añadir</button>
                    </div>
                </div>
            </div>

            <div className="formularioExamenFormulario">
                <div className="formularioExamenPregunta">
                    <p>Como te llamas</p>
                    <input type="text" id="campoName" placeholder="Name" />
                </div>
                <button onClick={enviarFormulario}>Añadir</button>
            </div>
        </div>
    )
}
export default FormularioExamen