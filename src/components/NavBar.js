import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { Link, Router } from 'react-router-dom'


const NavBar = (props) => {
    const [user, setUser] = useContext(UserContext)
    return(
        <nav>
        <Link to="/">HOME</Link>{' | '}

    {user.id ?
    <>
        <Link to="/allproducts">ALL PRODUCTS</Link>{' | '}
        <Link to="/mycart">MY CART</Link>{' | '}
        <Link to="/myorder">MY ORDER</Link>{' | '}
        <Link to="/" 
            onClick={() => {
                localStorage.removeItem('userId')
                setUser('') 
            }}
        >SIGNOUT</Link>
        
        
    </>

    :

    <>    
        <Link to="/signup">SIGNUP</Link>{' | '}
        <Link to="/login">LOGIN</Link>
    </>    
    }
    
    </nav>
    )
}



export default NavBar