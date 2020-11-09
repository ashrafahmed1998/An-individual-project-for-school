import React, { Component } from "react";
import "./product.scss";
import ProductList from "../product-list/ProductList";
export class Products extends Component {
  render() {
    const { products } = this.props;
    return (
      <>
        <div
          className="searchContainer"
          style={{ width: "200px", height: "80px", display: "flex" }}
        ></div>

        <div className="products-container">
          {products.map((product) => (
            <ProductList product={product} />
          ))}
        </div>
      </>
    );
  }
}
