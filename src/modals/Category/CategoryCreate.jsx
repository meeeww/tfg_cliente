import { useState } from "react";
import Axios from "axios";
import "./Category.css";

function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const crearCategoria = (nombre) => {
    let baseURL = "http://localhost:4000/API/categorias/crear";
    let data = { nombre_categoria: nombre };

    console.log(data)

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
            <h2>Create Category</h2>
            <div className="crearOpcionModal">
              <h4>Name</h4>
              <input type={"text"} id="inputNombreProduct" autoComplete="off"></input>
            </div>
            <a style={{ float: "right", marginTop: "1rem" }} onClick={() => {
              let nombre = document.getElementById("inputNombreProduct")
              if (nombre.value != "") {
                crearCategoria(nombre.value)
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