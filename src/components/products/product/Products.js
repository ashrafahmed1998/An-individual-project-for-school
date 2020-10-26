import React,{Component} from 'react'
import './product.scss'
import ProductList from '../product-list/ProductList'
import { productData } from '../../../data';
export class Products extends Component{
 constructor(props){
super(props);
this.state={
    products: productData
}
 }
 render(){
     return(
        <div className='products-container'>
            {this.state.products.map(product=> 
                <ProductList id={product.id} product={product} />
                )}
        </div>
     )
 }
}
