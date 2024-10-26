import React, { useState } from 'react';

function SignUp({ setIsAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  function handleSignup() {
    if (username && password && email) {
      
      localStorage.setItem('user', JSON.stringify({ username, email }));
      localStorage.setItem('isAuthenticated', true);
      setIsAuthenticated(true);
      setSuccess("Account created successfully! You can now log in.");
    } else {
      setError('Please fill in all fields');
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: '300px' }}>
        <h1 className="text-center mb-4">Signup</h1>
        
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
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        {success && <div className="text-success mb-3">{success}</div>}
        
        <button className="btn btn-primary w-100" onClick={handleSignup}>
          Signup
        </button>
      </div>
    </div>
  );
}

export default SignUp;
