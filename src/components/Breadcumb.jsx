import { NavLink } from "react-router-dom";

const Breadcumb = () => {
    return (
        <div className="mainBread">
            <div className="titularBread">
                <div className="tituloBread">
                    <h1>The C <span className="WorkWithUsColor">offe</span> e Tub </h1>
                </div>
                <div className="subtituloBread">
                    <h2>Best Quality, Always On Time</h2>
                </div>
            </div>
            <div className="botonesBread">
                <div id="orderNowBread">
                    <NavLink to={"/menu"}><div>Order Now</div></NavLink>
                </div>

                <div className="sobreNosotrosBread">
                    <NavLink to={"/aboutus"}><div>About Us</div></NavLink>
                </div>
            </div>
        </div>
    );
}

export default Breadcumb;