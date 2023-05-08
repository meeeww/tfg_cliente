import Axios from 'axios'
import { useEffect } from 'react'
import '../estilos/estilos.css'
import Panel from '../components/Dashboard/Panel'
import circulo from '../assets/circulo.png'

function Dashboard() {

  let baseURL = "http://localhost:4000/API/caracteristicas/consultar";

  let config = {
    timeout: 10000,
  };

  useEffect(() => {
    Axios.get(baseURL, config)
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res.data);
        //localStorage.setItem("token", res.data)
        //location.replace("http://localhost:5173/login")
        return {
          statusCode: 200,
          body: JSON.stringify({ title: "this was a success" }),
        };
      })
  })




  //var data = { /*nombreInicio: nombreInicio, contrasenaInicio: contrasenaInicio, agente: agente, date: date*/ };



  return (
    <>
      <div className="dashboardBody">
        <Panel></Panel>
        <div className="panelDashboard">
          <div className="headerDashboard">
            <div className="welcomeMessageDashboard">
              <h1 style={{ "padding-right": "1rem" }}>Welcome,</h1>
              <h1>{"Admin"}</h1>
            </div>
            <div className="sessionDashboard">
              <a href="#">Settings</a>
              <a href="#">Logout</a>
              <img src='#'></img>
            </div>
          </div>
          <div className="panelInfoDashboard">
            <div className="businessOverviewDashboard">
              <h2>Business Overview</h2>
              <div className="productsOverviewDashboard">
                <div className="bestSellingProductDashboard">
                  <h3>Best Selling Product</h3>
                  <h2>{"Express Coffe"}</h2>
                  <div className="toppingsOverviewDashboard">
                    <h4>{"Big Coffe"}</h4>
                    <h4>{"With Sugar"}</h4>
                  </div>
                  <div className="timingsProductDashboard">
                    <div className="monthlyProductDashboard">
                      <h3>Monthly</h3>
                      <h2>{"50 Sales"}</h2>
                      <h3>{"+ 500 $"}</h3>
                    </div>
                    <div className="allTimeProductDashboard">
                      <h3>All-Time</h3>
                      <h2>{"500 Sales"}</h2>
                      <h3>{"+ 5000 $"}</h3>
                    </div>
                  </div>
                </div>
                <div className="bestSellingProductDashboard">
                  <h3>Best Selling Product</h3>
                  <h2>{"Express Coffe"}</h2>
                  <div className="toppingsOverviewDashboard">
                    <h4>{"Big Coffe"}</h4>
                    <h4>{"With Sugar"}</h4>
                  </div>
                  <div className="timingsProductDashboard">
                    <div className="monthlyProductDashboard">
                      <h3>Monthly</h3>
                      <h2>{"50 Sales"}</h2>
                      <h3>{"+ 500 $"}</h3>
                    </div>
                    <div className="allTimeProductDashboard">
                      <h3>All-Time</h3>
                      <h2>{"500 Sales"}</h2>
                      <h3>{"+ 5000 $"}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="financialOverviewDashboard">
              <h2>Financial</h2>
              <div className="financialProductDashboard">
                <img src={circulo} style={{ width: "50px", height: "50px" }}></img>
                <div className="infoFinancialProductDashboard">
                  <h2>Settings</h2>
                  <h3>20 Units</h3>
                </div>
                <h2>$ 5,857.25</h2>
              </div>
              <div className="financialProductDashboard">
                <img src={circulo} style={{ width: "50px", height: "50px" }}></img>
                <div className="infoFinancialProductDashboard">
                  <h2>Settings</h2>
                  <h3>20 Units</h3>
                </div>
                <h2>$ 5,857.25</h2>
              </div>
              <div className="financialProductDashboard">
                <img src={circulo} style={{ width: "50px", height: "50px" }}></img>
                <div className="infoFinancialProductDashboard">
                  <h2>Settings</h2>
                  <h3>20 Units</h3>
                </div>
                <h2>$ 5,857.25</h2>
              </div>
              <div className="financialProductDashboard">
                <img src={circulo} style={{ width: "50px", height: "50px" }}></img>
                <div className="infoFinancialProductDashboard">
                  <h2>Settings</h2>
                  <h3>20 Units</h3>
                </div>
                <h2>$ 5,857.25</h2>
              </div>
              <h2>See Full List</h2>
            </div>
            <div className="reportsOverviewDashboard">
              <h2>Reports</h2>
              <div className="reportInfoDashboard">
                <div className="fechaInfoDashBoard">
                  <h2>MON</h2>
                  <h3>28</h3>
                </div>
                <div className="informacionInfoDashboard">
                  <h3>Report - Finances</h3>
                  <h4>La Tarrina - Annual Report</h4>
                </div>
                <h4>Zas</h4>
                <img src={circulo} style={{ width: "30px", height: "30px" }}></img>
              </div>
              <div className="reportInfoDashboard">
                <div className="fechaInfoDashBoard">
                  <h2>MON</h2>
                  <h3>28</h3>
                </div>
                <div className="informacionInfoDashboard">
                  <h3>Report - Finances</h3>
                  <h4>La Tarrina - Annual Report</h4>
                </div>
                <h4>Zas</h4>
                <img src={circulo} style={{ width: "30px", height: "30px" }}></img>
              </div>
            </div>
            <div className="summaryOverviewDashboard">
              <h2>Summary</h2>
              <div className="summaryBoxDashboard">
                <div className="fechaBoxDashboard">
                  <h2>March</h2>
                  <h2>2023</h2>
                </div>
                <h3>Text</h3>
                <div className="preciosBoxDashboard">
                  <div className="precioArribaBoxDashboard">
                    <img src={circulo} style={{ width: "30px", height: "30px" }}></img>
                    <h2>$232,58</h2>
                  </div>
                  <div className="precioArribaBoxDashboard">
                    <img src={circulo} style={{ width: "30px", height: "30px" }}></img>
                    <h2>$232,58</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
