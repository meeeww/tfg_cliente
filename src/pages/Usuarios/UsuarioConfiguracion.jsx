import Axios from 'axios'
import { useEffect } from 'react'

import MainLayout from "../../layout/MainLayout";
import Panel from '../../components/Usuarios/Panel';

import Configuracion from '../../components/Usuarios/Configuracion';

import '../estilos/estilos.css'

function Usuario() {

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
    <MainLayout>
      <Panel />
    </MainLayout>
  )
}

export default Usuario