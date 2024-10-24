// import React from 'react'

// function Travel() {
//   return (
//     <div>
//       <h1>Travel</h1>
//     </div>
//   )
// }

// export default Travel


import React from 'react';


function Travel() {
  return (
    <div className="container mt-5">
      {/* Page Header */}
      <header className="text-center mb-5">
        <h1>Explore the World with Us</h1>
        <p className="lead">Your go-to guide for breathtaking destinations and travel tips!</p>
      </header>

      {/* Featured Destinations Section */}
      <section className="mb-5">
        <h2 className="mb-4">Featured Destinations</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/400x300" className="card-img-top" alt="Destination 1" />
              <div className="card-body">
                <h5 className="card-title">Bali, Indonesia</h5>
                <p className="card-text">Discover the tropical paradise of Bali, known for its beautiful beaches, temples, and rice terraces.</p>
                <a href="#bali" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/400x300" className="card-img-top" alt="Destination 2" />
              <div className="card-body">
                <h5 className="card-title">Paris, France</h5>
                <p className="card-text">Experience the charm of Paris with its iconic landmarks, world-class cuisine, and art galleries.</p>
                <a href="#paris" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/400x300" className="card-img-top" alt="Destination 3" />
              <div className="card-body">
                <h5 className="card-title">Kyoto, Japan</h5>
                <p className="card-text">Explore the cultural heart of Japan with its stunning temples, gardens, and traditional tea houses.</p>
                <a href="#kyoto" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Tips Section */}
      <section className="mb-5">
        <h2 className="mb-4">Travel Tips</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="card p-3 bg-light">
              <h5>Packing Tips for Long Trips</h5>
              <p>Learn how to pack efficiently for long journeys, so you’re always prepared without overpacking!</p>
              <a href="#packing-tips" className="btn btn-secondary">Read Tips</a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card p-3 bg-light">
              <h5>Budget-Friendly Travel Hacks</h5>
              <p>Find out how to make the most of your travel budget with smart tips for flights, accommodations, and dining.</p>
              <a href="#budget-travel" className="btn btn-secondary">Discover Hacks</a>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts Section */}
      <section>
        <h2 className="mb-4">Recent Blog Posts</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/400x250" className="card-img-top" alt="Blog Post 1" />
              <div className="card-body">
                <h5 className="card-title">A Weekend in Rome</h5>
                <p className="card-text">A quick guide to experiencing the best of Rome in just a weekend.</p>
                <a href="#rome" className="btn btn-primary">Read Post</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/400x250" className="card-img-top" alt="Blog Post 2" />
              <div className="card-body">
                <h5 className="card-title">The Best Beaches in Thailand</h5>
                <p className="card-text">Discover the most beautiful beaches in Thailand, from Phuket to Koh Samui.</p>
                <a href="#thailand-beaches" className="btn btn-primary">Read Post</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/400x250" className="card-img-top" alt="Blog Post 3" />
              <div className="card-body">
                <h5 className="card-title">Hiking in the Swiss Alps</h5>
                <p className="card-text">A comprehensive guide to some of the best hiking trails in the Swiss Alps.</p>
                <a href="#swiss-alps" className="btn btn-primary">Read Post</a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Travel;
