import { useState } from "react";
import Axios from "axios";

import llamarPopUs from "../../scripts/llamarPopUp"
import PopUp from "../../modals/PopUp/PopUp"

import "./Category.css";

function Modal(categoria) {
  const [modal, setModal] = useState(false);

  const [tipoAlerta, setTipoAlerta] = useState(0)
  const [mensajeAlerta, setMensajeAlerta] = useState("")

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const cambiarNombre = (id, valorOpcion) => {
    let baseURL = "http://localhost:4000/API/categorias/modificar";
    let data = { id_categoria: id, nombre_categoria: valorOpcion };

    let config = {
      timeout: 10000,
      headers: { 'Content-Type': 'application/json' }
    };

    Axios.put(baseURL, data, config)
    setMensajeAlerta("Successfully edited")
    setTipoAlerta(1)
    llamarPopUs()
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
      <PopUp tipo={{ tipoAlerta, mensajeAlerta }} />
      <button onClick={toggleModal} className="btn-modal">
        <i className="fa-solid fa-wrench"></i>
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">

            <h2>Edit {categoria.categoria.nombre_categoria}</h2>
            <div className="cambiarOpcionModal">
              <h4>Name</h4>
              <input type={"text"} id="inputNombreProduct" autoComplete="off"></input>
              <a onClick={() => cambiarNombre(categoria.categoria.id_categoria, document.getElementById("inputNombreProduct").value)}>
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