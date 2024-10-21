// import React, { useState } from 'react';


// const ProductCard = (props) => {
//   const products = props.productCardDetails; 

//   const [count,setCount] = useState(0);

//   return (
//     <div className="container">
//       <h2 className="my-4">Product List</h2>
//       <div className="row">
//         {products.map(product => (
//           <div className="col-md-4 mb-4" key={product.id}>
//             <div className="card h-100">
//               <img
//                 src={product.image}
//                 className="card-img-top"
//                 alt={product.name}
//                 style={{ height: '200px', objectFit: 'cover' }}
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{product.title}</h5>
//                 <p className="card-text">Category: {product.category}</p>
//                 <p className="card-text">Price: ₹{product.price}</p>
//                 <p className="card-text">id: {product.id}</p>

//                 <p>Quantity : {count}</p>
//                 <button onClick={() => {setCount(count+1)}}>+</button>
//                 <button onClick={() => {setCount(count-1)}}>-</button>
//               </div>
//               <div className="card-footer">
//                 <button className="btn btn-primary">Buy Now</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductCard;


// import React, { useState } from 'react';

// const ProductCard = (props) => {
//   const products = props.productCardDetails; 

//   // Initialize the quantity state for each product using product.id
//   const [quantities, setQuantities] = useState({});

//   // Function to handle quantity changes for a specific product
//   const handleQuantityChange = (productId, change) => {
//     setQuantities((prevQuantities) => ({
//       ...prevQuantities,
//       [productId]: Math.max(0, (prevQuantities[productId] || 0) + change) // Ensure quantity doesn't go below 0
//     }));
//   };

//   return (
//     <div className="container">
//       <h2 className="my-4">Product List</h2>
//       <div className="row">
//         {products.map(product => (
//           <div className="col-md-4 mb-4" key={product.id}>
//             <div className="card h-100">
//               <img
//                 src={product.image}
//                 className="card-img-top"
//                 alt={product.name}
//                 style={{ height: '200px', objectFit: 'cover' }}
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{product.title}</h5>
//                 <p className="card-text">Category: {product.category}</p>
//                 <p className="card-text">Price: ₹{product.price}</p>
//                 <p className="card-text">ID: {product.id}</p>

//                 <p>Quantity: {quantities[product.id] || 0}</p>
//                 <button onClick={() => handleQuantityChange(product.id, 1)}>+</button>
//                 <button onClick={() => handleQuantityChange(product.id, -1)} disabled={quantities[product.id] === 0}>-</button>
//               </div>
//               <div className="card-footer">
//                 <button className="btn btn-primary">Buy Now</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductCard;



// import React, { useState } from 'react';

// const ProductCard = (props) => {
//   // Products are passed from the parent component (App)
//   const products = props.productCardDetails; 

//   // State to track the quantity of each product
//   // This object will store the quantity for each product based on its ID
//   const [quantities, setQuantities] = useState({});

//   // Function to handle changes in quantity for a product
//   const handleQuantityChange = (productId, change) => {
//     // Update the quantity for the product with the given ID


//     setQuantities((prevQuantities) => ({

//       ...prevQuantities, // Keep previous quantities for other products
//       // Update the current product's quantity, ensuring it doesn't go below 0
//       [productId]: Math.max(0, (prevQuantities[productId] || 0) + change)

//     }));
//   };

//   return (
//     <div className="container">
//       <h2 className="my-4">Product List</h2>
//       <div className="row">
//         {/* Loop through each product and display it */}
//         {products.map(product => (
//           <div className="col-md-4 mb-4" key={product.id}>
//             <div className="card h-100">
//               {/* Display product image */}
//               <img
//                 src={product.image}
//                 className="card-img-top"
//                 alt={product.name}
//                 style={{ height: '200px', objectFit: 'cover' }}
//               />
//               <div className="card-body">
//                 {/* Display product details like title, category, and price */}
//                 <h5 className="card-title">{product.title}</h5>
//                 <p className="card-text">Category: {product.category}</p>
//                 <p className="card-text">Price: ₹{product.price}</p>
//                 <p className="card-text">ID: {product.id}</p>

//                 {/* Display the quantity for this product */}
//                 <p>Quantity: {quantities[product.id] || 0}</p>

//                 {/* Button to increase quantity */}
//                 <button onClick={() => handleQuantityChange(product.id, 1)}>+</button>

//                 {/* Button to decrease quantity, disabled when quantity is 0 */}
//                 <button onClick={() => handleQuantityChange(product.id, -1)} disabled={quantities[product.id] === 0}>-</button>
//               </div>
//               <div className="card-footer">
//                 <button className="btn btn-primary">Buy Now</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductCard;


// import React, { useState } from 'react';

// const ProductCard = ({ productCardDetails }) => {
//   const [quantity, setquantity] = useState({});

//   const updatequantity = (id, change) => {
//     setquantity((prev) => ({
//       ...prev,
//       [id]: Math.max(0, (prev[id] || 0) + change)
//     }));
//   };

//   return (
//     <div className="container">
//       <h2 className="my-4">Product List</h2>
//       <div className="row">
//         {productCardDetails.map(({ id, title, category, price, image }) => (
//           <div className="col-md-4 mb-4" key={id}>
//             <div className="card h-100">
//               <img src={image} className="card-img-top" alt={title} style={{ height: '200px', objectFit: 'cover' }} />
//               <div className="card-body">
//                 <h5>{title}</h5>
//                 <p>Category: {category}</p>
//                 <p>Price: ₹{price}</p>
//                 <p>quantity: {quantity[id] || 0}</p>
//                 <button onClick={() => updatequantity(id, 1)}>+</button>
//                 <button onClick={() => updatequantity(id, -1)} disabled={quantity[id] === 0}>-</button>
//               </div>
//               <div className="card-footer">
//                 <button className="btn btn-primary">Buy Now</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };



