// import React from 'react'

// function Relax() {
//   return (
//     <div>
//       <h1>Relax</h1>
//     </div>
//   )
// }

// export default Relax
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Relax() {
  return (
    <div className="container mt-5">
      {/* Page Header */}
      <header className="text-center mb-5">
        <h1>Relax and Rejuvenate</h1>
        <p className="lead">Discover the best destinations to unwind and find your inner peace.</p>
      </header>

      {/* Featured Relaxation Destinations Section */}
      <section className="mb-5">
        <h2 className="mb-4">Top Relaxation Destinations</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/400x300" className="card-img-top" alt="Destination 1" />
              <div className="card-body">
                <h5 className="card-title">Bali, Indonesia</h5>
                <p className="card-text">Bali offers tranquil beaches, luxurious spas, and calming retreats amidst natural beauty.</p>
                <a href="#bali" className="btn btn-primary">Explore Bali</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/400x300" className="card-img-top" alt="Destination 2" />
              <div className="card-body">
                <h5 className="card-title">Santorini, Greece</h5>
                <p className="card-text">Relax with stunning views of the Aegean Sea, serene sunsets, and tranquil seaside villages.</p>
                <a href="#santorini" className="btn btn-primary">Explore Santorini</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/400x300" className="card-img-top" alt="Destination 3" />
              <div className="card-body">
                <h5 className="card-title">Maui, Hawaii</h5>
                <p className="card-text">Maui offers lush landscapes, quiet beaches, and serene hiking trails for a peaceful escape.</p>
                <a href="#maui" className="btn btn-primary">Explore Maui</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relaxation Tips Section */}
      <section className="mb-5">
        <h2 className="mb-4">Relaxation Tips While Traveling</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="card p-3 bg-light">
              <h5>Find Quiet Spots</h5>
              <p>Look for serene locations, whether it’s a hidden beach, a quiet park, or a secluded mountain trail, to recharge.</p>
              <a href="#quiet-spots" className="btn btn-secondary">Learn More</a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card p-3 bg-light">
              <h5>Travel Light and Slow</h5>
              <p>Slow travel allows you to truly unwind and immerse yourself in the local culture, taking the stress out of your journey.</p>
              <a href="#slow-travel" className="btn btn-secondary">Read More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Retreats Section */}
      <section className="mb-5">
        <h2 className="mb-4">Wellness Retreats to Rejuvenate</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/400x300" className="card-img-top" alt="Retreat 1" />
              <div className="card-body">
                <h5 className="card-title">Yoga Retreat in Costa Rica</h5>
                <p className="card-text">Reconnect with your body and mind in the tranquil jungles and beaches of Costa Rica.</p>
                <a href="#costa-rica" className="btn btn-primary">Discover Costa Rica</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/400x300" className="card-img-top" alt="Retreat 2" />
              <div className="card-body">
                <h5 className="card-title">Spa Retreat in the Swiss Alps</h5>
                <p className="card-text">Unwind at luxurious alpine spa resorts, surrounded by the breathtaking Swiss Alps.</p>
                <a href="#swiss-alps" className="btn btn-primary">Explore Swiss Alps</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/400x300" className="card-img-top" alt="Retreat 3" />
              <div className="card-body">
                <h5 className="card-title">Meditation Retreat in India</h5>
                <p className="card-text">Experience mindfulness and inner peace in India's serene meditation centers.</p>
                <a href="#india" className="btn btn-primary">Find Out More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Relax;
