import { useState } from "react";
import Axios from "axios";
import "./Category.css";

function Modal(categoria) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const eliminarCategoria = (id) => {
    let baseURL = "http://localhost:4000/API/categorias/eliminar";
    let dataPayload = { id_categoria: id };

    console.log(dataPayload)

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
            <h2>Delete {categoria.categoria.nombre_categoria}</h2>
            <p>Are you sure you want to delete {categoria.categoria.nombre_categoria}?</p>
            <a onClick={() => {

              eliminarCategoria(categoria.categoria.id_categoria)
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