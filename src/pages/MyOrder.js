import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { UserContext } from '../contexts/UserContext'
import { Link} from 'react-router-dom'


const MyOrder = (props) => {
    const [user, setUser] =useContext(UserContext)
    const [orders, setOrders] = useState([])

    const fetchOrders= async () =>{
        try {
            let response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/order`,{
                headers:{
                    Authorization: localStorage.getItem('userId')
                }
            })
            // console.log(response);
            setOrders(response.data.orders)
            
        } catch (error) {
            console.log({error});
        }
    }
    useEffect(fetchOrders,[])

    return(
        <div className="singleOrder-container">
            {
                orders.length > 0 ?
                orders.map((order)=>{
                    return <div key={order.id}>
                        <Link to={`/order/${order.id}`}>
                        <p>{order.createdAt}</p>
                        </Link>
                        </div>

                })
                :
                <p>
                    Your have no order history
                </p>
            }
        </div>
    )
}



export default MyOrder
