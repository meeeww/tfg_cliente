import  '../estilos/estilos.css'
import React from 'react'
import logo from '../assets/Logo.png'


const FormInput = () => {
    return (
        <div className="SingInContainer">
            <div className="SingInCabecera">
                <img src={logo} alt="" />
            </div>
            <div className="SingInMedio">
                <p>Sing In</p>
                <p>Sing Up</p>
            </div>
            <div className="SingInForm">
                <form action="">
                    <div>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                    </div>
                    <div>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" id="cbox1" value="first_checkbox"/>Stay signed in
                        </label>
                    </div>
                    <div className="SingInSing">
                       <button>Sing in</button>
                    </div>
                    <div>
                        <p>Forgot your password</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormInput;