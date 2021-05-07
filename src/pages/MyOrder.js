import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { UserContext } from '../contexts/UserContext'
import { Link} from 'react-router-dom'
import myOrder from '../css/myOrder.css'


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
        <div className="singleOrder-Box">
            <h2>My Orders</h2>
        <div className="singleOrder-container">
            {
                orders.length > 0 ?
                orders.map((order)=>{
                    return <div className="order" key={order.id}>
                        <Link to={`/order/${order.id}`}>
                        <p className="orderT">{order.createdAt}</p>
                        </Link>
                        </div>

                })
                :
                <p>
                    You have no order history
                </p>
            }
        </div>
       </div>
    )
}



export default MyOrder
