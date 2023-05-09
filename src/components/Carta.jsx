import { useState, useEffect } from 'react'
import Axios from 'axios'

import header1 from '../assets/CartaCafe/Headercafe.jpeg'
import header2 from '../assets/CartaCafe/Headerzumo.jpg'
import header3 from '../assets/CartaCafe/Headergranizado.jpg'
import header4 from '../assets/CartaCafe/Headersandwich.jpg'
import header5 from '../assets/CartaCafe/Headerdonuts.jpg'

const headers = [
    { title: "Coffee", redirect: "#coffee", img: header1 },
    { title: "Juice", redirect: "#juice", img: header2 },
    { title: "Slushie", redirect: "#slushie", img: header3 },
    { title: "Sandwich", redirect: "#sandwich", img: header4 },
    { title: "Confectionery", redirect: "#confectionery", img: header5 }
]

import carta1 from '../assets/CartaCafe/Cartacafesolo.png'
import carta2 from '../assets/CartaCafe/Cartacortado.png'
import carta3 from '../assets/CartaCafe/Cartacafeconleche.png'
import carta4 from '../assets/CartaCafe/Cartacapuchino.png'
import carta5 from '../assets/CartaCafe/CartaIrish.png'
import carta6 from '../assets/CartaCafe/Cartamacchiato.png'
import carta7 from '../assets/CartaCafe/Cartazumo.png'
import carta8 from '../assets/CartaCafe/Cartagranizado.png'
import carta9 from '../assets/CartaCafe/Cartasandwich.png'
import carta10 from '../assets/CartaCafe/Cartapastel.png'

const Carta = () => {

    const [productos, setProductos] = useState([]);
    const [categorias, setCategorias] = useState([]);

    

    useEffect(() => {
        Axios.get("http://localhost:4000/API/productos/consultar", { timeout: 10000 })
            .then((res) => {
                //console.log("RESPONSE RECEIVED: ", res.data);
                setProductos(res.data)
                //localStorage.setItem("token", res.data)
                //location.replace("http://localhost:5173/login")
                return {
                    statusCode: 200,
                    body: JSON.stringify({ title: "this was a success" }),
                };
            })

        Axios.get("http://localhost:4000/API/categorias/consultar", { timeout: 10000 })
            .then((res) => {
                //console.log("RESPONSE RECEIVED: ", res.data);
                setCategorias(res.data)

                //localStorage.setItem("token", res.data)
                //location.replace("http://localhost:5173/login")
                return {
                    statusCode: 200,
                    body: JSON.stringify({ title: "this was a success" }),
                };
            })
    }, [productos, categorias])

    if (categorias.length == 0) {
        console.log("hey")
        return null;
    }

    return (
        <>
            <div className="CartaHeader">
                {headers.map((item) => (
                    <a key={item.title} href={item.redirect} className="CartaDiv">
                        <div className="CartaImg">
                            <img src={item.img} alt={item.title} />
                        </div>
                        <p>{item.title}</p>
                    </a>
                ))}
            </div>

            <div className="CartaMenu">
                {
                    categorias.map((categoria) => {
                        (
                            <div id={categoria.nombre_categoria}>
                                <h1>{categoria.nombre_categoria}</h1>
                                <div className={"Carta" + categoria.nombre_categoria} id={"Carta" + categoria.nombre_categoria}>
                                    {
                                        productos &&
                                        productos.map((item) => (
                                            <div key={item.id_producto} className={"CartaItemsCaja"}>
                                                <div className="CartaImagen">
                                                    <img src={item.foto_producto} alt={item.nombre_producto} />
                                                </div>
                                                <div className="CartaTexto">
                                                    <h2>{item.nombre_producto}</h2>
                                                    <p>{item.descripcion_producto}</p>
                                                    <p>{item.coste_base}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        )


                    })
                }









            </div>
        </>
    )
}

export default Carta;
