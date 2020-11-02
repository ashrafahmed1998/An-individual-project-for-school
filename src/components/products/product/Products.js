import React,{Component} from 'react'
import './product.scss'
import ProductList from '../product-list/ProductList'
import { productData } from '../../../data';
export class Products extends Component{
 constructor(props){
super(props);
this.state={
    products: productData,
    searchProduct:''
}
 }

 onChangeHandler = e=>{
    this.setState({searchProduct:e.target.value})
 }

 render(){
    
     const searchProduct = this.state.products.filter(p=>
        p.title.toLowerCase().includes(this.state.searchProduct.toLowerCase()));
        // console.log('searchResult',searchProduct)
     return(
         <>
             <div className="searchContainer" style={{width:'200px',height:'60px',display:'flex'}}> 
             <input type='search' onChange={this.onChangeHandler} />
             </div>
        
        <div className='products-container'>
            {this.state.products.map(product=> 
                <ProductList product={product} />
                )}
        </div>
        </>
     )
 }
}
