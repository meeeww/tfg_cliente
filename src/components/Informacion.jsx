import cafe1 from '../assets/Informacioncafe1.jpg'
import cafe2 from '../assets/Informacioncafe2.jpg'
import cafe3 from '../assets/Informacioncafe3.jpg'
import cafe4 from '../assets/Informacioncafe4.jpg'
import cafe5 from '../assets/Informacioncafe5.jpg'
import cafe6 from '../assets/Informacioncafe6.jpg'
import cafe7 from '../assets/Informacioncafe7.jpg'

const Informacion = () => {

    return (
        <div>
            <div className="divContainerInformacion">
                <div className="cajaInformacion">
                    <h2>Look at our letter</h2>
                    <img src={cafe2} alt="" />
                    <p>Enjoy our delicious homemade pastries along with a freshly brewed cup of coffee at our café! We look forward to seeing you!</p>
                    <button>Order now</button>
                </div>
                <div className="cajaInformacion">
                    <h2>Look our coffee</h2>
                    <img src={cafe1} alt="" />
                    <p>Do you want to enjoy our delicious coffee from the comfort of your own home? Discover our high-quality coffee capsules and start every morning with a cup of exceptional flavor.</p>
                    <button>Explore Coffee</button>
                </div>
                <div className="cajaInformacion">
                    <h2>Find us</h2>
                    <img src={cafe3} alt="" />
                    <p>Would you like to enjoy our delicious coffee in person? Find us at our café and experience the quality and flavor of our coffee!</p>
                    <button>Find us</button>
                </div>
            </div>
            <div className="div2ContainerInformacion">
                <div className='filaInformacion2'>
                    <div className="cajaInformacion2">
                        <h2>Sunrise Delight</h2>
                        <img src={cafe4} alt="" />
                        <p>Try our delicious fresh handmade sandwiches. You will love them!</p>
                        <button>Know more</button>
                    </div>
                    <div className="cajaInformacion2">
                        <h2>Slushies</h2>
                        <img src={cafe5} alt="" />
                        <p>Refresh your summer with our delicious slushies!</p>
                        <button>Know more</button>
                    </div>
                </div>
                <div className='filaInformacion2'>
                    <div className="cajaInformacion2">
                        <h2>Merchandise</h2>
                        <img src={cafe6} alt="" />
                        <p>Carry our brand with you everywhere with our line of merchandise. Find mugs, t-shirts, hats, and more at our café. Make your purchase and support your favorite café!</p>
                        <button>Buy</button>
                    </div>
                    <div className="cajaInformacion2">
                        <h2>Work with us</h2>
                        <img src={cafe7} alt="" />
                        <p>Join our team and be part of our passion for providing the best coffee and food experience! Check out our job opportunities and apply now.</p>
                        <button>Work with us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Informacion