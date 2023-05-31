import React from "react";
import { matchPath } from "react-router-dom";
import foto1 from "../assets/Examen/capuccino.jpg"
import foto2 from "../assets/Examen/matcha.jpg"
import foto3 from "../assets/Examen/frapuccino.jpg"
import foto4 from "../assets/Examen/chocolate.jpg"






const FormularioExamen = () => {
    return (
        <div className="FormularioExamenContainer">
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
        </div>
    )
}
export default FormularioExamen