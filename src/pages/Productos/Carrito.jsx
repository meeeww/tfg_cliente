import Axios from 'axios'
import { useEffect, useState } from 'react'

import MainLayout from "../../layout/MainLayout";

import Breadcumb from "../../components/Breadcumb";
import CarritoInformacion from "../../components/Productos/Carrito";

import '../../estilos/estilos.css'


function Carrito() {

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

  return (
    <MainLayout>
      <Breadcumb></Breadcumb>
      <CarritoInformacion data = {usuario} />
    </MainLayout>
  )
}

export default Carrito
