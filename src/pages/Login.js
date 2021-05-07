import SignupLoginForm from '../components/SignupLoginForm'


const Login = (props) => {
    return(
        <div className="outer">
        <div className="loginContainer">
            <h1 className="header">Tekky Toi's</h1>

        <SignupLoginForm className="loginInput"
        buttonText="LOGIN"
        route="/users/login"
        log="Login Successful"
        title="login"
        />
        </div>
        </div>
    )
}



export default Login
