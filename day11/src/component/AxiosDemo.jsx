
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// import { Button, Form, Container, Row, Col, ListGroup } from 'react-bootstrap';


// export default function AxiosDemo() {
//   const url = "http://localhost:5000/products";
//   const [products, setProducts] = useState([]);
//   const [newProduct, setNewProduct] = useState({
//     title: '',
//     price: '',
//     description: '',
//     category: '',
//     image: '',
//   });

//   async function handleProduct() {
//     const response = await axios.get(url);
//     if (Array.isArray(response.data)) {
//       const modifiedData = response.data.map(post => ({
//         ...post,
//         qty: 0,
//       }));
//       setProducts(modifiedData); // Set modified data
//     }
//   }

//   useEffect(() => {
//     handleProduct();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewProduct({
//       ...newProduct,
//       [name]: value
//     });
//   };

//   const AddNewUser = async (e) => {
//     e.preventDefault(); // Prevent page refresh
//     const response = await axios.post(url, newProduct);
//     if (response.status === 201) {
//       handleProduct(); // Refresh product list after adding
//       setNewProduct({ title: '', price: '', description: '', category: '', image: '' }); // Clear form fields
//     }
//   };

//   const DeleteNewUser = async (id) => {
//     const response = await axios.delete(`${url}/${id}`);
//     if (response.status === 200) {
//       handleProduct(); // Refresh the product list after deletion
//     }
//   };

//   return (
//     <div className="mt-4">
//       <h2 className="text-center mb-4">Product List</h2>
//       <ListGroup>
//         {
//           products.map((p, index) => (
//             <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
//               <span>{p.title} --- ${p.price}</span>
//               <Button variant="danger" onClick={() => DeleteNewUser(p.id)}>Delete</Button>
//             </ListGroup.Item>
//           ))
//         }
//       </ListGroup>

//       <h2 className="text-center mt-4">Add New Product</h2>
//       <Form onSubmit={AddNewUser} className="p-4 border rounded bg-light">
//         <Row className="mb-3">
//           <Col>
//             <Form.Control
//               type="text"
//               name="title"
//               placeholder="Title"
//               value={newProduct.title}
//               onChange={handleInputChange}
//               required
//             />
//           </Col>
//           <Col>
//             <Form.Control
//               type="number"
//               name="price"
//               placeholder="Price"
//               value={newProduct.price}
//               onChange={handleInputChange}
//               required
//             />
//           </Col>
//         </Row>
//         <Form.Group className="mb-3">
//           <Form.Control
//             type="text"
//             name="description"
//             placeholder="Description"
//             value={newProduct.description}
//             onChange={handleInputChange}
//             required
//           />
//         </Form.Group>
//         <Row className="mb-3">
//           <Col>
//             <Form.Control
//               type="text"
//               name="category"
//               placeholder="Category"
//               value={newProduct.category}
//               onChange={handleInputChange}
//               required
//             />
//           </Col>
//           <Col>
//             <Form.Control
//               type="text"
//               name="image"
//               placeholder="Image URL"
//               value={newProduct.image}
//               onChange={handleInputChange}
//               required
//             />
//           </Col>
//         </Row>
//         <Button variant="primary" type="submit" className="w-100">Add Product</Button>
//       </Form>
//     </div>
//   );
// }


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form, Row, Col, ListGroup } from 'react-bootstrap';

export default function AxiosDemo() {
  const url = "http://localhost:5000/products";
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: '',
  });
  const [editingProduct, setEditingProduct] = useState(null);
  const [showProductList, setShowProductList] = useState(false);

  async function handleProduct() {
    const response = await axios.get(url);
    if (Array.isArray(response.data)) {
      const modifiedData = response.data.map(post => ({
        ...post,
        qty: 0,
      }));
      setProducts(modifiedData);
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
    e.preventDefault();
    if (editingProduct) {
      await UpdateProduct(editingProduct.id);
    } else {
      const response = await axios.post(url, newProduct);
      if (response.status === 201) {
        handleProduct();
        setNewProduct({ title: '', price: '', description: '', category: '', image: '' });
      }
    }
  };

  const DeleteNewUser = async (id) => {
    const response = await axios.delete(`${url}/${id}`);
    if (response.status === 200) {
      handleProduct();
    }
  };

  const UpdateProduct = async (id) => {
    const response = await axios.put(`${url}/${id}`, newProduct);
    if (response.status === 200) {
      handleProduct();
      setEditingProduct(null);
      setNewProduct({ title: '', price: '', description: '', category: '', image: '' });
    }
  };

  const handleEditClick = (product) => {
    setEditingProduct(product);
    setNewProduct(product);
  };

  return (
    <div className="mt-4">
      <h2 className="text-center mt-4">{editingProduct ? "Edit Product" : "Add New Product"}</h2>
      <Form onSubmit={AddNewUser} className="p-4 border rounded bg-light">
        <Row className="mb-3">
          <Col>
            <Form.Control
              type="text"
              name="title"
              placeholder="Title"
              value={newProduct.title}
              onChange={handleInputChange}
              required
            />
          </Col>
          <Col>
            <Form.Control
              type="number"
              name="price"
              placeholder="Price"
              value={newProduct.price}
              onChange={handleInputChange}
              required
            />
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="description"
            placeholder="Description"
            value={newProduct.description}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Row className="mb-3">
          <Col>
            <Form.Control
              type="text"
              name="category"
              placeholder="Category"
              value={newProduct.category}
              onChange={handleInputChange}
              required
            />
          </Col>
          <Col>
            <Form.Control
              type="text"
              name="image"
              placeholder="Image URL"
              value={newProduct.image}
              onChange={handleInputChange}
              required
            />
          </Col>
        </Row>
        <Button variant="primary" type="submit" className="w-100">
          {editingProduct ? "Update Product" : "Add Product"}
        </Button>
      </Form>

      <div className="text-center mt-4">
        <Button variant="secondary" onClick={() => setShowProductList(!showProductList)}>
          {showProductList ? "Hide Product date" : "Show product data"}
        </Button>
      </div>

      {showProductList && (
        <div className="mt-4">
          <h2 className="text-center mb-4">Product List</h2>
          <ListGroup>
            {
              products.map((p, index) => (
                <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                  <span>{p.title} --- ${p.price}</span>
                  <div>
                    <Button variant="warning" className="me-2" onClick={() => handleEditClick(p)}>Update</Button>
                    <Button variant="danger" onClick={() => DeleteNewUser(p.id)}>Delete</Button>
                  </div>
                </ListGroup.Item>
              ))
            }
          </ListGroup>
        </div>
      )}
    </div>
  );
}
