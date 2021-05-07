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
    <div className="navbar">
        <Link className="nav" to="/allproducts">ALL PRODUCTS</Link>{' | '}
        <Link className="nav" to="/mycart">MY CART</Link>{' | '}
        <Link className="nav" to="/myorder">MY ORDER</Link>{' | '}
        <Link className="nav" to="/"
            onClick={() => {
                localStorage.removeItem('userId')
                setUser('')
            }}
        >SIGNOUT</Link>

    </div>
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
