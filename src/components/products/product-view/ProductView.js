import React from 'react'
import {Link} from 'react-router-dom'
import './productView.scss'
import { useParams } from 'react-router-dom'
import moduleName from 'module'
import { productData } from '../../../data'
import CustomButton from '../../button/CustomButton'

const ProductView =({match})=>{
    let { id } = useParams();
  let detailedProduct = productData[parseInt(id)];
// const detail = productData.find(p=> p.id === match.params.id)
// console.log(detail.title)
    // const product = productData.find(p=> p.id === match.params.id);
return(
    <div className='product-detail-container'>
       
     <div className='content-container'>
    
                <div className="leftContainer">
                {/* <div className="imageContainer"  /> */}
                <img className='imageContainer' src={detailedProduct.imageUrl} alt="image-rendered failed"/>
                
                </div>
<div className="rightContainer" style={{flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
   <h2> {detailedProduct.title}</h2>
            <p>{detailedProduct.descriptions}</p>
            <CustomButton>  <Link to='/' style={{textDecoration:'none'}}>Go back</Link></CustomButton></div>
            
     </div>
   

    </div>
)
}
export default ProductView