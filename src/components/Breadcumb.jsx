import { NavLink } from "react-router-dom";

const Breadcumb = () => {

    const mainColor = "#ad974f"

    return (
        <div className="mainBread">
            <div className="titularBread">
                <div className="tituloBread">
                    <h1>The &<h1 style={{ color: mainColor }}>C</h1>offee Tub</h1>
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