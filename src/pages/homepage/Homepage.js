import React from 'react'
import About from '../../components/about/About'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import ProductView from '../../components/products/product-view/ProductView'
import { Products } from '../../components/products/product/Products'
const Homepage = () => {
    return (
        <div className="mainContanier" style={{display:'flex',flexDirection:'column',width:'100%'}}>
            {/* <header style={{height:'10vh',width:'100%'}}>
                <Header/>
            </header> */}
            <section className="mainBoday" style={{display:'flex',width:'100%',background:'lite greay',padding:'20px 70px'}}>
                <Products/>
                
            </section>
           
        </div>
    )
}

export default Homepage
//  {/* <footer className="footer" style={{display:'flex',width:'100%',height:'10vh',background:'green'}}>
//                 {/* <Footer/> */}
//             </footer> */}