import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

const ProductList = (props) => {
    const [allProducts, setAllProducts] = useState([])

    const fetchAllProducts = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/products`)
        .then((response) => {
    
            setAllProducts(response.data.product)
        })
    }
    useEffect(fetchAllProducts,[])


    return(
        <div className="allProducts-Box">
            <h2>All Products</h2>
        <div className="allProducts-container">
        {
            allProducts.length ?
            allProducts.map((product) => {
                return <div key={product.id}
                            className="allProducts">
                            <Link to={`/products/${product.id}`}>
                                <div className="singleProduct-container">
                                    <h3 className="ProductT">{product.name}</h3>
                                    <img className="ProductImages" src={product.image} />
                                    <div className="ProductDesc-Box">
                                    <p className="ProductT">{product.description}</p>
                                    </div>
                                    <p className="ProductT">{product.price}</p>
                                </div>
                            </Link>
                        </div>
              })
              :
              <p>Loading...</p>
          }
      </div>
      </div>
    )
}



export default ProductList