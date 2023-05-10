const managements = [
    { name: 'products', href: '/dashboard/products', icon: "fa-solid fa-mug-saucer" },
    { name: 'categories', href: '/dashboard/categories', icon: "fa-solid fa-tag" },
]

const clients = [
    { name: 'orders', href: '#', icon: "fa-solid fa-cart-shopping" },
    { name: 'contact', href: '#', icon: "fa-solid fa-phone" },
    { name: 'customerFeedback', href: '#', icon: "fa-solid fa-paper-plane" },
]

const documents = [
    { name: 'documents', href: '#', icon: "fa-solid fa-folder-open" },
    { name: 'jobApplications', href: '#', icon: "fa-solid fa-plus" },
    { name: 'prospect', href: '#', icon: "fa-solid fa-circle-info" },
]

const Configuracion = () => {
    return (
        <div className="barraDashboard">
            <h1>La Tarrina</h1>
            <div className="dashboardDashboard">
                <h2>Dashboard</h2>
            </div>
            <div className="managementDashboard">
                <h3>Management</h3>
                {managements.map((item) => (
                    <div key="" className={"secondDashboard"}>
                        <i className={item.icon}></i>
                        <h4><a key={item.name} href={item.href}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</a></h4>
                    </div>
                ))}
            </div>
            <div className="clientsDashboard">
                <h3>Clients</h3>
                {clients.map((item) => (
                    <div key="" className={"secondDashboard"}>
                        <i className={item.icon}></i>
                        <h4><a key={item.name} href={item.href}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</a></h4>
                    </div>
                ))}
            </div>
            <div className="documentDashboard">
                <h3>Documents</h3>
                {documents.map((item) => (
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