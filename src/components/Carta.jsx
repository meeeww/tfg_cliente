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

    const [isLoading, setLoading] = useState(true);
    const [productos, setProductos] = useState([]);
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:4000/API/productos/consultar").then(response => {
            setProductos(response.data)
            Axios.get("http://localhost:4000/API/categorias/consultar").then(response2 => {
                setCategorias(response2.data)
                setLoading(false)
            })
            //console.log(productos)
        })
    })

    if (isLoading) {
        console.log("loading")
        return (null);
    }

    // useEffect(() => {
    //     conseguirProductos()

    //     Axios.get("http://localhost:4000/API/categorias/consultar", { timeout: 10000 })
    //         .then((res) => {
    //             //console.log("RESPONSE RECEIVED: ", res.data);
    //             setCategorias(res.data)

    //             //localStorage.setItem("token", res.data)
    //             //location.replace("http://localhost:5173/login")
    //             return {
    //                 statusCode: 200,
    //                 body: JSON.stringify({ title: "this was a success" }),
    //             };
    //         })
    // }, [])
    // 
    // if (productos.length == 0) {
    //     console.log("hey")
    //     return null;
    // }

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
                {categorias.map((categoria) => (
                    <div id={categoria.nombre_categoria} key={categoria.id_categoria}>
                        <div className="tituloCarta">
                            <h1>Our <h1 style={{ color: "var(--color_secundario)" }}>{categoria.nombre_categoria}</h1></h1>
                        </div>
                        <div className={"CartaCoffee"} id={categoria.nombre_categoria.toLowerCase()}>
                            {
                                productos &&
                                productos.map((producto) => (
                                    producto.id_categoria == categoria.id_categoria ?
                                        <a key={producto.id_producto} href={"http://localhost:5173/productos/" + producto.id_producto}>
                                            <div className={"CartaItemsCaja"}>
                                                <div className="CartaImagen">
                                                    <img src={producto.foto_producto} alt={producto.nombre_producto} />
                                                </div>
                                                <div className="CartaTexto">
                                                    <h2>{producto.nombre_producto}</h2>
                                                    <p>{producto.descripcion_producto}</p>
                                                    <p>{producto.coste_base}</p>
                                                </div>
                                            </div>
                                        </a>
                                        :
                                        console.log()
                                ))
                            }
                        </div>
                    </div>
                ))}


                {
                    // categorias.map((categoria) => {
                    //     (
                    //         

                    //     )


                    // })
                }









            </div>
        </>
    )
}

export default Carta;
