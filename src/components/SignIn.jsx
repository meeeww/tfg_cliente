import '../estilos/estilos.css'
import logo from '../assets/Logo.png'
import MainLayout from '../layout/MainLayout'


const FormInput = () => {
    return (
        <MainLayout>
            <div className="SignInContainer">
                <div className="SignInCabecera">
                    <img src={logo} alt="" />
                </div>
                <div className="SignInMedio">
                    <p>Sign In</p>
                    <p>Sign Up</p>
                </div>
                <div className="SignInForm">
                    <form action="">
                        <div>
                            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                        </div>
                        <div>
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                        </div>
                        <div>
                            <label className="SignInText">
                                <input type="checkbox" id="cbox1" value="Signed" />Stay signed in
                            </label>
                        </div>
                        <div className="SignInSign">
                            <button>Sign in</button>
                        </div>
                        <div className="SignInText">
                            <p>Forgot your password</p>
                        </div>
                    </form>
                </div>
            </div>
        </MainLayout>
    )
}

export default FormInput;