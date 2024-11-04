import React from 'react';
import { useSelector } from 'react-redux'; 

function CartCount() {
 
  const cartItems = useSelector((state) => state.cart.items);


  let totalCount = 0;

  
  for (let item of cartItems) {
    console.log(item);
    
    totalCount += item.quantity;
    console.log(totalCount);
    
  }

 
  return (
    <div className="cart-count">
      <p>Items in Cart: {totalCount}</p>
    </div>
  );
}

export default CartCount;
