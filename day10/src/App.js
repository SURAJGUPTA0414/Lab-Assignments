
// import './App.css';
// import AxiosDemo from './component/AxiosDemo';
// // import LFCE from './component/LFCE';

// function App() {
//   return (
//     <div>
//       {/* <LFCE /> */}
//       <AxiosDemo />
//     </div>
//   );
// }

// export default App;



// import React, { useEffect, useState } from 'react';
// import ProductCard from './component/ProductCard'; 
// import axios from 'axios';
// import './App.css';

// function App() {
//   const [productCardDetails, setProductCardDetails] = useState([]);

//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const response = await axios.get('https://fakestoreapi.com/products');
//         setProductCardDetails(response.data); 
//         console.log(response.data)
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     }

//     fetchProducts(); 
//   }, []);

//   return (
//     <div className="App">
//       <h1 className="my-4">Online Store</h1>
      
//       <ProductCard productCardDetails={productCardDetails} />
//     </div>
//   );
// }

// export default App;


import React, { useEffect, useState } from 'react';
import ProductCard from './component/ProductCard'; 
import axios from 'axios';
import './App.css';

function App() {
  const [productCardDetails, setProductCardDetails] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProductCardDetails(response.data); 
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts(); 
  }, []);

  return (
    <div className="App">
      <h1 className="my-4">Online Store</h1>
      
      <ProductCard productCardDetails={productCardDetails} />
    </div>
  );
}

export default App;
