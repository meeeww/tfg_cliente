const managements = [
    { name: 'profile', href: '/user/profile', icon: "fa-solid fa-id-card" },
    { name: 'orders', href: '/user/orders', icon: "fa-solid fa-basket-shopping" },
    { name: 'adress', href: '/user/adress', icon: "fa-solid fa-map-location-dot" },
    { name: 'payments', href: '/user/payments', icon: "fa-solid fa-credit-card" },
    { name: 'logout', href: '../signout', icon: "fa-solid fa-right-from-bracket" },
]

const Configuracion = () => {
    return (
        <div className="barraDashboard">
            <h1>La Tarrina</h1>
            <div className="dashboardDashboard">
                <h2>Profile Configuration</h2>
            </div>
            <div className="managementDashboard">
                <h3>Profile</h3>
                {managements.map((item) => (
                    <div key="" className={"secondDashboard"}>
                        <i className={item.icon}></i>
                        <h4><a key={item.name} href={item.href}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</a></h4>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Configuracion;