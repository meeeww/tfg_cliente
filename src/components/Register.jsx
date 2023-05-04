import '../estilos/estilos.css'
import logo from '../assets/Logo.png'
import MainLayout from '../layout/MainLayout'

const Register = () => {
    return (
        <MainLayout>
            <div className="SingInContainer">
                <div className="SingInCabecera">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="SingInMedio">
                    <a href="/signin">Sign In</a>
                    <a href="/signup">Sign Up</a>
                </div>
                <div className="SingInForm">
                    <form action="">
                        <div>
                            <input type="text" id="fname" name="firstname" placeholder="Username" />
                        </div>
                        <div>
                            <input type="text" id="lname" name="email" placeholder="Email" />
                        </div>
                        <div>
                            <input type="password" id="lname" name="password" placeholder="Password" />
                        </div>
                        <div className="staySignedIn">
                            <label>
                                <input type="checkbox" id="cbox1" value="first_checkbox" /><p>I accept the privacy terms.</p>
                            </label>
                        </div>
                        <div className="SingInSing">
                            <button>Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </MainLayout>
    )

}
export default Register