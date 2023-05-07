import React from 'react'
import MainLayout from '../layout/MainLayout'

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
import carta7 from '../assets/CartaCafe/Cartamocha.png'
import carta8 from '../assets/CartaCafe/Cartazumonaranja.png'
import carta9 from '../assets/CartaCafe/Cartazumouva.png'
import carta10 from '../assets/CartaCafe/Cartazumomanzana.png'
import carta11 from '../assets/CartaCafe/Cartazumopiña.png'

/*import carta7 from '../assets/CartaCafe/Cartazumo.png'
import carta8 from '../assets/CartaCafe/Cartagranizado.png'
import carta9 from '../assets/CartaCafe/Cartasandwich.png'
import carta10 from '../assets/CartaCafe/Cartapastel.png'*/

const Carta = () => {
    return (
        <MainLayout>
            <h1>Carta</h1>
            <div className="CartaHeader">
                <div className="CartaDiv">
                    <div className="CartaImg">
                        <img src={header1} alt="" />
                    </div>
                    <p>Coffee</p>
                </div>
                <div className="CartaDiv">
                    <div className="CartaImg">
                        <img src={header2} alt="" />
                    </div>
                    <p>Juice</p>
                </div>
                <div className="CartaDiv">
                    <div className="CartaImg">
                        <img src={header3} alt="" />
                    </div>
                    <p>Slushie</p>
                </div>
                <div className="CartaDiv">
                    <div className="CartaImg">
                        <img src={header4} alt="" />
                    </div>
                    <p>Sandwich</p>
                </div>
                <div className="CartaDiv">
                    <div className="CartaImg">
                        <img src={header5} alt="" />
                    </div>
                    <p>Confectionery</p>
                </div>
            </div>
            <div className="CartaMenu">
                <h1>Coffee</h1>
                <div className="CartaCoffee">
                    <div className="CartaCofeeCaja">
                        <div className="CartaImagen">
                            <img src={carta1} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Coffee</h2>
                            <p>Only coffee</p>
                            <p>$2.50</p>
                        </div>
                    </div>
                    <div className="CartaCofeeCaja">
                        <div className="CartaImagen">
                            <img src={carta2} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>kleiner Brauner</h2>
                            <p>Coffee that combines equal parts espresso and a small amount of hot milk. It has a balance between the strong and concentrated flavor of the espresso and the smoothness provided by the milk.</p>
                            <p>$3.40</p>
                        </div>
                    </div>
                    <div className="CartaCofeeCaja">
                        <div className="CartaImagen">
                            <img src={carta3} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Coffee with milk</h2>
                            <p>Mix coffee with an equal amount of hot milk.</p>
                            <p>$3.20</p>
                        </div>
                    </div>
                    <div className="CartaCofeeCaja">
                        <div className="CartaImagen">
                            <img src={carta4} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Cappuccino </h2>
                            <p>It combines espresso coffee, steamed milk, and a layer of milk foam on top.</p>
                            <p>$3.60</p>
                        </div>
                    </div>
                    <div className="CartaCofeeCaja">
                        <div className="CartaImagen">
                            <img src={carta5} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Irish coffee </h2>
                            <p>Combine hot coffee, Irish whiskey, sugar and whipped cream.</p>
                            <p>$8.80</p>
                        </div>
                    </div>
                    <div className="CartaCofeeCaja">
                        <div className="CartaImagen">
                            <img src={carta6} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Macchiato</h2>
                            <p>combines an espresso with a small amount of steamed milk and a layer of milk foam on top. It has a strong and concentrated flavor due to the espresso, with the steamed milk and milk foam adding smoothness and creamy texture.</p>
                            <p>$4.60</p>
                        </div>
                    </div>
                    <div className="CartaCofeeCaja">
                        <div className="CartaImagen">
                            <img src={carta7} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Mocha</h2>
                            <p>that combines espresso coffee, chocolate and steamed milk.</p>
                            <p>$4.10</p>
                        </div>
                    </div>
                </div>
                <h1>Juice</h1>
                <div className="CartaJuice">
                    <div className="CartaJuiceCaja">
                        <div className="CartaImagen">
                            <img src={carta8} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Orange Juice </h2>
                            <p>Natural orange juice</p>
                            <p>$3.00</p>
                        </div>
                    </div>
                    <div className="CartaJuiceCaja">
                        <div className="CartaImagen">
                            <img src={carta9} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Grape Juice </h2>
                            <p>Natural grape juice</p>
                            <p>$3.00</p>
                        </div>
                    </div>
                    <div className="CartaJuiceCaja">
                        <div className="CartaImagen">
                            <img src={carta10} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Apple Juice </h2>
                            <p>Natural apple juice</p>
                            <p>$3.00</p>
                        </div>
                    </div>
                    <div className="CartaJuiceCaja">
                        <div className="CartaImagen">
                            <img src={carta11} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Pineapple Juice </h2>
                            <p>Natural pineapple juice</p>
                            <p>$3.00</p>
                        </div>
                    </div>
                    <div className="CartaJuiceCaja">
                        <div className="CartaImagen">
                            <img src={carta1} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Mora Juice </h2>
                            <p>espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through</p>
                            <p>$1.60</p>
                        </div>
                    </div>
                    <div className="CartaJuiceCaja">
                        <div className="CartaImagen">
                            <img src={carta1} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Tropical Juice </h2>
                            <p>espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through</p>
                            <p>$1.60</p>
                        </div>
                    </div>
                    <div className="CartaJuiceCaja">
                        <div className="CartaImagen">
                            <img src={carta1} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Tomate Juice </h2>
                            <p>espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through</p>
                            <p>$1.60</p>
                        </div>
                    </div>
                    
                   
                </div>
                <h1>Slushie</h1>
                <div className="CartaSlushie">
                    <div className="CartaSlushieCaja">
                        <div className="CartaImagen">
                            <img src={carta1} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Orange Juice </h2>
                            <p>espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through</p>
                            <p>$1.60</p>
                        </div>
                    </div>
                    <div className="CartaSlushieCaja">
                        <div className="CartaImagen">
                            <img src={carta1} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Orange Juice </h2>
                            <p>espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through</p>
                            <p>$1.60</p>
                        </div>
                    </div>
                    <div className="CartaSlushieCaja">
                        <div className="CartaImagen">
                            <img src={carta1} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Orange Juice </h2>
                            <p>espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through</p>
                            <p>$1.60</p>
                        </div>
                    </div>
                    <div className="CartaSlushieCaja">
                        <div className="CartaImagen">
                            <img src={carta1} alt="" />
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
                            <img src={carta1} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Orange Juice </h2>
                            <p>espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through</p>
                            <p>$1.60</p>
                        </div>
                    </div>
                    <div className="CartaSandwichCaja">
                        <div className="CartaImagen">
                            <img src={carta1} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Orange Juice </h2>
                            <p>espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through</p>
                            <p>$1.60</p>
                        </div>
                    </div>
                    <div className="CartaSandwichCaja">
                        <div className="CartaImagen">
                            <img src={carta1} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Orange Juice </h2>
                            <p>espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through</p>
                            <p>$1.60</p>
                        </div>
                    </div>
                    <div className="CartaSandwichCaja">
                        <div className="CartaImagen">
                            <img src={carta1} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Orange Juice </h2>
                            <p>espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through</p>
                            <p>$1.60</p>
                        </div>
                    </div>
                    <div className="CartaSandwichCaja">
                        <div className="CartaImagen">
                            <img src={carta1} alt="" />
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
                            <img src={carta1} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Orange Juice </h2>
                            <p>espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through</p>
                            <p>$1.60</p>
                        </div>
                    </div>
                    <div className="CartaConfectioneryCaja">
                        <div className="CartaImagen">
                            <img src={carta1} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Orange Juice </h2>
                            <p>espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through</p>
                            <p>$1.60</p>
                        </div>
                    </div>
                    <div className="CartaConfectioneryCaja">
                        <div className="CartaImagen">
                            <img src={carta1} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Orange Juice </h2>
                            <p>espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through</p>
                            <p>$1.60</p>
                        </div>
                    </div>
                    <div className="CartaConfectioneryCaja">
                        <div className="CartaImagen">
                            <img src={carta1} alt="" />
                        </div>
                        <div className="CartaTexto">
                            <h2>Orange Juice </h2>
                            <p>espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through</p>
                            <p>$1.60</p>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Carta;
