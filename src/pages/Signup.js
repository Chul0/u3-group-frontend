import SingupLoginForm from '../components/SignupLoginForm'

const Signup = (props) => {
    return(
        <SingupLoginForm 
        buttonText="SIGN UP"
        route="/users"   
        log="Sign Up Successful"
        title="SIGN UP"
        />
    )
}



export default Signup