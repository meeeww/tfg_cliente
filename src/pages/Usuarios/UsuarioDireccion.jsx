import Axios from 'axios'
import { useEffect, useState } from 'react'

import MainLayout from "../../layout/MainLayout";
import Panel from '../../components/Usuarios/Panel';

import Direccion from '../../components/Usuarios/Direccion';

import '../../estilos/estilos.css'

function Usuario() {

  const [usuario, setUsuario] = useState([])
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("token") != null || localStorage.getItem("token") == "") {
      Axios.get("http://localhost:4000/API/sesiones/buscar?token=" + localStorage.getItem("token")).then(response => {
        
        if (response.data[0]) {
          
          Axios.get("http://localhost:4000/API/usuarios/buscar?id=" + response.data[0]["id_usuario"]).then(response2 => {
            setUsuario(response2.data[0])
            setLoading(false)
          })
        }

      })
      // setUsuario(checkSession())
      // setLoading(false)
    }
  }, [])
  
  if (isLoading) {
    return (null);
  }




  //var data = { /*nombreInicio: nombreInicio, contrasenaInicio: contrasenaInicio, agente: agente, date: date*/ };



  return (
    <MainLayout>
      <div className="mainBodyUsuario">
        <Panel />
        <Direccion data = {usuario} />
      </div>
    </MainLayout>
  )
}

export default Usuario