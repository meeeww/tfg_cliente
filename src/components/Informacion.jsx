import React from 'react';
import css from '../estilos/estilos.css';
import cafe1 from '../assets/Informacioncafe1.jpg'
import cafe2 from '../assets/Informacioncafe2.jpg'
import cafe3 from '../assets/Informacioncafe3.jpg'

const Informacion = () => {

    return (
        <div>
            <div className="divContainerInformacion">
                <div className="cajaInformacion">
                    <h2>Mira nuestra carta</h2>
                    <img src={cafe2} alt="" />
                </div>
                <div className="cajaInformacion">
                    <h2>Mira nuesto cafe</h2>
                    <img src={cafe1} alt="" />
                </div>
                <div className="cajaInformacion">
                    <h2>Encuentranos</h2>
                    <img src={cafe3} alt="" />
                </div>
            </div>
            <div className="divContainerInformacion">
                <div>
                    fw
                </div>
                <div>
                    f
                </div>
            </div>
            
        </div>
    );
};

export default Informacion