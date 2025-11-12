// import { useState } from "react";
import img from "../../assets/image.png";
// import img1 from "../../assets/image2.png";
import { Link, useNavigate } from "react-router-dom";
function Content() {
  // const [message, setMessage] = useState("");
  const navigate = useNavigate();
  let myname = "tarek mohamed";
  let myage = 35;
  // function myFunction() {
  //   let data = `Hello Mr : ${myname}  Your Age is  ${myage}`;
  //   return data;
  // }
  function setNameAndAge(name, age) {
    myname = name;
    myage = age;
    let data = { name: myname, age: myage };
    navigate("/details", { state: data });
  }
  return (
    <>
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
                <h5 className="card-title">Name : {myname}</h5>
                <h5 className="card-title">Age : {myage}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card’s content.
                </p>
                <button
                  to="/details"
                  className="btn btn-primary"
                  onClick={() => setNameAndAge("shady mohamed", 40)}
                >
                  Go somewhere
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
