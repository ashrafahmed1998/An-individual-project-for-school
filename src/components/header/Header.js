import React from "react";
import { Link } from "react-router-dom";
import './header.scss'
const Header=()=> {
    const [serachValue,setSearcheValue] = React.useState()
    return(
        <div className="headerContainer"> 
        <div className="searchContainer">
            <input type='search' placeholder='searh here' style={{height:'30px',width:'350px', borderRadius: '50px', padding: '10px'}} onChange={(e)=>setSearcheValue(e.target.value)}/>
            <i className="fas fa-search" style={{color:'white'}} style={{marginLeft:'-20px'}} />
             </div>
        <div className="logoContainer"><h1>Foodie</h1></div>
        <div className="optionContainer">
            <Link to='/' className="option">HOME</Link>
            <Link to='/Sign-in' className="option">Sign in</Link>
            <Link to='/cart' className="option">CART</Link>
            <Link to='/contact' className="option">CONTACT</Link>
        </div>
         </div>
    )
}

export default Header;