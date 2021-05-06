import SignupLoginForm from '../components/SignupLoginForm'


const Login = (props) => {
    return(
        <SignupLoginForm 
        buttonText="LOGIN"
        route="/users/login"
        log="Login Successful"
        title="LOGIN"
        />
    )
}



export default Login