import {useParams} from 'react-router-dom'
import { useState, useEffect,useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'



const OrderDetail = (props) => {
    const { id } = useParams()
    const [user, setUser] =useContext(UserContext)
    const [orderDetail, setOrderDetail] = useState({})


    const fetchOrderDetail = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/order/${id}`,{
            headers:{
                Authorization: localStorage.getItem('userId')
            }
        })
           .then((response) => {
            //    console.log(response);
               setOrderDetail(response.data)
           })
       }
       useEffect(fetchOrderDetail, [])

       const calculator = () => {
        let c = 0
        if(!orderDetail.product) {return}
        for(let i=0; i < orderDetail.product.length; i++){
            let newString = orderDetail.product[i].price.replace('$', '')
            let noDollar = parseFloat(newString)
            // console.log(noDollar);
            c += noDollar
        }
        return c
       }


    return(
        <div className="specificOrder">
            <div>

            {
                orderDetail.product  ? 
                orderDetail.product.map((product)=>{
                    return <div key={product.id}>
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                        </div>
                })
                
                :
                <p>
                    Loading...
                </p>
            }
            </div>
            <div>
                {
                    orderDetail.product && orderDetail.order && 
                    <>
                    <p>Total price: ${calculator()}</p> 
                    <p>Address: {orderDetail.order.address}</p> 
                    <p>Credit Cart Number: {orderDetail.order.creditCardNum}</p> 
                    </>
                }
            </div>
        </div>
    )
}

export default OrderDetail 