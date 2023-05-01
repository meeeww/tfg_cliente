const Breadcumb = () => {

    const mainColor = "#ad974f"

    return (
        <div className="mainBread">
            <div className="titularBread">
                <div className="tituloBread">
                    <h1>The &<h1 style={{color: mainColor}}>C</h1>offee Tub</h1>
                </div>
                <div className="subtituloBread">
                    <h2>Quality On Time</h2>
                </div>
            </div>
            <div className="botonesBread">
                <div className="pideYaBread">
                    Order Now
                </div>
                <div className="sobreNosotrosBread">
                    About Us
                </div>
            </div>
        </div>
    );
}

export default Breadcumb;