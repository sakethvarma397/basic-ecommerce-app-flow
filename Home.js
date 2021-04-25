import React from "react";
import ProductContainer from "./ProductContainer";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => this.setState({ products: json }));
  }

  render() {
    return (
      <div>
        {this.state.products ? (
          <ProductContainer products={this.state.products} />
        ) : (
          <div>Still loading</div>
        )}
      </div>
    );
  }
}

export default Home;
