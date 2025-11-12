import React from "react";
import img from "../../../assets/straw.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Details() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  if (!data) {
    return (
      <div className="container text-center mt-5">
        <h3>No user data found 😕</h3>
        <button className="btn btn-primary mt-3" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="container m-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={img}
              style={{ width: "130px", height: "130px", borderRadius: "50%" }}
              className="card-img-top"
              alt="Card Image"
            />
            <div className="card-body">
              <h5 className="card-title">Name : {data.name}</h5>
              <h5 className="card-title">Age : {data.age}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
              <Link to="/" className="btn btn-primary">
                Go somewhere
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
