import { useState } from "react";
import Axios from "axios";
import "./Product.css";

function Modal(producto) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const cambiarNombre = (id, opcion, valorOpcion) => {
    console.log(id + " " + opcion + " " + valorOpcion)
    let baseURL, data
    switch (opcion) {
      case "nombre":
        baseURL = "http://localhost:4000/API/productos/modificar/nombre";
        data = { id_producto: id, nombre_producto: valorOpcion };
        break;
      case "descripcion":
        baseURL = "http://localhost:4000/API/productos/modificar/descripcion";
        data = { id_producto: id, descripcion_producto: valorOpcion };
        break;
      case "foto":
        baseURL = "http://localhost:4000/API/productos/modificar/foto";
        data = { id_producto: id, foto_producto: valorOpcion };
        break;
      case "coste":
        baseURL = "http://localhost:4000/API/productos/modificar/coste";
        data = { id_producto: id, coste_base: valorOpcion };
        break;
      case "stock":
        baseURL = "http://localhost:4000/API/productos/modificar/stock";
        data = { id_producto: id, stock: valorOpcion };
        break;
      case "categoria":
        baseURL = "http://localhost:4000/API/productos/modificar/categoria";
        data = { id_producto: id, id_categoria: valorOpcion };
        break;
    }

    let config = {
      timeout: 10000,
      headers: { 'Content-Type': 'application/json' }
    };


    Axios.put(baseURL, data, config)
      .then(() => {
        return {
          statusCode: 200,
          body: JSON.stringify({ title: "this was a success" }),
        };
      })


    //window.location.reload();
  }



  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        <i className="fa-solid fa-wrench"></i>
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">

            <h2>Edit {producto.producto.nombre_producto}</h2>
            <div className="cambiarOpcionModal">
              <h4>Name</h4>
              <input type={"text"} id="inputNombreProduct" autoComplete="off"></input>
              <a onClick={(event) => cambiarNombre(producto.producto.id_producto, "nombre", document.getElementById("inputNombreProduct").value)}>
                <i className="fa-solid fa-check"></i>
              </a>
            </div>
            <div className="cambiarOpcionModal">
              <h4>Description</h4>
              <input type={"text"} id="inputDescripcionProduct" autoComplete="off"></input>
              <a onClick={(event) => cambiarNombre(producto.producto.id_producto, "descripcion", document.getElementById("inputDescripcionProduct").value)}>
                <i className="fa-solid fa-check"></i>
              </a>
            </div>
            <div className="cambiarOpcionModal">
              <h4>Image</h4>
              <input type={"text"} id="inputFotoProduct" autoComplete="off"></input>
              <a onClick={(event) => cambiarNombre(producto.producto.id_producto, "foto", document.getElementById("inputFotoProduct").value)}>
                <i className="fa-solid fa-check"></i>
              </a>
            </div>
            <div className="cambiarOpcionModal">
              <h4>Price</h4>
              <input type={"text"} id="inputCosteProduct" autoComplete="off"></input>
              <a onClick={(event) => cambiarNombre(producto.producto.id_producto, "coste", document.getElementById("inputCosteProduct").value)}>
                <i className="fa-solid fa-check"></i>
              </a>
            </div>
            <div className="cambiarOpcionModal">
              <h4>Stock</h4>
              <input type={"text"} id="inputStockProduct" autoComplete="off"></input>
              <a onClick={(event) => cambiarNombre(producto.producto.id_producto, "stock", document.getElementById("inputStockProduct").value)}>
                <i className="fa-solid fa-check"></i>
              </a>
            </div>
            <div className="cambiarOpcionModal">
              <h4>Category</h4>
              <input type={"text"} id="inputCategoriaProduct" autoComplete="off"></input>
              <a onClick={(event) => cambiarNombre(producto.producto.id_producto, "categoria", document.getElementById("inputCategoriaProduct").value)}>
                <i className="fa-solid fa-check"></i>
              </a>
            </div>
            <button className="close-modal" >
              <i className="fa-solid fa-circle-xmark" onClick={toggleModal}></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal