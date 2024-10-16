import React, { Component } from 'react';

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.productArray
    };

    console.log(this.props.productArray);
  }

  render() {
    return (
      <div>
        <h2>Product List</h2>
       
        <ul>
          {this.state.products.map(product => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
