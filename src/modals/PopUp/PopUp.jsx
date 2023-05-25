import { useEffect } from 'react'
import "./PopUp.css";

function PopUp(tipo) {

  function getTipo() {
    switch (tipo.tipo.tipoAlerta) {
      case 0: // azul, info rgba(0, 0, 255, 0.3)
        document.querySelector(".containerPopUp").style.backgroundColor = "rgba(0, 120, 255, 1)"
        document.querySelector(".textoPopUp").innerHTML = tipo.tipo.mensajeAlerta
        document.querySelector("#iconoPopUp").className = "fa-solid fa-circle-info"
        break;
      case 1: //verde, hecho rgba(0, 255, 255, 0.1)
        document.querySelector(".containerPopUp").style.backgroundColor = "rgba(0, 190, 0, 1)"
        document.querySelector(".textoPopUp").innerHTML = tipo.tipo.mensajeAlerta
        document.querySelector("#iconoPopUp").className = "fa-solid fa-circle-check"
        break;
      case 2: //amarillo, warning rgba(255, 255, 0, 0.1)
        document.querySelector(".containerPopUp").style.backgroundColor = "rgba(190, 190, 0, 1)"
        document.querySelector(".textoPopUp").innerHTML = tipo.tipo.mensajeAlerta
        document.querySelector("#iconoPopUp").className = "fa-solid fa-circle-question"
        break;
      case 3: //rojo, errror rgba(255, 0, 255, 0.1)
        document.querySelector(".containerPopUp").style.backgroundColor = "rgba(220, 0, 0, 1)"
        document.querySelector(".textoPopUp").innerHTML = tipo.tipo.mensajeAlerta
        document.querySelector("#iconoPopUp").className = "fa-solid fa-circle-exclamation"
        break;
    }
  }

  useEffect(() => {
    getTipo()
  })




  return (
    <>
      <div className="containerPopUp">
        <div className="infoPopUp">
          <div className="iconoPopUp">
            <i id='iconoPopUp'></i>
          </div>
          <div className="textoPopUp">
            Text
          </div>
        </div>
      </div>
    </>
  );
}

export default PopUp