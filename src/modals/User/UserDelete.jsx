import { useState } from "react";
import Axios from "axios";
import "./User.css";

function Modal(usuario) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const eliminarProducto = (id) => {
    let baseURL = "http://localhost:4000/API/usuarios/eliminar";
    let dataPayload = { id_usuario: id };

    let config = {
      timeout: 10000,
      headers: { 'Content-Type': 'application/json' }
    };


    Axios.delete(baseURL, {data: dataPayload}, config)
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
        <i className="fa-solid fa-trash"></i>
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Delete {usuario.usuario.nombre_usuario}</h2>
            <p>Are you sure you want to delete {usuario.usuario.nombre_usuario}?</p>
            <a onClick={() => {

              eliminarProducto(usuario.usuario.id_usuario)
            }}>
              Delete <i className="fa-solid fa-ban"></i>
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