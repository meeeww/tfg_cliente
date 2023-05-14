import Axios from 'axios'
import { useEffect, useState } from 'react'

import MainLayout from "../../layout/MainLayout";

import Breadcumb from "../../components/Breadcumb";
import ProductoIndividual from "../../components/Productos/Producto";

import '../../estilos/estilos.css'

function Producto() {
  const queryParameters = new URLSearchParams(window.location.search)
  const productId = queryParameters.get("id")

  const [producto, setProducto] = useState([])
  const [categoria, setCategoria] = useState([])
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("token") != null || localStorage.getItem("token") == "") {
      Axios.get("http://localhost:4000/API/productos/buscar?id=" + productId).then(response => {
        if (response.data[0]) {
          setProducto(response.data[0])
          Axios.get("http://localhost:4000/API/categorias/buscar?id=" + response.data[0].id_categoria).then(response => {
            setCategoria(response.data[0])
            setLoading(false)
          })
          
        }
      })
    }
  }, [])

  if (isLoading) {
    return (null);
  }

  return (
    <MainLayout>
      <Breadcumb></Breadcumb>
      <ProductoIndividual data={{producto, categoria}} />
    </MainLayout>
  )
}

export default Producto
