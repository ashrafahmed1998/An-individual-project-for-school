import React from 'react'
import { withRouter } from 'react-router-dom'
import './productList.scss'
const ProductList = ({history,product}) => {
    console.log(history)
    return (
        <div className='product-container' onClick={()=> history.push(`{match.params.id}{/product/${product.id}}`)}>
            <div className="content-container">
            <div className='image-box'>
            <div className='image-container' style={{backgroundImage:`url(${product.imageUrl})`}} />
            </div>
            <div className='detail-container'>
                <div className='title'>
    <p>Name: {product.title}</p>
                </div>
                <div className='ratings'>
Rating: {product.rating}
                </div>
            </div>
            </div>
           
            
          
        </div>
    )
}

export default withRouter(ProductList)
