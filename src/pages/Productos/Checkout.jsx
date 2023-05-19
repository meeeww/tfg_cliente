import Axios from 'axios'
import { useEffect, useState } from 'react'

import MainLayout from "../../layout/MainLayout";
import Panel from '../../components/Usuarios/Panel';

import CheckoutComponent from '../../components/Productos/Checkout';

import '../../estilos/estilos.css'

function Checkout() {

  const [recibo, setRecibo] = useState([])
  const [usuario, setUsuario] = useState([])
  const [productos, setProductos] = useState([])
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("token") != null || localStorage.getItem("token") == "") {
      Axios.get("http://localhost:4000/API/sesiones/buscar?token=" + localStorage.getItem("token")).then(response => {
        if (response.data[0]) {
          Axios.get("http://localhost:4000/API/usuarios/buscar?id=" + response.data[0]["id_usuario"]).then(response2 => {
            setUsuario([response2.data[0]["id_usuario"], response2.data[0]["nombre_usuario"], response2.data[0]["numero_pedidos"]])
          })
          let recibos = []
          Axios.get("http://localhost:4000/API/pedidos/buscar/usuario?id=" + response.data[0]["id_usuario"]).then(response2 => {
            response2.data.forEach((respuesta) => {
              if (respuesta["estado"] == 0) {
                Axios.get("http://localhost:4000/API/infopedidos/buscar/pedido?id=" + respuesta["numero_pedido"]).then(responseFinal => {
                  recibos.push(respuesta)
                  setRecibo(recibos)
                  setProductos(responseFinal)
                })
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
    return (null);
  }




  //var data = { /*nombreInicio: nombreInicio, contrasenaInicio: contrasenaInicio, agente: agente, date: date*/ };



  return (
    <MainLayout>
      <div className="mainBodyUsuario">
        <Panel />
        <CheckoutComponent data={{ recibo, usuario, productos }} />
      </div>
    </MainLayout>
  )
}

export default Checkout