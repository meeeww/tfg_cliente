import { useState } from 'react'
import '../estilos/estilos.css'
import imagen from '../assets/image.png'

const managements = [
  { name: 'products', href: '#' },
  { name: 'orders', href: '#' },
  { name: 'contact', href: '#' },
  { name: 'customerFeedback', href: '#' },
]

const documents = [
  { name: 'documents', href: '#' },
  { name: 'jobApplications', href: '#' },
  { name: 'prospect', href: '#' },
]

function Dashboard() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="mainBody">
        <div className="barraDashboard">
          <h1>La Tarrina</h1>
          <div className="dashboardDashboard">
            <h2>Dashboard</h2>
          </div>
          <div className="managementDashboard">
            <h3>Management</h3>
            {managements.map((item) => (
              <div className={"secondDashboard"}>
                <img src={imagen} style={{width: "30px", height: "30px"}}></img>
                <h4><a key={item.name} href={item.href}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</a></h4>
              </div>
            ))}
          </div>
          <div className="documentDashboard">
            <h3>Documents</h3>
            {documents.map((item) => (
              <div className={"secondDashboard"}>
                <img src={imagen} style={{width: "30px", height: "30px"}}></img>
                <h4><a key={item.name} href={item.href}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</a></h4>
              </div>
            ))}
          </div>
        </div>
        <div className="panelDashboard">
          <div className="headerDashboard">
            <h1>Welcome, {"admin"}</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
