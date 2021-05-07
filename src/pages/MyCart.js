import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { UserContext } from '../contexts/UserContext'

const MyCart = (props) => {
    const [user, setUser] =useContext(UserContext)
    const [savedProducts, setSavedProducts] = useState([])
    const [shouldReload, setShouldReload ] = useState(true)

    const fetchSavedProducts= async () =>{
        try {
            let response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/mycart`,{
                headers:{
                    Authorization: localStorage.getItem('userId')
                }
            })
            console.log(response);
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


    return(
        <div className="container">
            <h1 className="header">My Cart</h1>

            {
                savedProducts.length > 0 ?
                savedProducts.map((product, i)=>{
                    // console.log(image.id);
                    return <div key={i}>
                        <p>{product.name}</p>
                        <img src={product.image} />
                        <p>{product.price}</p>
                        <button onClick={()=> removeFromCart(product.id)} >Remove from my cart</button>
                        </div>

                })
                :
                <p>
                    Your cart is empty
                </p>
            }
            <p>Total price:{calculator()}</p>
            <button>Check out</button>
            
        </div>
    )
}



export default MyCart
