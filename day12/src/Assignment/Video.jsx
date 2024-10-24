// import React from 'react'

// function Video() {
//   return (
//     <div>
//       <h1>Video</h1>
//     </div>
//   )
// }

// export default Video


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Video() {
  return (
    <div className="container mt-5">
      {/* Page Header */}
      <header className="text-center mb-5">
        <h1>Travel Videos</h1>
        <p className="lead">Explore our collection of travel videos showcasing stunning destinations and experiences.</p>
      </header>

      {/* Video Showcase Section */}
      <section className="mb-5">
        <h2 className="mb-4">Featured Travel Videos</h2>
        <div className="row">
          {/* Video 1 */}
          <div className="col-md-6 mb-4">
            <div className="card">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/your-video-id-1" // Replace with actual video ID
                title="Travel Video 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="card-body">
                <h5 className="card-title">Exploring the Streets of Paris</h5>
                <p className="card-text">Join us as we stroll through the iconic streets of Paris, visiting famous landmarks and hidden gems.</p>
              </div>
            </div>
          </div>

          {/* Video 2 */}
          <div className="col-md-6 mb-4">
            <div className="card">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/your-video-id-2" // Replace with actual video ID
                title="Travel Video 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="card-body">
                <h5 className="card-title">Adventure in the Swiss Alps</h5>
                <p className="card-text">Experience the breathtaking beauty of the Swiss Alps through this thrilling adventure video.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips for Creating Travel Videos Section */}
      <section>
        <h2 className="mb-4">Tips for Capturing Stunning Travel Videos</h2>
        <ul className="list-group mb-5">
          <li className="list-group-item">1. Use a tripod for stability to avoid shaky footage.</li>
          <li className="list-group-item">2. Shoot during the golden hour for beautiful lighting.</li>
          <li className="list-group-item">3. Capture B-roll footage to add variety to your videos.</li>
          <li className="list-group-item">4. Keep your videos concise and engaging for viewers.</li>
          <li className="list-group-item">5. Edit your videos with music and transitions to enhance the viewing experience.</li>
        </ul>
      </section>
    </div>
  );
}

export default Video;
