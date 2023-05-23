import { useState, useEffect } from "react";
import Axios from "axios";

import "./User.css";

function Modal(usuario) {
  const [modal, setModal] = useState(false);
  const [usuarios, setUsuarios] = useState();

  let baseURL = "http://localhost:4000/API/usuarios/consultar";

  let config = {
    timeout: 10000,
  };

  useEffect(() => {
    Axios.get(baseURL, config)
      .then((res) => {
        //console.log("RESPONSE RECEIVED: ", res.data);
        setUsuarios(res.data)       
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

  const cambiarNombre = (id, opcion, valorOpcion) => {
    console.log(usuarios)
    let data
    switch (opcion) {
      case "nombre":
        baseURL = "http://localhost:4000/API/usuarios/modificar/nombre";
        data = { id_usuario: id, nombre_usuario: valorOpcion };
        break;
      case "apellido":
        baseURL = "http://localhost:4000/API/usuarios/modificar/apellido";
        data = { id_usuario: id, apellido_usuario: valorOpcion };
        break;
      case "correo":
        baseURL = "http://localhost:4000/API/usuarios/modificar/correo";
        data = { id_usuario: id, correo_usuario: valorOpcion };
        break;
      case "permisos":
        baseURL = "http://localhost:4000/API/usuarios/modificar/permisos";
        data = { id_usuario: id, permisos: valorOpcion };
        break;
    }

    config = {
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

            <h2>Edit {usuario.usuario.nombre_usuario}</h2>
            <div className="cambiarOpcionModal">
              <h4>Name</h4>
              <input type={"text"} id="inputNombreProduct" autoComplete="off"></input>
              <a onClick={() => cambiarNombre(usuario.usuario.id_usuario, "nombre", document.getElementById("inputNombreProduct").value)}>
                <i className="fa-solid fa-check"></i>
              </a>
            </div>
            <div className="cambiarOpcionModal">
              <h4>Last Name</h4>
              <input type={"text"} id="inputApellidoProduct" autoComplete="off"></input>
              <a onClick={() => cambiarNombre(usuario.usuario.id_usuario, "apellido", document.getElementById("inputApellidoProduct").value)}>
                <i className="fa-solid fa-check"></i>
              </a>
            </div>
            <div className="cambiarOpcionModal">
              <h4>Email</h4>
              <input type={"text"} id="inputCorreoProduct" autoComplete="off"></input>
              <a onClick={() => cambiarNombre(usuario.usuario.id_usuario, "correo", document.getElementById("inputCorreoProduct").value)}>
                <i className="fa-solid fa-check"></i>
              </a>
            </div>
            <div className="cambiarOpcionModal">
              <h4>Auth Level</h4>
              <input type={"text"} id="inputAuthProduct" autoComplete="off"></input>
              <a onClick={() => cambiarNombre(usuario.usuario.id_usuario, "permisos", document.getElementById("inputAuthProduct").value)}>
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