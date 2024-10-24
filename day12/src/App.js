// import logo from './logo.svg';
// import './App.css';
// import Navbar from './Component/Navbar';
// import Header from './Component/Header';
// import Footer from './Component/Footer';

// function App() {
//   return (
//     <div>
//       <Header />
//       <Navbar />
//       <Footer />
//     </div>
//   );
// }

// export default App;


// import logo from './logo.svg';
// import './App.css';
// import Navbar from './Assignment/Navbar';
// import Header from './Assignment/Header';
// import Footer from './Assignment/Footer';

// function App() {
//   return (
//     <div>
//       <Header />
//       <Navbar />
//       <Footer />
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { Outlet } from 'react-router-dom';  // Import Outlet to render the page content
import Navbar from './Assignment/Navbar';
import Header from './Assignment/Header';
import Footer from './Assignment/Footer';

function App() {
  return (
    <div>
      <Header />  {/* Header will always be shown */}
      <Navbar />  {/* Navbar will always be shown */}
      
      {/* This is where the routed content (like About, Home, etc.) will be rendered */}
      <Outlet />  

      <Footer />  {/* Footer will always be shown */}
    </div>
  );
}

export default App;
