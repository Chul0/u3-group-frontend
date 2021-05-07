import SingupLoginForm from '../components/SignupLoginForm'

const Signup = (props) => {
    return(
        <div className="outer">
        <div className="signUpContainer">
            <h1 className="header">Tekky Toi's</h1>
            <SingupLoginForm
            className="signupInput"
            buttonText="SIGN UP"
            route="/users"
            log="Sign Up Successful"
            title="sign Up"
            />

        </div>
        </div>
    )
}



export default Signup
