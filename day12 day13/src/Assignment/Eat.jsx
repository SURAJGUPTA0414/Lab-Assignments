// import React from 'react'

// function Eat() {
//   return (
//     <div>
//       <h1>Eat</h1>
//     </div>
//   )
// }

// export default Eat


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS

function Eat() {
  return (
    <div className="container mt-5">
      {/* Page Header */}
      <header className="text-center mb-5">
        <h1>Discover the World's Best Cuisine</h1>
        <p className="lead">Explore global food experiences and savor every bite!</p>
      </header>

      {/* Featured Food Spots Section */}
      <section className="mb-5">
        <h2 className="mb-4">Must-Try Food Destinations</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/400x300" className="card-img-top" alt="Destination 1" />
              <div className="card-body">
                <h5 className="card-title">Tokyo, Japan</h5>
                <p className="card-text">From sushi to ramen, experience the authentic flavors of Tokyo’s bustling food scene.</p>
                <a href="#tokyo" className="btn btn-primary">Explore Tokyo Eats</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/400x300" className="card-img-top" alt="Destination 2" />
              <div className="card-body">
                <h5 className="card-title">Naples, Italy</h5>
                <p className="card-text">Indulge in the birthplace of pizza and taste the finest Italian dishes in Naples.</p>
                <a href="#naples" className="btn btn-primary">Explore Naples Eats</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/400x300" className="card-img-top" alt="Destination 3" />
              <div className="card-body">
                <h5 className="card-title">Bangkok, Thailand</h5>
                <p className="card-text">Explore street food markets in Bangkok with its exotic flavors and vibrant dishes.</p>
                <a href="#bangkok" className="btn btn-primary">Explore Bangkok Eats</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Food Tips Section */}
      <section className="mb-5">
        <h2 className="mb-4">Food Tips While Traveling</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="card p-3 bg-light">
              <h5>How to Eat Like a Local</h5>
              <p>Find the best places to eat where locals go, so you can experience authentic, affordable, and delicious meals while traveling.</p>
              <a href="#local-eats" className="btn btn-secondary">Learn More</a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card p-3 bg-light">
              <h5>Tips for Food Safety While Traveling</h5>
              <p>Learn essential food safety tips to keep you healthy while indulging in new and exciting cuisines.</p>
              <a href="#food-safety" className="btn btn-secondary">Read Tips</a>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Recipes Section */}
      <section className="mb-5">
        <h2 className="mb-4">Popular Travel Recipes</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/400x300" className="card-img-top" alt="Recipe 1" />
              <div className="card-body">
                <h5 className="card-title">Italian Pasta Carbonara</h5>
                <p className="card-text">Learn how to make this classic Roman dish with simple ingredients and authentic flavors.</p>
                <a href="#carbonara" className="btn btn-primary">Get Recipe</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/400x300" className="card-img-top" alt="Recipe 2" />
              <div className="card-body">
                <h5 className="card-title">Thai Green Curry</h5>
                <p className="card-text">Bring the flavors of Thailand to your kitchen with this fragrant and spicy green curry recipe.</p>
                <a href="#thai-green-curry" className="btn btn-primary">Get Recipe</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/400x300" className="card-img-top" alt="Recipe 3" />
              <div className="card-body">
                <h5 className="card-title">Mexican Tacos al Pastor</h5>
                <p className="card-text">Master the art of making this iconic Mexican dish with marinated pork and fresh toppings.</p>
                <a href="#tacos-al-pastor" className="btn btn-primary">Get Recipe</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Eat;
