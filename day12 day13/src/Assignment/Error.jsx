import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Error() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light text-center">
      <div>
        <h1 className="display-4 text-danger">Oops!</h1>
        <h2 className="mb-4">404 - Page Not Found</h2>
        <p className="lead mb-5">The page you are looking for might have been removed or is temporarily unavailable.</p>
        <a href="/" className="btn btn-primary btn-lg">Go Back Home</a>
      </div>
    </div>
  );
}

export default Error;
