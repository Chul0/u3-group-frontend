import SingupLoginForm from '../components/SignupLoginForm'

const Signup = (props) => {
    return(
        <div className="signUpContainer">
            <h1 className="header">Tekky Toi's</h1>
            <SingupLoginForm
            className="signupInput"
            buttonText="SIGN UP"
            route="/users"
            log="Sign Up Successful"
            title="SIGN UP"
            />

        </div>
    )
}



export default Signup
