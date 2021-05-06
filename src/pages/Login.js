import SignupLoginForm from '../components/SignupLoginForm'


const Login = (props) => {
    return(
        <div className="container">
            <h1 className="header">Login</h1>

        <SignupLoginForm
        buttonText="LOGIN"
        route="/users/login"
        log="Login Successful"
        title="LOGIN"
        />
        </div>
    )
}



export default Login
