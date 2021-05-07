import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'



const ProductDetail = (props) => {
    const { id } = useParams()
    const [productDetail, setProductDetail] = useState({})

    const fetchProductDetail = () => {
     axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/${id}`)
        .then((response) => {
            // console.log(response);
            setProductDetail(response.data.product)
        })
    }
    useEffect(fetchProductDetail, [])

    const saveToMyCart =(e) =>{
       axios.post(`${process.env.REACT_APP_BACKEND_URL}/products/${id}`,
       {},
       {
           headers:{
               Authorization: localStorage.getItem('userId')
           }
       })
       .then((response)=>{
        //    console.log('you clicked save');
        //    console.log(response);
       })
   }

    return(
        <div className="productDetail-container"> 
        {
            productDetail ?
            <>
             <div key={productDetail.id}>
                    <h3>{productDetail.name}</h3>
                    <img src={productDetail.image} />
                    <p>{productDetail.description}</p>
                    <p>{productDetail.price}</p>
            </div>
            
            <button onClick={saveToMyCart}>ADD TO MY CART</button>
            <Link to="/allproducts">GO BACK</Link>
            </>
            //No need to map an object!, but if an object is nested in an array, it should be mapped through!
            
            :
            <p>Loading...</p>
        }
        </div>
    )
}



export default ProductDetail