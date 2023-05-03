import '../estilos/estilos.css'
import React from 'react'
import logo from '../assets/Logo.png'
import MainLayout from '../layout/MainLayout'

const Register = () => {
    return (
        <MainLayout>
            <div className="RegisterContainer">
                <div className="RegisterCabecera">
                    <img src={logo} alt="" />
                    <p>Sign up for free to listen.</p>
                </div>
                <div className="RegisterForm">
                    <form action="">
                        <div>
                            <p>What is your Email?</p>
                            <input type="email" id="fname" name="email" placeholder="Put your email" />
                        </div>
                        <div>
                            <p>What do you want us to call you?</p>
                            <input type="text" id="text" name="text" placeholder="Put a profile name." />
                        </div>
                        <div>
                            <p>Create a password</p>
                            <input type="password" id="password" name="password" placeholder="Create a password" />
                        </div>
                        <div>
                            <label className="RegisterPrivacy">
                                <input type="checkbox" id="cbox1" value="privacy" />I accept the privacy terms.
                            </label>
                        </div>
                        <div>
                            <button className="RegisterSend">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </MainLayout>












    )

}
export default Register