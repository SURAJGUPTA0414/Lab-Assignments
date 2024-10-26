// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import {createBrowserRouter,RouterProvider} from 'react-router-dom'
// import About from './Component/About'
// import Contact from './Component/Contact'
// import Home from './Component/Home'
// import Kids from './Component/Kids'
// import Mens from './Component/Mens'
// import Category from './Component/Category';
// import HoverComponent from './Component/HoverComponent';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// const r = createBrowserRouter(
//   [
//     {path:'/hover/:colorname',element:<HoverComponent />},
//     {path:'/', element:<App />},
//     {path:'/about', element:<About />},
//     {path:'/contact', element:<Contact />},
//     {
//       path : '/category',
//       element: <Category />,
//       children:[
//         {
//           path:'/category/Kids',
//           element: <Kids />
//         },
//         {
//           path:'/category/mens',
//           element: <Mens />
//         }

//       ]
//     }
    
//   ]
// );
// root.render(
//   // <React.StrictMode>
//   <RouterProvider router={r}>
//     <App />

//   </RouterProvider>
    
//   // </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import {createBrowserRouter,RouterProvider} from 'react-router-dom'
// import About from './Assignment/About'
// import Contact from './Component/Contact'
// import Home from './Assignment/Home'
// import Kids from './Component/Kids'
// import Mens from './Component/Mens'
// import Category from './Component/Category';
// import HoverComponent from './Component/HoverComponent';
// import Travel from './Assignment/Travel';
// import Eat from './Assignment/Eat';
// import Relax from './Assignment/Relax';
// import Video from './Assignment/Video';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// const r = createBrowserRouter(
//   [
//     {path:'/', element:<App />},
//     {path:'/about', element:<About />},
//     {path:'/travel', element:<Travel />},
//     {path:'/eat', element:<Eat />},
//     {path:'/relax', element:<Relax />},
//     {path:'/videos', element:<Video />},
//     {path:'/home', element:<Home />}, // Added Home route
//   ]
// );

// root.render(
//   // <React.StrictMode>
//   <RouterProvider router={r}>
//     <App />

//   </RouterProvider>
    
//   // </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Assignment/About';
// import Contact from './Component/Contact';
import Home from './Assignment/Home';
import Travel from './Assignment/Travel';
import Eat from './Assignment/Eat';
import Relax from './Assignment/Relax';
import Video from './Assignment/Video';
import 'bootstrap/dist/css/bootstrap.min.css';
import Error from './Assignment/Error';
import Login from './Assignment/Login'
import ProtectedRoute from './Assignment/ProtectedRoute';


const root = ReactDOM.createRoot(document.getElementById('root'));

const r = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    errorElement: <Error />,  
    children: [  
      { path: '', element: <Home /> },  
      { path: 'login', element: <Login /> },
      { path: 'about', element: <About /> },  
      { path: 'travel', element: <ProtectedRoute compo={ <Travel />} /> },  
      { path: 'eat',element: <ProtectedRoute compo={ <Eat />} /> },  
      { path: 'relax', element: <ProtectedRoute compo={ <Relax />} /> },  
      { path: 'videos', element: <ProtectedRoute compo={ <Video />} /> }
    ]
  }
]);

root.render(
  <RouterProvider router={r} />
);

reportWebVitals();


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { AuthProvider } from './Myprovider/AuthContext'; // Import the AuthProvider

// const root = ReactDOM.createRoot(document.getElementById('root'));

// const r = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     // other routes...
//   }
// ]);

// root.render(
//   <AuthProvider>
//     <RouterProvider router={r} />
//   </AuthProvider>
// );

// reportWebVitals();
