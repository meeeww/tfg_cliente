import Axios from 'axios'
import { useEffect, useState } from 'react'

const Recibos = (data) => {

    return (
        <div className="panelDashboard">
            <div className="headerDashboard">
                <div className="welcomeMessageDashboard">
                    <h1 style={{ "paddingRight": "1rem" }}>Welcome,</h1>
                    <h1>{data["data"]["usuario"]}</h1>
                </div>
            </div>
            <div className="configuracionUsuario">
                <div className="infoProductosCarrito">
                    {producto.map((productoIndividual, index) => (
                        <div key={"productoIndividual" + index} className="infoProductosIndividualCarrito">
                            <div className="infoRecibosPrincipal">
                                {console.log(recibos + " ")}
                                <img src={productoIndividual["foto_producto"]} alt='Product'></img>
                                <div className="textoInfoProductoCarrito">
                                    <h3>{productoIndividual["nombre_producto"]}</h3>
                                    <h4>{productoIndividual["descripcion_producto"]}</h4>
                                </div>
                            </div>
                            <div className="infoProductoIndividualCantidadCarrito">
                                <h3>{carrito[index]["cantidad"]}</h3>
                            </div>
                            <div className="infoProductoIndividualPrecioCarrito">
                                {"$" + parseFloat(productoIndividual["coste_base"]).toFixed(2)}
                            </div>
                            <div className="infoProductoIndividualTotalCarrito">
                                {"$" + parseFloat((productoIndividual["coste_base"]) * carrito[index]["cantidad"]).toFixed(2)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Recibos;