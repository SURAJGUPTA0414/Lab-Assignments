// import React, { useState } from 'react'

// function Login() {
//     const [username,setUsername] = useState('');
//     const [password,setPassword] = useState('');

//    function AuthenticateUser(){
//     if(username === "admin" && password === "admin") {
//         localStorage.setItem('isAuthenticated',true);
//     }else{
//         localStorage.setItem('isAuthenticated',false);
//         alert('invalid username password');
//     }
//     window.location.reload(true);
//    }

//   return (
//     <div>
//         <h1>Login page</h1>
//         <input type='text' placeholder='enter username' onChange={(e) => setUsername(e.target.value) }></input>
// <br />
//            <input type='text' placeholder='enter password' onChange={(e) => setPassword(e.target.value) }></input>
//       <br />
//       <button onClick={AuthenticateUser}>login</button>
//     </div>
//   )
// }

// export default Login





import React, { useState } from 'react';

function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function AuthenticateUser() {
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('isAuthenticated', true);
      setIsAuthenticated(true);
      alert("Successfully logged in");
    } else {
      localStorage.setItem('isAuthenticated', false);
      setError('Invalid username or password');
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: '300px' }}>
        <h1 className="text-center mb-4">Login</h1>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div className="text-danger mb-3">{error}</div>}
        <button className="btn btn-primary w-100" onClick={AuthenticateUser}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;







