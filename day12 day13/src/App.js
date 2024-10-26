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


// import React, { useEffect } from 'react';
// import { Outlet } from 'react-router-dom';  
// import Navbar from './Assignment/Navbar';
// import Header from './Assignment/Header';
// import Footer from './Assignment/Footer';
// import Bread from './Assignment/Bread';


// function App() {
//   useEffect(() => {
//     localStorage.setItem('isAuthenticated',false);
//   }

//   )
//   return (
//     <div>
//       {/* <Bread /> */}
//       <Header />  
//       <Navbar />
      
     
//       <Outlet />  

//       <Footer />  
//     </div>
//   );
// }

// export default App;


import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';  
import Navbar from './Assignment/Navbar';
import Header from './Assignment/Header';
import Footer from './Assignment/Footer';
import Login from './Assignment/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
  }, []);

  return (
    <div>
      {isAuthenticated ? (
        <>
          <Header />
          <Navbar />
          <Outlet />
          <Footer />
        </>
      ) : (
        <Login setIsAuthenticated={setIsAuthenticated} />
      )}
    </div>
  );
}

export default App;


