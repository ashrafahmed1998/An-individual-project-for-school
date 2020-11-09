import React from "react";
import About from "../../components/about/About";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ProductView from "../../components/products/product-view/ProductView";
import { Products } from "../../components/products/product/Products";
import Signup from "../auth/Signup";
const Homepage = ({ products }) => {
  return (
    <div
      className="mainContanier"
      style={{ display: "flex", flexDirection: "column", width: "100%" }}
    >
      <section
        className="mainBoday"
        style={{
          display: "flex",
          width: "100%",
          background: "lite greay",
          padding: "20px 70px",
        }}
      >
        <Products products={products} />
      </section>
    </div>
  );
};

export default Homepage;
//  {/* <footer className="footer" style={{display:'flex',width:'100%',height:'10vh',background:'green'}}>
//                 {/* <Footer/> */}
//             </footer> */}
