import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { UserContext } from '../contexts/UserContext'
import {Redirect} from 'react-router-dom'
import myCart from '../css/myCart.css'

const MyCart = (props) => {
    const [user, setUser] =useContext(UserContext)
    const [savedProducts, setSavedProducts] = useState([])
    const [shouldReload, setShouldReload ] = useState(true)
    const [address, setAddress] = useState('')
    const [creditCardNum, setCreditCardNum] = useState('')
    const [redirectToOrder, setRedirectToOrder] = useState(false)

    const fetchSavedProducts= async () =>{
        try {
            let response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/mycart`,{
                headers:{
                    Authorization: localStorage.getItem('userId')
                }
            })
            // console.log(response);
            setSavedProducts(response.data)
            
        } catch (error) {
            console.log({error});
        }
    }
    useEffect(fetchSavedProducts,[])


    const removeFromCart = async (productId) => {
        try {
            let response = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/users/mycart/${productId}`, {
                headers: {
                    Authorization: localStorage.getItem('userId')
                }
            })
            setShouldReload(!shouldReload)
        } catch (error) {
            console.log({error});
        }
    }

    useEffect(fetchSavedProducts,[shouldReload])

    
   const calculator = () => {
    let c = 0
    for(let i=0; i < savedProducts.length; i++){
        let newString = savedProducts[i].price.replace('$', '')
        let noDollar = parseFloat(newString)
        // console.log(noDollar);
        c += noDollar
    }
    return c
   }

   const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/order`, {
        address,
        creditCardNum
    },{
        headers: {
            Authorization: localStorage.getItem('userId')
        }
    })
    .then((response) => {
        // console.log(response);
        setShouldReload(!shouldReload)
        setRedirectToOrder(true)
    })
}


    return(
        <div className="container">
            <h1 className="header">My Cart</h1>

            {
                savedProducts.length > 0 ?
                savedProducts.map((product, i)=>{
                    // console.log(image.id);
                    return <div key={i}>
                        <p>{product.name}</p>
                        <img className="cartImage" src={product.image} />
                        <p>{product.price}</p>
                        <button onClick={()=> removeFromCart(product.id)} >Remove from my cart</button>
                        </div>

                })
                :
                <p>
                    Your cart is empty
                </p>
            }
            <p>Total price:${calculator()}</p>

            <div className="checkoutForm-container">
                <form onSubmit={handleSubmit}>
            
                    <label htmlFor="new-address"><h2>ADDRESS</h2></label>
                    <input value={address} onChange={(e)=> {setAddress(e.target.value) }} />
            
            
                    <label htmlFor="new-cardNum"><h2>CARD NUMBER</h2></label>
                    <input value={creditCardNum} onChange={(e)=> {setCreditCardNum(e.target.value) }} />

                    <input id="submit-button" type="submit" value="Check out" />     
                </form>
            </div>  
            {
                redirectToOrder &&
            <Redirect to="/myorder"></Redirect>
            }
        </div>
    )
}



export default MyCart
