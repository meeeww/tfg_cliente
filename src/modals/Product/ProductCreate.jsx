import { useState, useEffect } from "react";
import Axios from "axios";
import "./Product.css";

function Modal() {
  const [modal, setModal] = useState(false);
  const [categorias, setCategorias] = useState();

  let baseURL = "http://localhost:4000/API/categorias/consultar";

  let config = {
    timeout: 10000,
  };

  useEffect(() => {
    Axios.get(baseURL, config)
      .then((res) => {
        //console.log("RESPONSE RECEIVED: ", res.data);
        setCategorias(res.data)
        //localStorage.setItem("token", res.data)
        //location.replace("http://localhost:5173/login")
        return {
          statusCode: 200,
          body: JSON.stringify({ title: "this was a success" }),
        };
      })
  }, [])

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const crearProducto = (nombre, descripcion, foto, coste, stock, categoria, caracteristica) => {
    let baseURL = "http://localhost:4000/API/productos/crear";
    let data = { nombre_producto: nombre, descripcion_producto: descripcion, foto_producto: foto, coste_base: coste, stock: stock, id_categoria: categoria, id_caracteristica: caracteristica };

    let config = {
      timeout: 10000,
      headers: { 'Content-Type': 'application/json' }
    };


    Axios.post(baseURL, data, config)
      .then(() => {
        return {
          statusCode: 200,
          body: JSON.stringify({ title: "this was a success" }),
        };
      })

    window.location.reload();
  }



  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        <i className="fa-solid fa-plus"></i>
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Create Product</h2>
            <div className="crearOpcionModal">
              <h4>Name</h4>
              <input type={"text"} id="inputNombreProduct" autoComplete="off"></input>
            </div>
            <div className="crearOpcionModal">
              <h4>Description</h4>
              <input type={"text"} id="inputDescripcionProduct" autoComplete="off"></input>
            </div>
            <div className="crearOpcionModal">
              <h4>Image</h4>
              <input type={"text"} id="inputFotoProduct" autoComplete="off"></input>
            </div>
            <div className="crearOpcionModal">
              <h4>Price</h4>
              <input type={"text"} id="inputCosteProduct" autoComplete="off"></input>
            </div>
            <div className="crearOpcionModal">
              <h4>Stock</h4>
              <input type={"text"} id="inputStockProduct" autoComplete="off"></input>
            </div>
            <div className="crearOpcionModal">
              <h4>Category</h4>
              <select id="listaCategoriasProduct">
                {
                  categorias &&
                  categorias.map((item) => (
                    <option key={"keyCategoria" + item.id_categoria} value={item.id_categoria} id="inputCategoriaProduct">{item.nombre_categoria}</option>
                  ))}
              </select>
            </div>
            <a style={{ float: "right", marginTop: "1rem" }} onClick={(event) => {
              let nombre = document.getElementById("inputNombreProduct")
              let descripcion = document.getElementById("inputDescripcionProduct")
              let foto = document.getElementById("inputFotoProduct")
              let coste = document.getElementById("inputCosteProduct")
              let stock = document.getElementById("inputStockProduct")
              let categoria = document.getElementById("inputCategoriaProduct")
              if (nombre.value != "" && descripcion.value != "" && foto.value != "" && coste.value != "" && stock.value != "" && categoria.value != "") {
                crearProducto(nombre.value, descripcion.value, foto.value, coste.value, stock.value, categoria.value)
              }
            }}>
              Crear <i className="fa-solid fa-check"></i>
            </a>
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