import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <Container>
        <p className="mb-0">Job Application Tracker &copy; {new Date().getFullYear()}</p>
      </Container>
    </footer>
  );
}

export default Footer;
