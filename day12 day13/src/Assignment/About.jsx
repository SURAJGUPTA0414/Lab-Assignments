
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS

function About() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">About Our Travel Blog</h1>
      
      {/* About Section */}
      <div className="row">
        <div className="col-md-6 mb-4">
          <img src="https://via.placeholder.com/500x300" alt="Travel Blog" className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <h2>Who We Are</h2>
          <p>
            Welcome to our travel blog! We're passionate explorers dedicated to sharing our adventures with the world. Whether you're a seasoned traveler or just looking for inspiration for your next trip, our blog is filled with exciting stories, travel tips, and stunning photography from across the globe.
          </p>
          <p>
            Our mission is to inspire wanderlust and provide helpful guides and recommendations for exploring new destinations. We believe travel is a way to connect with cultures, meet new people, and experience the beauty of our planet.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="row mt-5">
        <div className="col-md-6">
          <h2>Our Mission</h2>
          <p>
            We aim to make travel more accessible to everyone. Whether it's discovering hidden gems in your own backyard or embarking on a journey across the world, our blog offers insights and advice for every kind of traveler. From budget-friendly tips to luxury travel experiences, we cover it all!
          </p>
          <p>
            Our goal is to help you create unforgettable memories, expand your horizons, and discover the joy of travel. Join us on this exciting adventure!
          </p>
        </div>
        <div className="col-md-6 mb-4">
          <img src="https://via.placeholder.com/500x300" alt="Mission" className="img-fluid rounded" />
        </div>
      </div>

      {/* Team Section */}
      <div className="row mt-5">
        <h2 className="text-center mb-4">Meet Our Team</h2>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img src="https://via.placeholder.com/350x350" className="card-img-top" alt="Team Member" />
            <div className="card-body">
              <h5 className="card-title">John Doe</h5>
              <p className="card-text">Founder & Travel Writer</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img src="https://via.placeholder.com/350x350" className="card-img-top" alt="Team Member" />
            <div className="card-body">
              <h5 className="card-title">Jane Smith</h5>
              <p className="card-text">Photographer & Content Creator</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img src="https://via.placeholder.com/350x350" className="card-img-top" alt="Team Member" />
            <div className="card-body">
              <h5 className="card-title">Alex Johnson</h5>
              <p className="card-text">Editor & Travel Guide Researcher</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;
