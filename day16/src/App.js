


import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductCard from './Assignment/ProductCard';
import CartCount from './Assignment/CartCount.jsx';
import axios from 'axios';
import './App.css';

function App() {
  const [productCardDetails, setProductCardDetails] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProductCardDetails(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, []);


  const mensProducts = productCardDetails.filter((p) => p.category === "men's clothing");
  const jewelryProducts = productCardDetails.filter((p) => p.category === "jewelery");
  const womensProducts = productCardDetails.filter((p) => p.category === "women's clothing");
  const electronicsProducts = productCardDetails.filter((p) => p.category === "electronics");

  return (
    <Router>
      <div className="App">
        <h1 className="my-4">Online Store</h1>
        <CartCount />
        <nav>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Link to="/mens-clothing">Men's Clothing</Link>
            <Link to="/jewelry">Jewelry</Link>
            <Link to="/womens-clothing">Women's Clothing</Link>
            <Link to="/electronics">Electronics</Link>
          
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<p>Select a category</p>} />
          <Route path="/mens-clothing" element={<ProductCard productCardDetails={mensProducts} />} />
          <Route path="/jewelry" element={<ProductCard productCardDetails={jewelryProducts} />} />
          <Route path="/womens-clothing" element={<ProductCard productCardDetails={womensProducts} />} />
          <Route path="/electronics" element={<ProductCard productCardDetails={electronicsProducts} />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;

