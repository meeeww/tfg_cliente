const Producto = ( data ) => {


    return (
        <div className="panelDashboard">
            <div className="headerDashboard">
                <div className="welcomeMessageDashboard">
                    <h1 style={{ "paddingRight": "1rem" }}>Welcome,</h1>
                    <h1>{data["data"]["nombre_usuario"]}</h1>
                </div>
            </div>
        </div>
    )
}

export default Producto;