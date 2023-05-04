import imagen from '../../assets/image.png'

const managements = [
    { name: 'products', href: '/dashboard/products' },
    { name: 'categories', href: '/dashboard/categories' },
    { name: 'orders', href: '#' },
    { name: 'contact', href: '#' },
    { name: 'customerFeedback', href: '#' },
]

const documents = [
    { name: 'documents', href: '#' },
    { name: 'jobApplications', href: '#' },
    { name: 'prospect', href: '#' },
]

const Panel = () => {
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
                        <img src={imagen} style={{ width: "30px", height: "30px" }}></img>
                        <h4><a key={item.name} href={item.href}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</a></h4>
                    </div>
                ))}
            </div>
            <div className="documentDashboard">
                <h3>Documents</h3>
                {documents.map((item) => (
                    <div key="" className={"secondDashboard"}>
                        <img src={imagen} style={{ width: "30px", height: "30px" }}></img>
                        <h4><a key={item.name} href={item.href}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</a></h4>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Panel;