const Configuracion = ({nombre}) => {
    return (
        <div className="panelDashboard">
            <div className="headerDashboard">
                <div className="welcomeMessageDashboard">
                    <h1 style={{ "paddingRight": "1rem" }}>Welcome,</h1>
                    <h1>{nombre}</h1>
                </div>
            </div>
            <div className="panelInfoDashboardProducts">
                <div className="reportsOverviewDashboard">
                    <h2></h2>
                </div>
            </div>
        </div>
    );
}

export default Configuracion;