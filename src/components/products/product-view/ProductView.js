import React from 'react'
import { productData } from '../../../data'
import './ProductView.scss'

const ProductView =({match})=>{
    const product = productData.find(p=> p.id === match.params.id);
return(
    <div>
        {/* {product.title} */}
        {/* console.log(p.id) */}

    </div>
)
}
export default ProductView