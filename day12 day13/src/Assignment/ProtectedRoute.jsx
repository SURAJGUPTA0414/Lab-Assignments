// import React, { useEffect } from 'react'
// import Login from './Login'

// function ProtectedRoute({compo}) {
//     const [x,setX] = React.useState(false);
//     useEffect(() => {
//         if(localStorage.getItem('isAuthenticated') === 'true'){
//             setX(true);
//         }else{
//             setX(false)
//         }
//     },[])
//   return (
//     <div>
//        {
//         x?compo:<Login />
//        }
//     </div>
//   )
// }

// export default ProtectedRoute


import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ compo }) {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  return (
    <div>
      {isAuthenticated ? compo : <Navigate to="/login" />}
    </div>
  );
}

export default ProtectedRoute;

