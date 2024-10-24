// // import React from 'react'
// // import { NavLink } from 'react-router-dom'

// // function Navbar() {
// //     return (
// //         <div>
// //             <NavLink to='/home'> 
// //                 <button>
// //                     Home Page
// //                 </button>
// //             </NavLink>


// //             <NavLink to='/About'>
// //                 <button>
// //                     About Page
// //                 </button>
// //             </NavLink>

// //             <NavLink to='/Travel'>
// //                 <button>
// //                     Travel Page
// //                 </button>
// //             </NavLink>

// //             <NavLink to='/Eat'>
// //                 <button>
// //                     Eat Page
// //                 </button>
// //             </NavLink>

// //             <NavLink to='/Relax'>
// //                 <button>
// //                     Relax Page
// //                 </button>
// //             </NavLink>

// //             <NavLink to='/Videos'>
// //                 <button>
// //                     Videos Page
// //                 </button>
// //             </NavLink>

// //         </div>
// //     )
// // }

// // export default Navbar


// import React from 'react';
// import { NavLink } from 'react-router-dom';

// function Navbar() {
//     return (
//         <div>
//             <NavLink to='/home'>
//                 <button>
//                     Home Page
//                 </button>
//             </NavLink>

//             <NavLink to='/about'>
//                 <button>
//                     About Page
//                 </button>
//             </NavLink>

//             <NavLink to='/travel'>
//                 <button>
//                     Travel Page
//                 </button>
//             </NavLink>

//             <NavLink to='/eat'>
//                 <button>
//                     Eat Page
//                 </button>
//             </NavLink>

//             <NavLink to='/relax'>
//                 <button>
//                     Relax Page
//                 </button>
//             </NavLink>

//             <NavLink to='/videos'>
//                 <button>
//                     Videos Page
//                 </button>
//             </NavLink>
//         </div>
//     )
// }

// export default Navbar;

import React from 'react';
import { NavLink } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/home">
          <img src="https://img.freepik.com/free-vector/detailed-travel-logo_23-2148616611.jpg?semt=ais_hybrid/150x50" style={{width:100}} alt="Travel Blog Logo" className="img-fluid" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/travel">Travel</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/eat">Eat</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/relax">Relax</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/videos">Videos</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

