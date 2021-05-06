import SingupLoginForm from '../components/SignupLoginForm'

const Signup = (props) => {
    return(
        <div className="container">
            <h1 className="header">Signup</h1>
            <SingupLoginForm
            buttonText="SIGN UP"
            route="/users"
            log="Sign Up Successful"
            title="SIGN UP"
            />

        </div>
    )
}



export default Signup
