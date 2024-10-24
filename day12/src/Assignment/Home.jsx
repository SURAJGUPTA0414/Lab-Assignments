// import React from 'react'

// function Home() {
//   return (
//     <div>
//       <h1>
//         Home
//       </h1>
//     </div>
//   )
// }

// export default Home


import React from 'react';

function Home() {
  return (
    <div className="container my-5">
      {/* Hero Section */}
      <div className="jumbotron text-center bg-dark text-white p-5 rounded">
        <h1 className="display-4">Welcome to Our Travel Blog</h1>
        <p className="lead">Explore the best travel destinations, tips, and guides for your next adventure!</p>
        <a href="#featured" className="btn btn-light btn-lg mt-3">Explore Now</a>
      </div>

      {/* Featured Section */}
      <div id="featured" className="my-5">
        <h2 className="text-center mb-4">Featured Destinations</h2>
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-4">
            <div className="card mb-4">
              <img src="https://via.placeholder.com/300" className="card-img-top" alt="Destination 1" />
              <div className="card-body">
                <h5 className="card-title">Beautiful Beaches</h5>
                <p className="card-text">Discover the most stunning beaches around the world and plan your beach holiday today!</p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div className="card mb-4">
              <img src="https://via.placeholder.com/300" className="card-img-top" alt="Destination 2" />
              <div className="card-body">
                <h5 className="card-title">Mountain Adventures</h5>
                <p className="card-text">Climb the highest peaks and explore the breathtaking mountain landscapes.</p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div className="card mb-4">
              <img src="https://via.placeholder.com/300" className="card-img-top" alt="Destination 3" />
              <div className="card-body">
                <h5 className="card-title">Cultural Expeditions</h5>
                <p className="card-text">Immerse yourself in different cultures and traditions around the globe.</p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="text-center my-5">
        <h3>Subscribe to our Newsletter</h3>
        <p>Get the latest travel tips and destination guides straight to your inbox.</p>
        <form className="form-inline justify-content-center">
          <input type="email" className="form-control mr-2" placeholder="Enter your email" />
          <button type="submit" className="btn btn-primary">Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
