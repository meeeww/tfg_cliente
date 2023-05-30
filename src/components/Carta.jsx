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
        })
    })

    if (isLoading) {
        return (null);
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
                {categorias.map((categoria) => (
                    <div id={categoria.nombre_categoria} key={categoria.id_categoria}>
                        <div className="tituloCarta">
                            <h2>Our<span className="WorkWithUsColorSpace">{categoria.nombre_categoria}</span></h2>
                        </div>
                        <div className={"CartaCoffee"} id={categoria.nombre_categoria.toLowerCase()}>
                            {
                                productos &&
                                productos.map((producto) => (
                                    producto.id_categoria == categoria.id_categoria ?
                                        <a key={producto.id_producto} href={"http://localhost:5173/product?id=" + producto.id_producto}>
                                            <div className={"CartaItemsCaja"}>
                                                <div className="CartaImagen">
                                                    <img src={producto.foto_producto} alt={producto.nombre_producto} />
                                                </div>
                                                <div className="CartaTexto">
                                                    <h2>{producto.nombre_producto}</h2>
                                                    <p>{producto.descripcion_producto}</p>
                                                    <p>${producto.coste_base}</p>
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
            </div>
        </>
    )
}

export default Carta;
