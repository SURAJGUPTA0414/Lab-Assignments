// import React from 'react'

// function Footer() {
//   return (
//     <div>
//       <h1>Footer</h1>
//     </div>
//   )
// }

// export default Footer

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 p-4">
      <div className="container">
        <div className="row">
          {/* Column 1: About Us */}
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>We are passionate travelers sharing our experiences and tips to inspire others to explore the world.</p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/home" className="text-white">Home</a></li>
              <li><a href="/about" className="text-white">About</a></li>
              <li><a href="/travel" className="text-white">Travel</a></li>
              <li><a href="/eat" className="text-white">Eat</a></li>
              <li><a href="/relax" className="text-white">Relax</a></li>
              <li><a href="/videos" className="text-white">Videos</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: <a href="mailto:info@travelblog.com" className="text-white">info@travelblog.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="text-white">+1 234 567 890</a></p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="text-center mt-4">
          <h5>Follow Us</h5>
          <a href="https://facebook.com" className="text-white mx-2">Facebook</a>
          <a href="https://twitter.com" className="text-white mx-2">Twitter</a>
          <a href="https://instagram.com" className="text-white mx-2">Instagram</a>
          <a href="https://youtube.com" className="text-white mx-2">YouTube</a>
        </div>
        
        {/* Copyright Section */}
        <div className="text-center mt-4">
          <small>© {new Date().getFullYear()} Travel Blog. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

