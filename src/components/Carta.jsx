import { useState, useEffect } from 'react'
import Axios from 'axios'

import header1 from '../assets/CartaCafe/Headercafe.jpeg'
import header2 from '../assets/CartaCafe/Headerzumo.jpg'
import header3 from '../assets/CartaCafe/Headergranizado.jpg'
import header4 from '../assets/CartaCafe/Headersandwich.jpg'
import header5 from '../assets/CartaCafe/Headerdonuts.jpg'

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

    const [productos, setProductos] = useState();
    const [categorias, setCategorias] = useState();

    let baseURL = "http://localhost:4000/API/productos/consultar";
    let baseURL2 = "http://localhost:4000/API/categorias/consultar";

    let config = {
        timeout: 10000,
    };



    useEffect(() => {
        Axios.get(baseURL, config)
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

        Axios.get(baseURL2, config)
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
    }, [])

    return (
        <>
            <div className="CartaHeader">
                <a href='#coffee' className="CartaDiv">
                    <div className="CartaImg">
                        <img src={header1} alt="" />
                    </div>
                    <p>Coffee</p>
                </a>
                <a href='#juice' className="CartaDiv">
                    <div className="CartaImg">
                        <img src={header2} alt="" />
                    </div>
                    <p>Juice</p>
                </a>
                <a href='#slushie' className="CartaDiv">
                    <div className="CartaImg">
                        <img src={header3} alt="" />
                    </div>
                    <p>Slushie</p>
                </a>
                <a href='#sandwich' className="CartaDiv">
                    <div className="CartaImg">
                        <img src={header4} alt="" />
                    </div>
                    <p>Sandwich</p>
                </a>
                <a href='#confectionery' className="CartaDiv">
                    <div className="CartaImg">
                        <img src={header5} alt="" />
                    </div>
                    <p>Confectionery</p>
                </a>
            </div>

            <div className="CartaMenu">
                <div id='coffee'>
                    <h1>Coffee</h1>
                    <div className="CartaCoffee" id="CartaCoffee">
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
                            ))}
                    </div>
                </div>

                {/* hay que hacer que coja las categorias */}

                <div id='juice'> 
                    <h1>Juice</h1>
                    <div className="CartaJuice">
                        <div className="CartaJuiceCaja">
                            <div className="CartaImagen">
                                <img src={carta7} alt="" />
                            </div>
                            <div className="CartaTexto">
                                <h2>Orange Juice </h2>
                                <p>espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through</p>
                                <p>$1.60</p>
                            </div>
                        </div>
                    </div>
                    <div className="CartaJuiceCaja">
                        <div className="CartaImagen">
                            <img src={carta7} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Pineapple juice </h2>
                            <p>espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through</p>
                            <p>$1.60</p>
                        </div>
                    </div>
                    <div className="CartaJuiceCaja">
                        <div className="CartaImagen">
                            <img src={carta7} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Cranberry juice </h2>
                            <p>espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through</p>
                            <p>$1.60</p>
                        </div>
                    </div>
                    <div className="CartaJuiceCaja">
                        <div className="CartaImagen">
                            <img src={carta7} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Prune juice </h2>
                            <p>espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through</p>
                            <p>$1.60</p>
                        </div>
                    </div>
                    <div className="CartaJuiceCaja">
                        <div className="CartaImagen">
                            <img src={carta7} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Strawberry juice</h2>
                            <p>espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through</p>
                            <p>$1.60</p>
                        </div>
                    </div>
                    <div className="CartaJuiceCaja">
                        <div className="CartaImagen">
                            <img src={carta7} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Apple juice</h2>
                            <p>espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through</p>
                            <p>$1.60</p>
                        </div>
                    </div>
                    <div className="CartaJuiceCaja">
                        <div className="CartaImagen">
                            <img src={carta7} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Coffee juice</h2>
                            <p>espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through</p>
                            <p>$1.60</p>
                        </div>
                    </div>
                </div>

                <h1 id='slushie'>Slushie</h1>
                <div className="CartaSlushie">
                    <div className="CartaSlushieCaja">
                        <div className="CartaImagen">
                            <img src={carta8} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Orange Juice </h2>
                            <p>espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through</p>
                            <p>$1.60</p>
                        </div>
                    </div>
                    <div className="CartaSlushieCaja">
                        <div className="CartaImagen">
                            <img src={carta8} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Orange Juice </h2>
                            <p>espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through</p>
                            <p>$1.60</p>
                        </div>
                    </div>
                    <div className="CartaSlushieCaja">
                        <div className="CartaImagen">
                            <img src={carta8} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Orange Juice </h2>
                            <p>espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through</p>
                            <p>$1.60</p>
                        </div>
                    </div>
                    <div className="CartaSlushieCaja">
                        <div className="CartaImagen">
                            <img src={carta8} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Orange Juice </h2>
                            <p>espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through</p>
                            <p>$1.60</p>
                        </div>
                    </div>
                </div>

                <h1>Sandwiches</h1>
                <div className="CartaSandwich">
                    <div className="CartaSandwichCaja">
                        <div className="CartaImagen">
                            <img src={carta9} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Orange Juice </h2>
                            <p>espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through</p>
                            <p>$1.60</p>
                        </div>
                    </div>
                    <div className="CartaSandwichCaja">
                        <div className="CartaImagen">
                            <img src={carta9} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Orange Juice </h2>
                            <p>espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through</p>
                            <p>$1.60</p>
                        </div>
                    </div>
                    <div className="CartaSandwichCaja">
                        <div className="CartaImagen">
                            <img src={carta9} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Orange Juice </h2>
                            <p>espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through</p>
                            <p>$1.60</p>
                        </div>
                    </div>
                    <div className="CartaSandwichCaja">
                        <div className="CartaImagen">
                            <img src={carta9} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Orange Juice </h2>
                            <p>espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through</p>
                            <p>$1.60</p>
                        </div>
                    </div>
                    <div className="CartaSandwichCaja">
                        <div className="CartaImagen">
                            <img src={carta9} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Orange Juice </h2>
                            <p>espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through</p>
                            <p>$1.60</p>
                        </div>
                    </div>
                </div>

                <h1>Confectionery</h1>
                <div className="CartaConfectionery">
                    <div className="CartaConfectioneryCaja">
                        <div className="CartaImagen">
                            <img src={carta10} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Orange Juice </h2>
                            <p>espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through</p>
                            <p>$1.60</p>
                        </div>
                    </div>
                    <div className="CartaConfectioneryCaja">
                        <div className="CartaImagen">
                            <img src={carta10} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Orange Juice </h2>
                            <p>espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through</p>
                            <p>$1.60</p>
                        </div>
                    </div>
                    <div className="CartaConfectioneryCaja">
                        <div className="CartaImagen">
                            <img src={carta10} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Orange Juice </h2>
                            <p>espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through</p>
                            <p>$1.60</p>
                        </div>
                    </div>
                    <div className="CartaConfectioneryCaja">
                        <div className="CartaImagen">
                            <img src={carta10} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Orange Juice </h2>
                            <p>espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through</p>
                            <p>$1.60</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Carta;
