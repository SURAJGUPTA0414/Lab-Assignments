



import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function BookStore() {
  let url = "http://localhost:5000/books";
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: '',
  });

  async function handleProduct() {
    const response = await axios.get(url);
    if (Array.isArray(response.data)) {
      const modifiedData = response.data.map(post => ({
        ...post,
        qty: 0,
      }));
      setProducts(modifiedData); // Set modified data
    }
  }

  useEffect(() => {
    handleProduct();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value
    });
  };

  const AddNewUser = async (e) => {
    e.preventDefault(); // Prevent page refresh
    const response = await axios.post(url, newProduct);
    console.log(response);
    if (response.status === 201) {
      handleProduct(); // Refresh product list after adding
      setNewProduct({ title: '', price: '', description: '', category: '', image: '' }); // Clear form fields
    }
  };

  const DeleteNewUser = async (id) => {
    const response = await axios.delete(`${url}/${id}`);
    console.log(response);
    if (response.status === 200) {
      handleProduct(); // Refresh the product list after deletion
    }
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {
          products && products.map((p, index) => {
            return (
              <li key={index}>
                {p.title} --- {p.price}
                {/* Add a button to delete the product */}
                <button onClick={() => DeleteNewUser(p.id)}>Delete</button>
              </li>
            );
          })
        }
      </ul>

      <h2>Add New Product</h2>
      <form onSubmit={AddNewUser}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newProduct.title}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={newProduct.price}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newProduct.description}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={newProduct.category}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newProduct.image}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}