// import React, { useState } from 'react';

// function ProductCard(props) {



//     const [quantity, setquantity] = useState({});


//     function updatequantity(id, change) {


//         setquantity(function (prev) {

//             var newquantity = prev[id] || 0;
//             newquantity = newquantity + change;
//             if (newquantity < 0) {
//                 newquantity = 0;
//             }
//             return {
//                 ...prev,
//                 [id]: newquantity
//             };
//         });
//     }

//     return (
//         <div className="container">

//             <h2>Product List</h2>


//             <div className="row">


//                 {props.productCardDetails.map(function (product) {

//                     return (
//                         <div className="col-md-4" key={product.id}>


//                             <div className="card">


//                                 <img src={product.image} className="card-img-top" alt={product.title} style={{ height: '200px', objectFit: 'cover' }} />


//                                 <div className="card-body">

//                                     <h5>{product.title}</h5>

//                                     <p>Category: {product.category}</p>

//                                     <p>Price: ₹{product.price}</p>

//                                     <p>quantity: {quantity[product.id] || 0}</p>


//                                     <button onClick={() => updatequantity(product.id, 1)}>+</button>

//                                     <button onClick={() => updatequantity(product.id, -1)} disabled={quantity[product.id] === 0}>-</button>
//                                     {/* Button to decrease quantity, disabled if it's already 0 */}
//                                 </div>

//                                 <div className="card-footer">
//                                     {/* Card footer for the Buy Now button */}
//                                     <button className="btn btn-primary">Buy Now</button>
//                                     {/* Buy Now button (no functionality yet) */}
//                                 </div>
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// }

// export default ProductCard;
// // Exporting the ProductCard component for use in other parts of the app.

import React, { useState } from 'react';

function ProductCard(props) {
  const [quantity, setQuantity] = useState({});

  function updateQuantity(id, change) {
    setQuantity((prev) => {
      let newQuantity = prev[id] || 0;
      console.log(newQuantity);
      
      newQuantity = newQuantity + change;
      console.log(newQuantity);
      if (newQuantity < 0) newQuantity = 0;

      return { ...prev, [id]: newQuantity };
    });
  }

  return (
    <div className="container">
      <h2>Product List</h2>
      <div className="row">
        {props.productCardDetails.map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card">
              <img 
                src={product.image} 
                className="card-img-top" 
                alt={product.title} 
                style={{ height: '200px', objectFit: 'cover' }} 
              />
              <div className="card-body">
                <h5>{product.title}</h5>
                <p>Category: {product.category}</p>
                <p>Price: ₹{product.price}</p>
                <p>Quantity: {quantity[product.id] || 0}</p>
                <button onClick={() => updateQuantity(product.id, 1)}>+</button>
                <button 
                  onClick={() => updateQuantity(product.id, -1)} 
                  disabled={quantity[product.id] === 0}
                >
                  -
                </button>
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





// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const ProductCard = ({ productCardDetails }) => {
//   const [quantity, setquantity] = useState({});
//   const [cart, setCart] = useState([]);

//   // Update quantity for each product
//   const updatequantity = (id, change) => {
//     setquantity((prev) => ({
//       ...prev,
//       [id]: Math.max(0, (prev[id] || 0) + change)
//     }));
//   };

//   // Add to Cart: Adds selected product to the cart
//   const addToCart = (product) => {
//     if (quantity[product.id] > 0) {
//       setCart((prevCart) => {
//         const existingProduct = prevCart.find((item) => item.id === product.id);
//         if (existingProduct) {
//           // Update the quantity of the existing product in the cart
//           return prevCart.map((item) =>
//             item.id === product.id ? { ...item, quantity: quantity[product.id] } : item
//           );
//         } else {
//           // Add new product to the cart
//           return [...prevCart, { ...product, quantity: quantity[product.id] }];
//         }
//       });
//     }
//   };

//   return (
//     <div className="container">
//       <h2 className="my-4">Product List</h2>
//       <div className="row">
//         {productCardDetails.map((product) => (
//           <div className="col-md-4 mb-4" key={product.id}>
//             <div className="card h-100">
//               <img
//                 src={product.image}
//                 className="card-img-top"
//                 alt={product.title}
//                 style={{ height: '200px', objectFit: 'cover' }}
//               />
//               <div className="card-body">
//                 <h5>{product.title}</h5>
//                 <p>Category: {product.category}</p>
//                 <p>Price: ₹{product.price}</p>
//                 <p>quantity: {quantity[product.id] || 0}</p>
//                 <button className="btn btn-outline-success me-2" onClick={() => updatequantity(product.id, 1)}>+</button>
//                 <button className="btn btn-outline-danger me-2" onClick={() => updatequantity(product.id, -1)} disabled={quantity[product.id] === 0}>-</button>
//               </div>
//               <div className="card-footer">
//                 <button className="btn btn-primary" onClick={() => addToCart(product)}>
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Cart Section */}
//       {cart.length > 0 && (
//         <div className="mt-4">
//           <h2>Cart</h2>
//           <table className="table">
//             <thead>
//               <tr>
//                 <th scope="col">Product</th>
//                 <th scope="col">Category</th>
//                 <th scope="col">Quantity</th>
//                 <th scope="col">Price</th>
//                 <th scope="col">Total</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cart.map((item) => (
//                 <tr key={item.id}>
//                   <td>{item.title}</td>
//                   <td>{item.category}</td>
//                   <td>{item.quantity}</td>
//                   <td>₹{item.price}</td>
//                   <td>₹{item.price * item.quantity}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductCard;

