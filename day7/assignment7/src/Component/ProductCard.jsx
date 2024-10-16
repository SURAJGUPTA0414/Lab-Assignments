import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductCard = (props) => {
  const [products] = useState(props.productCardDetails);

  return (
    <div className="container">
      <h2 className="my-4">Product List</h2>
      <div className="row">
        {products.map(product => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: ₹{product.price}</p>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
