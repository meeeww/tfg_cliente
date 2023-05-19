import Axios from 'axios'
import { useEffect, useState } from 'react'

import MainLayout from "../../layout/MainLayout";
import Panel from '../../components/Usuarios/Panel';

import Recibos from '../../components/Usuarios/Recibos';

import '../../estilos/estilos.css'

function Usuario() {

  const [recibo, setRecibo] = useState([])
  const [usuario, setUsuario] = useState("")
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("token") != null || localStorage.getItem("token") == "") {
      Axios.get("http://localhost:4000/API/sesiones/buscar?token=" + localStorage.getItem("token")).then(response => {
        if (response.data[0]) {
          Axios.get("http://localhost:4000/API/usuarios/buscar?id=" + response.data[0]["id_usuario"]).then(response2 => {
            setUsuario(response2.data[0]["nombre_usuario"])
          })
          let recibos = []
          Axios.get("http://localhost:4000/API/pedidos/buscar/usuario?id=" + response.data[0]["id_usuario"]).then(response2 => {
            response2.data.forEach((respuesta) => {
              if (respuesta["estado"] == 2) {
                recibos.push(respuesta)
                setRecibo(recibos)
              }
              setLoading(false)
            })
          })
        }

      })
      // setUsuario(checkSession())
      // setLoading(false)
    }
  }, [])

  if (isLoading) {
    return (
      <MainLayout>
        <div className="mainBodyUsuario">
          <Panel />
        </div>
      </MainLayout>
    );
  }




  //var data = { /*nombreInicio: nombreInicio, contrasenaInicio: contrasenaInicio, agente: agente, date: date*/ };



  return (
    <MainLayout>
      <div className="mainBodyUsuario">
        <Panel />
        <Recibos data={{ recibo, usuario }} />
      </div>
    </MainLayout>
  )
}

export default Usuario