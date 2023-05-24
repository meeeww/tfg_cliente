import MainLayout from '../layout/MainLayout';
import Breadcumb from "../components/Breadcumb";
import Foto1 from "../assets/InformacionCafe/InformacionCafe3.jpg"
import Diego from "../assets/AboutUs/Diego.jpg"
import Zas from "../assets/AboutUs/Zas.png"

const WorkWithUs = () => {
    return (
        <MainLayout>
            <Breadcumb></Breadcumb>
            <div className="AboutUsContenedor">
                <div className="AboutUsDiv1">
                    <div className="AboutUsDiv1Izquierda">
                        <h1><span className="WorkWithUsColorSpace">About</span>The Coffee Tub</h1>
                        <p>At The Coffee Tub, we are proud to be a leading coffee destination in the United States, offering exceptional coffee and related services. With three locations across the country, we strive to provide a memorable coffee experience for our valued customers.</p>
                        <p>As coffee enthusiasts, we select only the best coffee beans from around the world. Our dedicated team works closely with sustainable and ethical coffee producers, ensuring that each cup we serve is crafted with care and reflects the rich flavors and aromas that characterize exceptional coffee.</p>
                        <p>At The Coffee Junction, we are passionate about creating a welcoming and authentic environment for our customers. Our cafeterias are designed with your comfort in mind, providing a space where you can relax, enjoy your favorite coffee and share special moments with friends and loved ones.</p>
                    </div>
                    <div className="AboutUsDiv1Derecha">
                        <img src={Foto1} alt="cafeteria" />
                    </div>
                </div>
                <div className="AboutUsDiv2">
                    <h1><span className="WorkWithUsColorSpaceRight">More</span>Than<span className="WorkWithUsColorSpace">5 Years</span>Of LeaderShip</h1>
                    <div className="AboutUsDiv2Contenedor">
                        <div className="AboutUsDiv2Izquierda">
                            <p>The Coffee Tub emerged in New York in 2018 as a result of the visionary determination of its founders to introduce a new business model: spacious spaces, a wide range of products and highly competitive prices, all dedicated to the love of coffee.</p>
                            <p>Driven by our success and the growth of the company, in 2020 we reached another state with a clear objective: to bring technology to the entire country, offering a wide range of products at the best price. With enthusiasm and dedication, we made an effort in what became our first great success in the country.</p>
                        </div>
                        <div className="AboutUsDiv2Derecha">
                            <p>Our success is based on the constant adaptation to new consumer trends, the diversity of services for our clients, the unique and personalized experience of each visit, and a wide selection of products from the best brands, all at updated and competitive prices. All this, together with an exceptional team of professionals dedicated to providing solutions to our clients and an unmistakable advertising presence.</p>
                            <p>Behind every cup of coffee is our team of passionate professionals, dedicated to finding solutions for our clients. From expert baristas who prepare your coffee with precision and artistry to customer service staff ready to answer your questions and provide recommendations, we strive to provide exceptional service with every interaction.</p>
                        </div>
                    </div>
                </div>
                <div className="AboutUsDiv3">
                    <h1><span className="WorkWithUsColorSpaceRight">Business</span>Model</h1>
                    <p>The last 5 years have been a journey full of learning, during which our business model has evolved to adapt to new consumer behaviors and trends. We have always had a clear objective in mind: to become the first choice of our clients when they think of enjoying a coffee and a delicious breakfast in our country. To achieve this, we have based ourselves on three strategic pillars that support our vision of the future: our team, our clients and the positive impact on society.</p>
                </div>
                <div className="AboutUsDiv4">
                    <h1><span className="WorkWithUsColorSpaceRight">Team</span></h1>
                    <p>At The Coffee Tub, we are a passionate and committed team of approximately 40 talented workers. We are united by our passion for coffee and the desire to offer exceptional experiences to our customers in every cup we serve. Each member of our team plays a critical role in the daily operation of our cafeterias. From our dedicated baristas, who are experts in coffee preparation, to our friendly customer service staff who greet you with a smile, everyone contributes to creating a welcoming and friendly environment for our customers.</p>
                    <div className="AboutUsDiv4Team">
                        <div className="AboutUsDiv4TeamCajas">
                            <img src={Diego} alt="FotoDiego" />
                            <h3>Diego Giménez Sancho</h3>
                            <p>Co-Founder</p>
                        </div>
                        <div className="AboutUsDiv4TeamCajas">
                            <img src={Zas} alt="FotoDiego" />
                            <h3>Juan Zas Marín</h3>
                            <p>Co-Founder</p>
                        </div>
                    </div>
                    <div className="AboutUsDiv4Buttom">
                        <button>Join our team</button>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
export default WorkWithUs;
