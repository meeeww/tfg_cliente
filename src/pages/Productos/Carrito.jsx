import Axios from 'axios'
import { useEffect, useState } from 'react'

import MainLayout from "../../layout/MainLayout";

import Breadcumb from "../../components/Breadcumb";

import '../../estilos/estilos.css'


function Carrito() {
  const [numero, setNumero] = useState(0)
  const [carrito, setCarrito] = useState([])
  const [producto, setProducto] = useState([])
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("token") != null || localStorage.getItem("token") == "") {
      Axios.get("http://localhost:4000/API/sesiones/buscar?token=" + localStorage.getItem("token")).then(response => {
        if (response.data[0]) {
          // setIdUsuario(response.data[0]["id_usuario"])
          Axios.get("http://localhost:4000/API/pedidos/buscar/usuario?id=" + response.data[0]["id_usuario"]).then(response2 => {
            response2.data.map((pedido) => {
              if (pedido["estado"] == 0) {
                Axios.get("http://localhost:4000/API/infopedidos/buscar/pedido?id=" + pedido["numero_pedido"]).then(infoPedidos => {
                  setCarrito(infoPedidos.data)
                  let listaProductos = []
                  let numeroTemp = 0
                  infoPedidos.data.map((infoPedido) => {
                    Axios.get("http://localhost:4000/API/productos/buscar?id=" + infoPedido["id_producto"]).then(productoGet => {
                      setLoading(false)
                      numeroTemp++
                      setNumero(numeroTemp)
                      listaProductos.push(productoGet.data[0])
                      setProducto(listaProductos);
                    })
                  })
                })
              }
            })
          })
        }
      })
    }
  }, [])

  if (isLoading || producto == null || carrito == null) {
    return (null);
  }

  return (
    <MainLayout>
      <Breadcumb></Breadcumb>
      <div className="infoCarrito">
        <div className="infoPrincipalCarrito">
          <h1>Shopping Cart</h1>
          <h1>{numero} Items</h1>
        </div>
        <div className="infoProductosCarrito">
          {producto.map((productoIndividual, index) => (
            <div key={"productoIndividual" + index} className="infoProductosIndividualCarrito">
              <div className="infoProductoIndividualPrincipalCarrito">
                <img src={productoIndividual["foto_producto"]} alt='Product'></img>
                <div className="textoInfoProductoCarrito">
                  <h3>{productoIndividual["nombre_producto"]}</h3>
                  <h4>{productoIndividual["descripcion_producto"]}</h4>
                </div>
              </div>
              <div className="infoProductoIndividualCantidadCarrito">
                <h3>{carrito[index]["cantidad"]}</h3>
              </div>
              <div className="infoProductoIndividualPrecioCarrito">
                {"$" + parseFloat(productoIndividual["coste_base"]).toFixed(2)}
              </div>
              <div className="infoProductoIndividualTotalCarrito">
                {parseFloat((productoIndividual["coste_base"]) * carrito[index]["cantidad"]).toFixed(2)}
              </div>
            </div>
          ))}
          <div className="infoCheckoutCarrito">
            <h3>Total: $
              {
                5
              }
            </h3>
            <a href="/checkout">Checkout</a>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Carrito
