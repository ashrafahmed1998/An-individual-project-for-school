import React from 'react'
import { withRouter,Link } from 'react-router-dom'
import Review from '../../Review'
import './productList.scss'
const ProductList = ({history,product}) => {
    console.log(history)
    return (
        <div className='product-container' >
            <div className="content-container">
            <Link to={`/product/${product.id}`} className='image-box'>
            <div className='image-container' style={{backgroundImage:`url(${product.imageUrl})`}} />
            </Link>
            <div className='detail-container'>
                <div className='title'>
    <p>Name: {product.title}</p>
                </div>
                <div className='ratings'>
<Review value={product.rating}/>
                </div>
            </div>
            </div>
           
            
          
        </div>
    )
}

export default withRouter(ProductList)
// `{match.params.id}{/product/${product.id}}`
// onClick={()=> history.push(`/product/${product.id}`)}