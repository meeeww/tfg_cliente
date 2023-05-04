import '../estilos/estilos.css'
import logo from '../assets/Logo.png'
import MainLayout from '../layout/MainLayout'


const FormInput = () => {
    return (
        <MainLayout>
            <div className="SingInContainer">
                <div className="SingInCabecera">
                    <img src={logo} alt="" />
                </div>
                <div className="SingInMedio">
                    <a href="/signin">Sign In</a>
                    <a href="/signup">Sign Up</a>
                </div>
                <div className="SingInForm">
                    <form action="">
                        <div>
                            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                        </div>
                        <div>
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                        </div>
                        <div className="staySignedIn">
                            <label>
                                <input type="checkbox" id="cbox1" value="first_checkbox" /><p>Stay Signed In</p>
                            </label>
                        </div>
                        <div className="SingInSing">
                            <button>Sign in</button>
                        </div>
                        <div className="forgotPassword">
                            <p>Forgot your password</p>
                        </div>
                    </form>
                </div>
            </div>
        </MainLayout>
    )
}

export default FormInput;