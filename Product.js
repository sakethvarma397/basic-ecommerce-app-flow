import React from "react";
import { Link } from "@reach/router";

const Product = (props) => {
  return (
    <div className="product">
      <Link to={`/product/${props.details.id}`}>Know more</Link>
      <h4>{props.details.title}</h4>
      <p>{props.details.description}</p>
    </div>
  );
};

export default Product;
