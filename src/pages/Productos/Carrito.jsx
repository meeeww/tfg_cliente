import Axios from 'axios'
import { useEffect, useState } from 'react'

import MainLayout from "../../layout/MainLayout";

import Breadcumb from "../../components/Breadcumb";

import '../../estilos/estilos.css'


function Carrito() {
  const [numero, setNumero] = useState(0)
  const [carrito, setCarrito] = useState([])
  const [producto, setProducto] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [pedido, setPedido] = useState()

  const [precioTotal, setPrecioTotal] = useState(0);

  function eliminar(id) {
    let dataPayload = { id_producto: id, numero_pedido: carrito[0]["numero_pedido"] };

    let config = {
      timeout: 10000,
      headers: { 'Content-Type': 'application/json' }
    };

    Axios.delete("http://localhost:4000/API/infopedidos/eliminar", { data: dataPayload }, config).then(() => {
      Axios.get("http://localhost:4000/API/productos/buscar?id=" + id).then((productoIndividual) => {
        let precioActualizado = pedido["preciototal"] - (productoIndividual.data[0]["coste_base"] * carrito[0]["cantidad"])
        Axios.put("http://localhost:4000/API/pedidos/modificar/precio", { "numero_pedido": carrito[0]["numero_pedido"], "preciototal": precioActualizado })
      })
      return {
        statusCode: 200,
        body: JSON.stringify({ title: "this was a success" }),
      };
    })
    location.reload()
  }

  useEffect(() => {
    if (localStorage.getItem("token") != null || localStorage.getItem("token") == "") {
      Axios.get("http://localhost:4000/API/sesiones/buscar?token=" + localStorage.getItem("token")).then(response => {
        if (response.data[0]) {
          // setIdUsuario(response.data[0]["id_usuario"])
          Axios.get("http://localhost:4000/API/pedidos/buscar/usuario?id=" + response.data[0]["id_usuario"]).then(response2 => {
            response2.data.map((pedido) => {
              if (pedido["estado"] == 0) {
                setPedido(pedido)
                Axios.get("http://localhost:4000/API/infopedidos/buscar/pedido?id=" + pedido["numero_pedido"]).then(infoPedidos => {
                  setCarrito(infoPedidos.data)
                  let listaProductos = []
                  let numeroTemp = 0
                  let precioTemporal = 0
                  infoPedidos.data.map((infoPedido) => {
                    Axios.get("http://localhost:4000/API/productos/buscar?id=" + infoPedido["id_producto"]).then(productoGet => {
                      setLoading(false)
                      numeroTemp++
                      setNumero(numeroTemp)
                      listaProductos.push(productoGet.data[0])
                      setProducto(listaProductos);
                      precioTemporal = pedido["preciototal"]//(precioTemporal + (carritoTemporal[index]["cantidad"] * productoGet.data[0]["coste_base"]))
                      setPrecioTotal(precioTemporal)
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
    return (
      <MainLayout>
        <Breadcumb></Breadcumb>
        <div className="noHayCarrito">
          <h1>You Have not Ordered Anything!</h1>
        </div>
      </MainLayout>
    );
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
                <a onClick={() => eliminar(carrito[index]["id_producto"])}><i className="fa-solid fa-trash"></i></a>
              </div>
              <div className="infoProductoIndividualPrecioCarrito">
                {"$" + parseFloat(productoIndividual["coste_base"]).toFixed(2)}
              </div>
              <div className="infoProductoIndividualTotalCarrito">
                {"$" + parseFloat((productoIndividual["coste_base"]) * carrito[index]["cantidad"]).toFixed(2)}
              </div>
            </div>
          ))}
          <div className="infoCheckoutCarrito">
            <h3>Total: ${parseFloat(precioTotal).toFixed(2)}
            </h3>
            <a href="/checkout">Checkout</a>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Carrito
