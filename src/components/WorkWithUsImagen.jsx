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
                    <h2>The <spam className="WorkWithUsColor">J</spam>ob <spam className="WorkWithUsColor">Y</spam>ou <spam className="WorkWithUsColor">W</spam>ere <spam className="WorkWithUsColor">W</spam>aiting For</h2>
                </div>
            </div>
        </div>
    );
}

export default Breadcumb;