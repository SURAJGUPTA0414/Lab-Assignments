

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Button } from 'react-bootstrap';

function Header({ isAuthenticated, onLogout }) {
  return (
    <Navbar bg="primary" variant="dark" className="shadow-sm">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="#home">Job Application Tracker</Navbar.Brand>
        {isAuthenticated && (
          <Button className=' w-25 p-3'  onClick={onLogout}>
           <span className="glyphicon glyphicon-log-out"></span> Logout
          </Button>
         
          
        )}
      </Container>
     
    </Navbar>
  );
}

export default Header;

