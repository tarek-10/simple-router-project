import React from "react";
import img from "../../assets/straw.jpg";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1 className="display-5 fw-bold">Welcome to My Website</h1>
        <p className="text-muted">Discover amazing content and stories!</p>
      </div>

      <div className="card mx-auto shadow-lg" style={{ width: "22rem" }}>
        <img src={img} className="card-img-top" alt="Book Cover" />
        <div className="card-body text-center">
          <h5 className="card-title">Featured Story</h5>
          <p className="card-text">
            A touching story full of inspiration and moral lessons.
          </p>
          <Link to="/about" className="btn btn-primary">
            Read Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
