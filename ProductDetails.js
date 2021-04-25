import { useSimple } from "core-js/fn/symbol";
import React, { useEffect, useState } from "react";

const ProductDetails = (props) => {
  const [info, setInfo] = useState(null);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${props.id}`)
      .then((res) => res.json())
      .then((json) => {
        setInfo(json);
      });
  }, []);

  return (
    <div>{info ? <h1>{info.title}</h1> : <div>Details still loading</div>}</div>
  );
};
export default ProductDetails;
