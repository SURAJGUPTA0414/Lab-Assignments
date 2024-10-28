
// // Register.js
// import React, { useState } from 'react';

// function Register() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const [success, setSuccess] = useState('');
//   const [error, setError] = useState('');

//   function handleRegister() {
//     if (username && password && email) {
//       // Store user data (for demo purposes, we use localStorage)
//       localStorage.setItem('registeredUser', JSON.stringify({ username, password, email }));
//       setSuccess('Registration successful! Please login.');
//       setError('');
//     } else {
//       setError('All fields are required');
//       setSuccess('');
//     }
//   }

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//       <div className="card p-4 shadow-lg" style={{ width: '300px' }}>
//         <h1 className="text-center mb-4">Register</h1>
//         <div className="mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Enter password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         {error && <div className="text-danger mb-3">{error}</div>}
//         {success && <div className="text-success mb-3">{success}</div>}
//         <button className="btn btn-primary w-100" onClick={handleRegister}>
//           Register
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Register;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Register() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const [success, setSuccess] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   function handleRegister() {
//     if (username && password && email) {
//       localStorage.setItem(
//         'registeredUser',
//         JSON.stringify({ username, password, email })
//       );
//       setSuccess('Registration successful! Redirecting to login...');
//       setError('');
//       setTimeout(() => navigate('/login'), 2000); // Redirect after 2 seconds
//     } else {
//       setError('All fields are required');
//       setSuccess('');
//     }
//   }

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//       <div className="card p-4 shadow-lg" style={{ width: '300px' }}>
//         <h1 className="text-center mb-4">Register</h1>
//         <div className="mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Enter password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         {error && <div className="text-danger mb-3">{error}</div>}
//         {success && <div className="text-success mb-3">{success}</div>}
//         <button className="btn btn-primary w-100" onClick={handleRegister}>
//           Register
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Register;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Register() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const [success, setSuccess] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   function handleRegister() {
//     if (username && password && email) {
//       localStorage.setItem('registeredUser', JSON.stringify({ username, password, email }));
//       setSuccess('Registration successful! Redirecting to login...');
//       setError('');
//       setTimeout(() => navigate('/login'), 2000); // Redirect after 2 seconds to login
//     } else {
//       setError('All fields are required');
//       setSuccess('');
//     }
//   }

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//       <div className="card p-4 shadow-lg" style={{ width: '300px' }}>
//         <h1 className="text-center mb-4">Register</h1>
//         <div className="mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Enter password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         {error && <div className="text-danger mb-3">{error}</div>}
//         {success && <div className="text-success mb-3">{success}</div>}
//         <button className="btn btn-primary w-100" onClick={handleRegister}>
//           Register
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Register;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Form, Button, Container, Card } from 'react-bootstrap';

// function Register() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const [success, setSuccess] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleRegister = () => {
//     if (username && password && email) {
//       localStorage.setItem('registeredUser', JSON.stringify({ username, password, email }));
//       setSuccess('Registration successful! Redirecting to login...');
//       setError('');
//       setTimeout(() => navigate('/login'), 2000); // Redirect after 2 seconds to login
//     } else {
//       setError('All fields are required');
//       setSuccess('');
//     }
//   };

//   return (
//     <Container className="d-flex justify-content-center align-items-center vh-100">
//       <Card className="p-4 shadow-lg" style={{ width: '300px' }}>
//         <h1 className="text-center mb-4">Register</h1>
//         <Form>
//           <Form.Group className="mb-3">
//             <Form.Control
//               type="text"
//               placeholder="Enter username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Control
//               type="email"
//               placeholder="Enter email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Control
//               type="password"
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </Form.Group>
//           {error && <div className="text-danger mb-3 text-center">{error}</div>}
//           {success && <div className="text-success mb-3 text-center">{success}</div>}
//           <Button variant="primary" className="w-100" onClick={handleRegister}>
//             Register
//           </Button>
//         </Form>
//       </Card>
//     </Container>
//   );
// }

// export default Register;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Card } from 'react-bootstrap';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (username && password && email) {
      localStorage.setItem('registeredUser', JSON.stringify({ username, password, email }));
      setSuccess('Registration successful! Redirecting to login...');
      setError('');
      setTimeout(() => navigate('/login'), 2000);
    } else {
      setError('All fields are required');
      setSuccess('');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow-lg" style={{ width: '300px' }}>
        <h1 className="text-center mb-4">Register</h1>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          {error && <div className="text-danger mb-3 text-center">{error}</div>}
          {success && <div className="text-success mb-3 text-center">{success}</div>}
          <Button variant="primary" className="w-100" onClick={handleRegister}>
            Register
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default Register;

