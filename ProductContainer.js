import React from "react";
import Product from "./Product";

const ProductContainer = (props) => {
  function renderProducts() {
    return props.products.map((product) => {
      return <Product key={product.id} details={product} />;
    });
  }
  return <div className="product-container">{renderProducts()}</div>;
};

export default ProductContainer;
