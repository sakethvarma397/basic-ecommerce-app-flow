import { fuchsia } from "color-name";
import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import Home from "./Home";
import Cart from "./Cart";
import ProductDetails from "./ProductDetails";

function App() {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
      </header>
      <Router>
        <Home path="/" />
        <Cart path="/cart" />
        <ProductDetails path="/product/:id" />
      </Router>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
