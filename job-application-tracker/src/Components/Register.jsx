
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    localStorage.setItem('user', JSON.stringify({ username, password }));
    alert('Registeration Successfull')
    navigate('/login');
  };

  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      <h2 className="mb-4">Register</h2>
      <Form onSubmit={handleRegister} className="w-50 p-3 border rounded bg-light shadow-sm">
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
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>
        {error && <p className="text-danger text-center">{error}</p>}
        <Button type="submit" variant="primary" className="w-100">Register</Button>
      </Form>
    </Container>
  );
}

export default Register;
