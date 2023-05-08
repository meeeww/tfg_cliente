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
                <h1>Coffee</h1>
                <div className="CartaCoffee" id="CartaCoffee">
                    <div className="CartaCofeeCaja">
                        <div className="CartaImagen">
                            <img src={carta1} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Coffee</h2>
                            <p>Only coffee</p>
                            <p>$1.00</p>
                        </div>
                    </div>
                    <div className="CartaCofeeCaja">
                        <div className="CartaImagen">
                            <img src={carta2} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>kleiner Brauner</h2>
                            <p>Coffee with a bit of milk</p>
                            <p>$1.30</p>
                        </div>
                    </div>
                    <div className="CartaCofeeCaja">
                        <div className="CartaImagen">
                            <img src={carta3} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Coffee with milk</h2>
                            <p>Coffee mixed with scalded milk in approximately equal amounts.</p>
                            <p>$1.20</p>
                        </div>
                    </div>
                    <div className="CartaCofeeCaja">
                        <div className="CartaImagen">
                            <img src={carta4} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Cappuccino  </h2>
                            <p>A cappuccino is the perfect balance of espresso, steamed milk and foam.</p>
                            <p>$1.60</p>
                        </div>
                    </div>
                    <div className="CartaCofeeCaja">
                        <div className="CartaImagen">
                            <img src={carta5} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Irish coffee </h2>
                            <p>Is a caffeinated alcoholic drink consisting of Irish whiskey, hot coffee and sugar</p>
                            <p>$2.20</p>
                        </div>
                    </div>
                    <div className="CartaCofeeCaja">
                        <div className="CartaImagen">
                            <img src={carta6} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Irish coffee </h2>
                            <p>espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through</p>
                            <p>$1.60</p>
                        </div>
                    </div>
                </div>

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
