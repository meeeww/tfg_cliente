function llamarPopUp() {
    if (!document.querySelector(".activePopUp")) {
        document.querySelector(".containerPopUp").classList.toggle("activePopUp")
        setTimeout(() => {
            document.querySelector(".containerPopUp").classList.toggle("activePopUp")
        }, "3000");
    }

}

export default llamarPopUp