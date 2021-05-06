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

    return(
        <div className="productDetail-container"> 
        {
            productDetail ?
             <div key={productDetail.id}>
                    <h3>{productDetail.name}</h3>
                    <img src={productDetail.image} />
                    <p>{productDetail.description}</p>
                    <p>{productDetail.price}</p>
            </div>
            //No need to map an object!, but if an object is nested in an array, it should be mapped through!
            
            :
            <p>Loading...</p>
        }
        </div>
    )
}



export default ProductDetail