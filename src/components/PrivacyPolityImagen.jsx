import { NavLink } from "react-router-dom";

const Breadcumb = () => {

    const mainColor = "#ad974f"

    return (
        <div className="mainBread">
            <div className="titularBread">
                <div className="tituloBread">
                    <h1>The &<h1 style={{ color: mainColor }}>C</h1>offee Tub</h1>
                </div>
            </div>
        </div>
    );
}

export default Breadcumb;