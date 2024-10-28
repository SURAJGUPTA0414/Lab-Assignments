import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';

function Login({ setAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem('user'));

    if (savedUser && savedUser.username === username && savedUser.password === password) {
      setAuthenticated(true);
      alert("login succesfull...")
      navigate('/home');
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      <h2 className="mb-4">Login</h2>
      <Form onSubmit={handleLogin} className="w-50 p-3 border rounded bg-light shadow-sm">
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        {error && <p className="text-danger text-center">{error}</p>}
        <Button type="submit" variant="primary" className="w-100">Login</Button>
        <Button variant="link" className="w-100 mt-3" onClick={() => navigate('/register')}>
          Register Now
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
