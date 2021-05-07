import axios from 'axios'
import { useState, useContext } from 'react'
import { UserContext } from '../contexts/UserContext'


const SignupLoginForm = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [user, setUser] = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_BACKEND_URL}${props.route}`, {
            email,
            password
        })
        .then((response) => {
            // console.log(response);
            console.log(`${props.log}`);
            localStorage.setItem('userId', response.data.userId)
            window.location.reload()
        })
    }


    return (
        <div className="SingupLoginForm-container">
        <h1>{props.title}</h1>
        <form onSubmit={handleSubmit}>

            <label htmlFor="new-email"><h2>email</h2></label>
            <input value={email} onChange={(e)=> {setEmail(e.target.value) }} />

            <label htmlFor="new-password"><h2>password</h2></label>
            <input type="password" value={password} onChange={(e)=> {setPassword(e.target.value) }} />

            <button className="button" id="submit-button" type="submit" value={props.buttonText}><span>submit</span></button>

        </form>
        </div>
    )
}



export default SignupLoginForm
